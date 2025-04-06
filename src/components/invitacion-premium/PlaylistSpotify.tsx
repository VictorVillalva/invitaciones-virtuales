'use client'
import { inter, quicksand } from '@/assets/fonts/fonts'
import Spotify from '@/assets/icons/Spotify'
import { useSpotify } from '@/hooks/useSpotify'
import { AlertCircle, CircleCheck, X } from "lucide-react"
import Image from "next/image";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import InputSearch from '../ui/InputSearch'

export default function PlaylistSpotify() {
    const {
        query,
        setQuery,
        songs,
        isLoading,
        error,
        success,
        playlistSongs,
        isModalOpen,
        searchSong,
        handleSelectSong,
        handleCloseModal,
        handleCloseAlert
    } = useSpotify()

    return (
        <div
            className={`${quicksand.className} bg-[#292929] flex flex-col w-full h-[420px] px-4 py-3 rounded-sm gap-4 `}
        >
            <div className="header flex flex-col">
                <div className="title flex flex-row justify-between items-center text-2xl font-semibold">
                    <p className="text-neutrals-100 text-white">Mi lista</p>
                    <Spotify width="80" height="80" />
                </div>
                <InputSearch
                    query={query}
                    setQuery={setQuery}
                    searchSong={searchSong}
                    songs={songs}
                    isLoading={isLoading}
                    selectSong={handleSelectSong}
                />
            </div>
            <hr className="bg-[#8D8D8D]" />
            {/* Mostrar mensaje si no hay canciones */}
            {error &&
                <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-full p-4">
                    <Alert variant="destructive" className='absolute top-0'>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            {/* No se logró agregar la canción. */}
                            {error}
                        </AlertDescription>
                    </Alert>
                </div>
            }
            {/* Mostrar mensaje si se agrego la cancion */}
            {success && 
                <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-full p-4">
                    <Alert className="shadow-lg">
                        <CircleCheck className="h-4 w-4" />
                        <AlertTitle>
                            <div className='flex flex-row justify-between'> 
                                <span>Canción agregada</span>
                                <button onClick={handleCloseAlert}><X className="h-4 w-4"/></button>
                            </div>
                        </AlertTitle>
                        <AlertDescription>{success}</AlertDescription>
                    </Alert>
                </div>
            }
            {/* Mostrar mensaje si la cancion ya fue agregada */}
            {isModalOpen && 
                <AlertDialog open onOpenChange={handleCloseModal}>
                    <AlertDialogContent className="rounded-sm text-[#292929]">
                        <AlertDialogHeader>
                            <AlertDialogTitle className={`${quicksand.className} text-2xl text-[#292929] flex flex-col gap-2`}>
                                <span className="text-6xl">🫣</span>
                                <p>Upss</p>
                            </AlertDialogTitle>
                            <AlertDialogDescription className={`${quicksand.className} `}>
                                La cancion que elegiste ya fue agregada, intenta agregar otra.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction className={`${quicksand.className} bg-[#CBA836]`} onClick={handleCloseModal}>Continuar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            }
            {/* Muestra texto si aun no hay canciones en la playlist */}
            {playlistSongs.length === 0 && !isLoading && !error && (
                <div className="flex flex-col items-center justify-center h-full font-light text-xs text-gray-400">
                    Aún no hay canciones agregadas.
                </div>
            )}
            {/* Muestra las canciones de la playlist */}
            {playlistSongs.length > 0 && (
                <div className={`${inter.className} space-y-4 overflow-auto`}>
                    {playlistSongs.map((song) => (
                        <div key={song.id} className="flex flex-row justify-start items-center gap-2">
                            {song.album?.images?.[0]?.url ? (
                                <Image
                                    src={song.album.images[0].url}
                                    alt={`${song.name} cover`}
                                    width={40}
                                    height={40}
                                    className="rounded"
                                />
                            ):(
                                //Imagen alternativa o espacio reservado
                                <div className="w-[40px] h-[40px] bg-gray-800 rounded" />
                            )}
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-sm text-white">{song.name}</p>
                                <p className="text-[12px] text-[#B3B3B3]">
                                    {song.artists?.map((artist) => artist.name).join(", ")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

