'use client'
import { useRef, useState, useEffect } from "react";

export const useBackgroundMusic = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audioError, setAudioError] = useState<string | null>(null);

    // Intenta reproducir automáticamente cuando el componente se monta
    useEffect(() => {
        const attemptAutoplay = async (): Promise<void> => {
            if (audioRef.current) {
                try {
                    // Primero intentamos reproducir sin sonido (más probable que sea permitido)
                    audioRef.current.muted = true;
                    await audioRef.current.play();

                    // Si tiene éxito, intentamos activar el sonido
                    setTimeout(() => {
                        if (audioRef.current) {
                            audioRef.current.muted = false;
                            setIsPlaying(true);
                            //console.log("Reproducción automática con sonido activada");
                        }
                    }, 1000);
                } catch (error) {
                    //console.warn("La reproducción automática fue bloqueada:", error);
                    setAudioError("La reproducción automática fue bloqueada por el navegador. Haz clic en reproducir para escuchar la música.");
                }
            }
        };

        attemptAutoplay();

        // Limpieza al desmontar
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    const togglePlay = (): void => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.muted = false; // Asegúrate de que no esté silenciado
                audioRef.current.play().catch(error => {
                    //console.error("Error reproduciendo audio:", error);
                    setAudioError(`Error: ${error.message}`);
                });
                setIsPlaying(true);
            }
        }
    };

    // Verificar que el archivo se carga correctamente
    const handleCanPlay = (): void => {
        setAudioError(null);
        //console.log("Audio cargado correctamente y listo para reproducir");
    };

    // Manejar errores de carga
    const handleError = (): void => {
        //console.error("Error al cargar el audio:", e);
        setAudioError("No se pudo cargar el archivo de audio. Verifique la ruta y el formato.");
    };
    return{
        audioRef,
        isPlaying,
        audioError,
        togglePlay,
        handleCanPlay,
        handleError,
    }
}