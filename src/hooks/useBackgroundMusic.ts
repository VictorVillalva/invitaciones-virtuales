'use client'
import { useRef, useState, useEffect, useCallback } from "react";

export const useBackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [alert, setAlert] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [typeAlert, setTypeAlert] = useState("");
    const [userInteracted, setUserInteracted] = useState<boolean>(false);


    // Define tryPlayAudio con useCallback
    const tryPlayAudio = useCallback(async (): Promise<void> => {
        if (audioRef.current) {
            try {
                if (userInteracted) {
                    audioRef.current.muted = false;
                    audioRef.current.volume = 1;
                }
                await audioRef.current.play();
                setIsPlaying(true);
                setAlert(null);
            } catch {
                if (!userInteracted) {
                    showSuccessAlert("Haz clic en reproducir para escuchar la música de fondo.", true)
                } else {
                    showErrorAlert("No se pudo reproducir el audio.")
                }
                setIsPlaying(false);
            }
        }
    }, [userInteracted]);

    // Escuchar las interacciones del usuario
    useEffect(() => {
        const handleUserInteraction = () => {
            setUserInteracted(true);
            if (audioRef.current && !isPlaying && alert) {
                // Si hay un error y el usuario interactúa, intentamos reproducir de nuevo
                tryPlayAudio();
            }
        };
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);

        return () => {
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        };
    }, [isPlaying, alert, tryPlayAudio]);

    // Cuando se detecta un error, mostrar el alert
    useEffect(() => {
        if (alert) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000); // Ocultar alerta después de 5 segundos
        } else {
            setShowAlert(false);
        }
    }, [alert]);

    // Intenta reproducir automáticamente cuando el componente se monta
    useEffect(() => {
        const attemptAutoplay = async (): Promise<void> => {
            if (audioRef.current) {
                try {
                    audioRef.current.muted = true;
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch {
                    showSuccessAlert("Haz clic en reproducir para escuchar la música de fondo.", true)
                }
            }
        };

        const timer = setTimeout(() => {
            attemptAutoplay();
        }, 500);

        // Guarda el ref actual en una variable
        const audio = audioRef.current;

        // Limpieza al desmontar
        return () => {
            clearTimeout(timer);
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, []);

    const togglePlay = useCallback((): void => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.muted = false; // Asegúrate de que no esté silenciado
                tryPlayAudio();
            }
        }
    }, [isPlaying, tryPlayAudio]);

    // Verificar que el archivo se carga correctamente
    const handleCanPlay = () => {
        //setAudioError(null);
        //console.log("Audio cargado correctamente y listo para reproducir");
    };

    // Manejar errores de carga
    const handleError = () => {
        showErrorAlert("No se pudo cargar el archivo de audio. Verifique la ruta y el formato.")
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        // Mantenemos el error para que no se redispare el alert
    };

    //Manejo de alert de error
    const showErrorAlert = (message: string) => {
        setAlert(message);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
    };

    const showSuccessAlert = (message: string, show: boolean) => {
        setAlert(message);
        setShowAlert(show);
        setTypeAlert("default")
        setTimeout(() => setShowAlert(false), 5000);
    }

    return{
        audioRef,
        isPlaying,
        alert,
        showAlert,
        typeAlert,
        togglePlay,
        handleCanPlay,
        handleError,
        handleCloseAlert,
    }
}