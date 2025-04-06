import PlaylistSpotify from "../invitacion-premium/PlaylistSpotify";

export default function Playlist() {
    return (
        <div className="playlist flex flex-col gap-10" data-aos="fade-up">
            <p className="text-[24px] text-center">Agrega tu mejor musica a mi playlist 🫰</p>
            <PlaylistSpotify />
        </div>
    )
}
