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

export default function BackgroundMusic({audioSrc}:BackgroundMusicProps) {
    const {
        audioRef,
        isPlaying,
        alert,
        showAlert,
        typeAlert,
        togglePlay,
        handleCanPlay,
        handleError,
        handleCloseAlert
    } = useBackgroundMusic()
    return (
        <div className={`${quicksand.className} fixed bottom-4 right-4 z-50 px-2`}>
            <audio
                ref={audioRef}
                src={audioSrc}
                loop
                preload="auto"
                muted={!isPlaying}
                onCanPlay={handleCanPlay}
                onError={handleError}
            />
            <button
                onClick={togglePlay}
                className="w-auto flex flex-row gap-2 bg-gray-700 text-white py-2 px-2 rounded-full shadow-lg hover:bg-gray-700"
                disabled={!!alert && alert.includes("No se pudo cargar")}
            >
                {isPlaying ? 
                    <>
                        <VolumeOff width={20}/>
                    </>
                    :
                    <>
                        <Volume2 width={20}/>
                    </>}
            </button>
            {/* Mostrar mensaje si no hay canciones */}
            {alert && showAlert &&
                <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-full p-4">
                    <Alert variant={
                        typeAlert === "destructive" ? "destructive" :
                        typeAlert === "default" ? "default" :
                        undefined
                    }>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>
                            <div className='flex flex-row justify-between'>
                                <span>
                                    {/* Mensaje que cambia según el tipo de alerta */}
                                    {typeAlert === "default" ? "Notificación" :
                                    typeAlert === "error" ? "Se ha producido un error" :
                                    "Notificación"}
                                </span>
                                <button onClick={handleCloseAlert}><X className="h-4 w-4" /></button>
                            </div>
                        </AlertTitle>
                        <AlertDescription>
                            {/* No se logro reproducir la cancion. */}
                            {alert}
                        </AlertDescription>
                    </Alert>
                </div>
            }
        </div>
    )
}
