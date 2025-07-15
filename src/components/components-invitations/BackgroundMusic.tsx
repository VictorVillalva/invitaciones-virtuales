import { quicksand } from '@/assets/fonts/fonts'
import { useBackgroundMusic } from '@/hooks/useBackgroundMusic'
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { AlertCircle, Volume2, VolumeOff, X } from 'lucide-react';

interface BackgroundMusicProps {
    audioSrc: string;
}

export default function BackgroundMusic({ audioSrc }: BackgroundMusicProps) {
    const {
        audioRef,
        isPlaying,
        alert,
        showAlert,
        typeAlert,
        userInteracted,
        togglePlay,
        handleError,
        handleCloseAlert
    } = useBackgroundMusic()
    return (
        <div className={`${quicksand.className} fixed bottom-4 right-4 z-50 px-2`}>
            <audio
                ref={audioRef}
                src={audioSrc}
                loop
                preload="metadata"
                onError={handleError}
                style={{ display: 'none' }}
            />
            <button
                onClick={togglePlay}
                className={`w-auto flex flex-row gap-2 py-2 px-2 rounded-full shadow-lg transition-all duration-300 ${!userInteracted && alert
                    ? 'bg-blue-600 hover:bg-blue-700 text-white animate-pulse'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                    } ${!!alert && alert.includes("No se pudo cargar") ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!!alert && alert.includes("No se pudo cargar")}
                title={!userInteracted && alert ? "Toca para activar la música" : isPlaying ? "Pausar música" : "Reproducir música"}
            >
                {isPlaying ?
                    <VolumeOff width={20} />
                    :
                    <Volume2 width={20} />
                }
            </button>
            {/* Mostrar mensaje de interacción requerida */}
            {alert && showAlert && (
                <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-full max-w-md p-4">
                    <Alert variant={
                        typeAlert === "error" ? "destructive" :
                            typeAlert === "default" ? "default" :
                                undefined
                    }>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>
                            <div className='flex flex-row justify-between items-center'>
                                <span>
                                    {typeAlert === "default" ? "Música de fondo" :
                                        typeAlert === "error" ? "Error de audio" :
                                            "Notificación"}
                                </span>
                                <button
                                    onClick={handleCloseAlert}
                                    className="hover:bg-gray-200 rounded-full p-1 transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </AlertTitle>
                        <AlertDescription className="mt-2">
                            {alert}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    )
}
