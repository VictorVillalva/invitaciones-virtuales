'use client'
//** Components */
import CardSpotifyInvitation from "./Spotify/CardSpotify-Invitation";

interface PlayListProps {
  title?: string;
  description?: string;
  classNameTitle?: string;
  classNameDescription?: string;
}

export default function PlaylistInvitation({
  title = "Playlist Spotify",
  description,
  classNameTitle,
  classNameDescription,
}: PlayListProps) {
  return (
    <>
      <div className="playlist flex flex-col gap-10 px-6">
        <div className="flex flex-col text-center">
          <h3 className={`${classNameTitle} text-[40px]`}>{title}</h3>
          <p className={`${classNameDescription}`}>{description}</p>
        </div>
        <CardSpotifyInvitation
          apiRefreshToken={process.env.NEXT_PUBLIC_API_REFRESH_TOKEN_PAMELA}
          spotifyPlaylistId={process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID_PAMELA}
         />
      </div>
    </>
  );
}
