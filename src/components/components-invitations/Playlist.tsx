import PlaylistSpotify from "./PlaylistSpotify";

export default function Playlist() {
    return (
        <div className="playlist flex flex-col gap-10" >
            <p className="text-[24px] text-center">Agrega tu mejor canción a mi playlist 🫰</p>
            <PlaylistSpotify />
        </div>
    )
}
