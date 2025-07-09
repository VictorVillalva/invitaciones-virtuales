'use client'
import { useRef, useState, useEffect, useCallback } from "react";

export const useBackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audioError, setAudioError] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [userInteracted, setUserInteracted] = useState<boolean>(false);
    // Define tryPlayAudio con useCallback
    const tryPlayAudio = useCallback(async (): Promise<void> => {
        if (audioRef.current) {
            try {
                // Aseguramos que no está silenciado si el usuario ya interactuó
                if (userInteracted) {
                    audioRef.current.muted = false;
                }
                await audioRef.current.play();
                setIsPlaying(true);
                setAudioError(null);
            } catch (error: any) {
                // Si el usuario no ha interactuado, mostramos un mensaje amigable
                if (!userInteracted) {
                    setAudioError("Haz clic en reproducir para escuchar la música de fondo.");
                } else {
                    setAudioError(`Error: ${error.message || "No se pudo reproducir el audio"}`);
                }
                setIsPlaying(false);
            }
        }
    }, [userInteracted]);

    // Escuchar las interacciones del usuario
    useEffect(() => {
        const handleUserInteraction = () => {
            setUserInteracted(true);
            if (audioRef.current && !isPlaying && audioError) {
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
    }, [isPlaying, audioError, tryPlayAudio]);

    // Cuando se detecta un error, mostrar el alert
    useEffect(() => {
        if (audioError) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000); // Ocultar alerta después de 5 segundos
        } else {
            setShowAlert(false);
        }
    }, [audioError]);

    // Intenta reproducir automáticamente cuando el componente se monta
    useEffect(() => {
        const attemptAutoplay = async (): Promise<void> => {
            if (audioRef.current) {
                try {
                    // Primero intentamos reproducir sin sonido
                    audioRef.current.muted = true;
                    await audioRef.current.play();

                    // Si tiene éxito, mantenemos la reproducción pero silenciada
                    // hasta que el usuario interactúe
                    setIsPlaying(true);
                } catch (error) {
                    // Si falla, simplemente mostramos un mensaje indicando que se necesita interacción
                    setAudioError("Haz clic en reproducir para escuchar la música de fondo.");
                }
            }
        };

        // Pequeño retraso para asegurarnos de que el audio está listo
        const timer = setTimeout(() => {
            attemptAutoplay();
        }, 500);

        // Limpieza al desmontar
        return () => {
            clearTimeout(timer);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
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
        setAudioError("No se pudo cargar el archivo de audio. Verifique la ruta y el formato.");
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        // Mantenemos el error para que no se redispare el alert
    };


    
    return{
        audioRef,
        isPlaying,
        audioError,
        showAlert,
        togglePlay,
        handleCanPlay,
        handleError,
        handleCloseAlert,
    }
}