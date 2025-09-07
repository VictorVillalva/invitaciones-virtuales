"use client";
//** Hook */
import {  useSpotifyInvitation } from "@/hooks/useSpotify";
import Image from "next/image";
//** Assets */
import { inter } from "@/assets/fonts/fonts";
import Spotify from "@/assets/icons/Spotify";
//** Components */
import InputSearch from "@/components/ui/InputSearch";
import { Separator } from "@/components/ui/separator";
//** Interfaces or Types */
interface CardSpotify {
  apiRefreshToken?: string;
  spotifyPlaylistId?: string;
}

export default function CardSpotifyInvitation({
  apiRefreshToken,
  spotifyPlaylistId,
}: CardSpotify) {
  const {
    query,
    setQuery,
    songs,
    isLoading,
    error,
    playlistSongs,
    searchSong,
    handleSelectSong,
  } = useSpotifyInvitation({ apiRefreshToken, spotifyPlaylistId });

  return (
    <div
      className={`${inter.className} bg-[#292929] flex flex-col w-full h-[420px] px-4 py-2 rounded-sm gap-4 `}
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
      <Separator />
      {/* Muestra texto si aun no hay canciones en la playlist */}
      {playlistSongs.length === 0 && !isLoading && !error && (
        <div className="flex flex-col items-center justify-center h-full text-xs text-gray-400">
          Aún no hay canciones agregadas.
        </div>
      )}
      {/* Muestra las canciones de la playlist */}
      {playlistSongs.length > 0 && (
        <div className={`${inter.className} space-y-4 overflow-auto`}>
          {playlistSongs.map((song) => (
            <div
              key={song.id}
              className="flex flex-row justify-start items-center gap-2"
            >
              {song.album?.images?.[0]?.url ? (
                <Image
                  src={song.album.images[0].url}
                  alt={`${song.name} cover`}
                  width={40}
                  height={40}
                  className="rounded"
                />
              ) : (
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
  );
}
