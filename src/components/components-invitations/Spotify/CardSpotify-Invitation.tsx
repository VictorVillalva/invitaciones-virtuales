"use client";
//** Hook */
import {  useSpotifyInvitation } from "@/hooks/useSpotify";
import Image from "next/image";
//** Assets */
import { inter, zain } from "@/assets/fonts/fonts";
import Spotify from "@/assets/icons/Spotify";
import LogoPamela from "@/assets/images/PamelaCastilloXV/Logo-Pamela.png";
//** Components */
import InputSearch from "@/components/ui/InputSearch";
import { Separator } from "@/components/ui/separator";
import AlertInvitation from "../Alert-Invitation";
import DialogInvitation from "../Dialog-Invitation";
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
    success,
    playlistSongs,
    isModalOpen,
    showAlert,
    searchSong,
    handleSelectSong,
    handleCloseModal,
    handleCloseAlert,
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
      {/* Mostrar mensaje si no hay canciones */}
      {showAlert && (
        <AlertInvitation
          title="Ocurrio un Error"
          icon="alert"
          description={error || "Por favor revisa la playlist"}
          variant="destructive"
          close={handleCloseAlert}
        />
      )}
      {/* Mostrar mensaje si se agrego la cancion */}
      {success && (
        <AlertInvitation
          title="Canción agregada"
          icon="check"
          description={success || "Haz agregado la canción con exito."}
          close={handleCloseAlert}
        />
      )}
      {/* Mostrar mensaje si la cancion ya fue agregada */}
      {isModalOpen && (
        <DialogInvitation
          title="La canción ya esta agregada"
          classNameTitle="text-[40px] text-pamela-primary tracking-[-0.04em] leading-none"
          description="La cancion que tratas de seleccionar ya fue agregada a la playlist, intenta agregar otra."
          classNameDescription="text-pamela-primary text-[18px] leading-none tracking-[-0.02em]"
          classNameButton="rounded-[16px] text-[18px] text-white bg-[linear-gradient(to_right,#435A62_0%,#668995_34%,#77A0AF_68%,#89B8C8_100%)]"
          tipography={zain}
          logo={LogoPamela}
          closeModal={handleCloseModal}
        />
      )}
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
