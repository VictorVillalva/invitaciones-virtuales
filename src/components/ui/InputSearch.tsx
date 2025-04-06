import { useSearch } from '@/hooks/useSearch'
import type { InputSearchProps } from '@/types'
import Image from "next/image";

export default function InputSearch({query, setQuery, selectSong, searchSong, songs, isLoading}:InputSearchProps) {
    const {
        searchRef,
        debouncedQuery,
        showResults,
        handleInputChange,
        handleSelectSong,
        handleFocus,
    } = useSearch({query, setQuery, selectSong, searchSong, songs, isLoading})
    
    return (
        <div className="relative w-full" ref={searchRef}>
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    placeholder="Buscar canciones..."
                    className="w-full px-4 py-2 border  bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoComplete="off"
                />
            </div>

            {/* Contenedor de resultados con opacidad y transición */}
            <div
                className={`absolute z-10 w-full mt-1 transition-all duration-200 ${showResults && songs.length > 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                {/* Resultados de la búsqueda */}
                {songs.length > 0 && (
                    <ul className="bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto ">
                        {songs.map((song) => (
                            <li
                                key={song.id}
                                onClick={() => handleSelectSong(song.id)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center focus:bg-blue-400"
                            >
                                {song.album?.images?.[0]?.url && (
                                    <Image
                                        src={song.album.images[0].url}
                                        alt={`${song.name} cover`}
                                        width={50}
                                        height={50}
                                        className="w-10 h-10 object-cover mr-3 rounded"
                                    />
                                )}
                                <div className="flex flex-col">
                                    <div className="font-medium">{song.name}</div>
                                    <div className="text-sm text-gray-500">
                                        {song.artists?.map(artist => artist.name).join(", ")}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Mensaje cuando no hay resultados */}
            {showResults && debouncedQuery.trim() !== "" && !isLoading && songs.length === 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-4 text-center text-gray-500">
                    No se encontraron resultados para &quot;{debouncedQuery}&quot;
                </div>
            )}
        </div>
    )
}
