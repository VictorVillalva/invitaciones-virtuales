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
        setTimeout(() => setShowAlert(false), 5000);
    }, []);

    const showSuccessAlert = useCallback((message: string, show: boolean) => {
        // Evitar mostrar la misma alerta múltiples veces
        if (alert !== message) {
            setAlert(message);
            setShowAlert(show);
            setTypeAlert("default");
        }

    }, [alert]);

    // Define tryPlayAudio con useCallback
    const tryPlayAudio = useCallback(async (): Promise<void> => {
        if (audioRef.current) {
            try {
                // Preparar el audio para reproducir
                audioRef.current.muted = false;
                audioRef.current.volume = 1;
                
                await audioRef.current.play();
                setIsPlaying(true);
                
                // Limpiar alertas solo después de reproducir exitosamente
                if (alert) {
                    setAlert(null);
                    setShowAlert(false);
                }
            } catch (error) {
                console.error('Error al reproducir audio:', error);
                if (!userInteracted) {
                    showSuccessAlert("Toca la pantalla o presiona el botón de reproducir para escuchar la música de fondo.", true);
                } else {
                    showErrorAlert("No se pudo reproducir el audio.");
                }
                setIsPlaying(false);
            }
        }
    }, [userInteracted, alert, showErrorAlert, showSuccessAlert]);

    // Función para manejar la primera interacción del usuario
    const handleFirstInteraction = useCallback(() => {
        if (!userInteracted) {
            setUserInteracted(true);
            // Pequeño delay para evitar el parpadeo visual
            setTimeout(() => {
                if (audioRef.current && !isPlaying) {
                    tryPlayAudio();
                }
            }, 100);
        }
    }, [userInteracted, isPlaying, tryPlayAudio]);

    // Escuchar las interacciones del usuario (incluyendo eventos touch para móviles)
    useEffect(() => {
        const events = [
            'click', 
            'touchstart', 
            'touchend', 
            'keydown', 
            'scroll',
            'wheel'
        ];

        events.forEach(event => {
            document.addEventListener(event, handleFirstInteraction, { passive: true });
        });

        return () => {
            events.forEach(event => {
                document.removeEventListener(event, handleFirstInteraction);
            });
        };
    }, [handleFirstInteraction]);

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
            // Mostrar alerta inmediatamente sin intentar reproducir
            showSuccessAlert("Toca la pantalla o presiona el botón de reproducir para escuchar la música de fondo.", true);
        }

        // Guarda el ref actual en una variable para limpieza
        const audio = audioRef.current;

        // Limpieza al desmontar
        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [isInitialized, showSuccessAlert]);

    const togglePlay = useCallback((): void => {
        if (audioRef.current) {
            // Marcar como interacción del usuario si no lo estaba
            if (!userInteracted) {
                setUserInteracted(true);
            }
            
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.muted = false; // Asegúrate de que no esté silenciado
                tryPlayAudio();
            }
        }
    }, [isPlaying, tryPlayAudio, userInteracted]);

    // Manejar errores de carga
    const handleError = useCallback(() => {
        showErrorAlert("No se pudo cargar el archivo de audio. Verifique la ruta y el formato.");
    }, [showErrorAlert]);

    const handleCloseAlert = useCallback(() => {
        setShowAlert(false);
        setAlert(null);
    }, []);

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