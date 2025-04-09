import { quicksand } from '@/assets/fonts/fonts'
import { useBackgroundMusic } from '@/hooks/useBackgroundMusic'

interface BackgroundMusicProps {
    audioSrc: string;
    }

export default function BackgroundMusic({audioSrc}:BackgroundMusicProps) {
    const {
        audioRef,
        isPlaying,
        audioError,
        togglePlay,
        handleCanPlay,
        handleError,
    } = useBackgroundMusic()
    return (
        <div className={`${quicksand.className} fixed bottom-4 right-4 z-50 px-2`}>
            <audio
                ref={audioRef}
                src={audioSrc}
                loop
                preload="auto"
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
            {/* {audioError && (
            <div className="text-red-500 text-sm mt-2 bg-white p-1 rounded">
            {audioError}
            </div>
        )} */}
        </div>
    )
}
