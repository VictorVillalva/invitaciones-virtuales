import { quicksand } from '@/assets/fonts/fonts'
import { useBackgroundMusic } from '@/hooks/useBackgroundMusic'
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { AlertCircle, X } from 'lucide-react';

interface BackgroundMusicProps {
    audioSrc: string;
    }

export default function BackgroundMusic({audioSrc}:BackgroundMusicProps) {
    const {
        audioRef,
        isPlaying,
        audioError,
        showAlert,
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
                muted={true}
                onCanPlay={handleCanPlay}
                onError={handleError}
            />
            <button
                onClick={togglePlay}
                className="bg-gray-800 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-700"
                disabled={!!audioError && audioError.includes("No se pudo cargar")}
            >
                {isPlaying ? '🔇 Pausar' : '🔊 Reproducir'}
            </button>
            {/* Mostrar mensaje si no hay canciones */}
            {audioError && showAlert &&
                <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-full p-4">
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>
                            <div className='flex flex-row justify-between'>
                                <span>Error</span>
                                <button onClick={handleCloseAlert}><X className="h-4 w-4"/></button>
                            </div>
                        </AlertTitle>
                        <AlertDescription>
                            {/* No se logro reproducir la cancion. */}
                            {audioError}
                        </AlertDescription>
                    </Alert>
                </div>
            }
        </div>
    )
}
