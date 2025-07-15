'use client'
import { useRef, useState, useEffect, useCallback } from "react";

export const useBackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [alert, setAlert] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [typeAlert, setTypeAlert] = useState("");
    const [userInteracted, setUserInteracted] = useState<boolean>(false);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    // Manejo de alert de error
    const showErrorAlert = useCallback((message: string) => {
        setAlert(message);
        setShowAlert(true);
        setTypeAlert("error");
        setTimeout(() => setShowAlert(false), 1000);
    }, []);

    const showSuccessAlert = useCallback((message: string, show: boolean) => {
        // Evitar mostrar la misma alerta múltiples veces
        if (alert !== message) {
            setAlert(message);
            setShowAlert(show);
            setTypeAlert("default");
        }

    }, [alert]);

    // // Define tryPlayAudio con useCallback
    // const tryPlayAudio = useCallback(async (): Promise<void> => {
    //     if (audioRef.current) {
    //         try {
    //             // Preparar el audio para reproducir
    //             audioRef.current.muted = false;
    //             audioRef.current.volume = 1;
                
    //             await audioRef.current.play();
                
    //             setIsPlaying(true);
                
    //             // Limpiar alertas solo después de reproducir exitosamente
    //             if (alert) {
    //                 setAlert(null);
    //                 setShowAlert(false);
    //             }
    //         } catch (error) {
    //             console.error('Error al reproducir audio:', error);
    //             if (!userInteracted) {
    //                 showSuccessAlert("Toca la pantalla o presiona el botón de reproducir para escuchar la música de fondo.", true);
    //             } else {
    //                 showErrorAlert("No se pudo reproducir el audio.");
    //             }
    //             setIsPlaying(false);
    //         }
    //     }
    // }, [userInteracted, alert, showErrorAlert, showSuccessAlert]);

    // Escuchar las interacciones del usuario (incluyendo eventos touch para móviles)
    useEffect(() => {
        // Click/touchstart directo, solo una vez
        const handle = () => {
            if (!userInteracted) {
                setUserInteracted(true);
                if (audioRef.current && !isPlaying) {
                    audioRef.current.muted = false;
                    audioRef.current.volume = 1;
                    audioRef.current.play()
                        .then(() => {
                            setIsPlaying(true);
                        })
                        .catch((error) => {
                            showErrorAlert("No se pudo reproducir el audio.");
                            setIsPlaying(false);
                            console.error('Error al reproducir audio:', error);
                        });
                }
            }
            // Limpia listeners al primer intento real
            document.removeEventListener('click', handle);
            document.removeEventListener('touchstart', handle);
        };

        document.addEventListener('click', handle, { passive: true });
        document.addEventListener('touchstart', handle, { passive: true });

        return () => {
            document.removeEventListener('click', handle);
            document.removeEventListener('touchstart', handle);
        };
        // Incluye solo showErrorAlert aquí
    }, [userInteracted, isPlaying, showErrorAlert]);

    // Cuando se detecta un error, mostrar el alert
    useEffect(() => {
        if (alert && !showAlert) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 8000);

            return () => clearTimeout(timer);
        }
    }, [alert, showAlert]);

    // Mostrar alerta al montar el componente (sin intentar autoplay)
    useEffect(() => {
        if (!isInitialized) {
            setIsInitialized(true);
            showSuccessAlert("Toca la pantalla o presiona el botón de reproducir para escuchar la música de fondo.", true);
            // Mostrar alerta inmediatamente sin intentar reproducir
        }
    }, [isInitialized, showSuccessAlert]);

    const togglePlay = useCallback((): void => {
        if (audioRef.current) {
            if (!userInteracted) {
                setUserInteracted(true);
            }

            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.muted = false;
                audioRef.current.volume = 1;
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((error) => {
                        showErrorAlert("No se pudo reproducir el audio.");
                        setIsPlaying(false);
                        console.error('Error al reproducir audio:', error);
                    });
            }
        }
    }, [isPlaying, userInteracted, showErrorAlert]);

    // Manejar errores de carga
    const handleError = useCallback(() => {
        showErrorAlert("No se pudo cargar el archivo de audio. Verifique la ruta y el formato.");
    }, [showErrorAlert]);

    const handleCloseAlert = useCallback(() => {
        console.log('Cerrando alerta, audio debería seguir igual:', {
            isPlaying,
            currentTime: audioRef.current?.currentTime,
            paused: audioRef.current?.paused
        });
        setShowAlert(false);
        setAlert(null);
    }, [isPlaying]);

    useEffect(() => {
        if (userInteracted && showAlert) {
            setShowAlert(false);
            setAlert(null);
        }
    }, [userInteracted, showAlert]);

    return {
        audioRef,
        isPlaying,
        alert,
        showAlert,
        typeAlert,
        userInteracted,
        togglePlay,
        handleError,
        handleCloseAlert,
    };
};