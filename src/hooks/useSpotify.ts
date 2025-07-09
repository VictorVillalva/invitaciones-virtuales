'use client'
import type { SpotifySongs } from "@/types";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useSpotify = () => {
    const [query, setQuery] = useState("");
    const [songs, setSongs] = useState<SpotifySongs[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [playlistSongs, setPlaylistSongs] = useState<SpotifySongs[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Obtener token de acceso
    /**
     * The function `getAccessToken` asynchronously fetches an access token from a Spotify API endpoint and
     * returns the token value.
     * @returns The `getAccessToken` function is returning the access token from the response data if the
     * request to the Spotify token endpoint is successful. If there is an error during the request, it
     * will log an error message, set an error message, and return `null`.
     */
    const getAccessToken = async () => {
        try {
            const responseTokenSpotify = await axios.get('https://spotifytestrefreshtoken-production.up.railway.app/token')
            return responseTokenSpotify.data.accessToken;
        } catch (error) {
            console.error(error);
            setError("Error al obtener el token de acceso.");
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000); // Ocultar alerta después de 5 segundos
            return null;
        }
    }

    //Buscar la cancion
    const searchSong = async () => {
        setIsLoading(true);
        setError(null);
        setSongs([]); // Limpiar songs anteriores

        try {
            const accessTokenSpotify = await getAccessToken();
            if (!accessTokenSpotify) return;

            const responseSong = await axios.get('https://api.spotify.com/v1/search', {
                params: {
                    q: query,
                    type: 'track',
                    limit: 10
                },
                headers: {
                    'Authorization': `Bearer ${accessTokenSpotify}`,
                    'Content-Type': 'application/json'
                }
            });

            // Manejo seguro de los resultados
            const searchResults = responseSong.data.tracks?.items || [];

            if (searchResults.length === 0) {
                setError('No se encontraron canciones');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 5000); // Ocultar alerta después de 5 segundos
            }

            setSongs(searchResults);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Manejo específico de errores de Axios
                if (error.response) {
                    // El servidor respondió con un error
                    //Respuesta de error
                    console.error(error.response.data);
                    //Codigo de estado
                    console.error(error.response.status);
                } else if (error.request) {
                    // La solicitud se hizo pero no se recibió respuesta
                    setError('Sin respuesta del servidor')
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                    }, 5000); // Ocultar alerta después de 5 segundos
                    // Verificaciones adicionales de conexión
                    if (navigator.onLine === false) {
                        setError('No hay conexión a internet')
                        setShowAlert(true);
                        setTimeout(() => {
                            setShowAlert(false);
                        }, 5000); // Ocultar alerta después de 5 segundos

                    }
                } else {
                    // Error al configurar la solicitud
                    console.error(error.message);
                }
            } else {
                // Error no relacionado con Axios
                console.error(error);

            }
            setError('No se lograron encontrar las canciones.');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000); // Ocultar alerta después de 5 segundos
            throw error;
        }
    }

    //Agregar a la playlist la cancion
    const addToPlayList = async (songId: string) => {
        try {
            const accessTokenSpotify = await getAccessToken();
            if (!accessTokenSpotify) return;

            const playlistId = process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID; // ID de la lista de reproducción a la que deseas agregar la canción

            await axios.post(`${process.env.SPOTIFY_BASE_URL}/playlists/${playlistId}/tracks`,
                { uris: [`spotify:track:${songId}`] },
                {
                    headers: {
                        'Authorization': `Bearer ${accessTokenSpotify}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            setSuccess('La cancion fue agregada con exito.')
            // 🔥 Actualiza la lista sin necesidad de recargar
            getPlaylistSongs();

        } catch (error) {
            //Error al agregar la canción a la lista de reproducción
            console.log(error);
            setError('Error al agregar la canción a la lista de reproducción.');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000); // Ocultar alerta después de 5 segundos
        }
    }

    // Obtener canciones de una playlist
    const getPlaylistSongs = useCallback(async () => {
        //TODO: Verificar si el ID de la playlist está definido
        const playlistId = process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID;
        if (!playlistId) {
            console.error("No se encontró el ID de la playlist en las variables de entorno.");
            setError("Falta el ID de la playlist.");
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000); // Ocultar alerta después de 5 segundos
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const accessTokenSpotify = await getAccessToken();
            if (!accessTokenSpotify) return;

            //Se usa track por que spotify regresa de esta manera las canciones
            // {
            //     "items": [
            //         {
            //             "track": {
            //                 "name": "Nombre de la canción",
            //                 "artists": [...],
            //                 ...
            //             }
            //         },
            //         ...
            // ]
            // }
            const response = await axios.get<{ items: { track: SpotifySongs }[] }>(
                `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                { headers: { Authorization: `Bearer ${accessTokenSpotify}` } }
            );
            
            const songs = response.data.items.map(({ track }) => track);
            //console.log("Canciones obtenidas:", songs); // Verifica las canciones obtenidas
            setPlaylistSongs(songs);
        } catch (error) {
            //Error al obtener la playlist 
            console.error(error);
            setError('Error al obtener la playlist.');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000); // Ocultar alerta después de 5 segundos
        } finally {
            setIsLoading(false);
        }
    }, [setError, setIsLoading, setPlaylistSongs]);

    useEffect(() => {
        getPlaylistSongs();
    }, [getPlaylistSongs]);

    // Función para manejar la selección de una canción
    const handleSelectSong = (songId: string) => {
        // Verificar si la canción ya está en la playlist usando trackId
        const isSongInPlaylist = playlistSongs.some((song) => song.id === songId);
        if (isSongInPlaylist) {
            setIsModalOpen(true)
        } else {
            // Si no está, agregar la canción a la playlist
            addToPlayList(songId);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCloseAlert = () => {
        setSuccess(null)
    }

    // Lógica para ocultar el alert automáticamente
    // useEffect(() => {
    //     if (success) {
    //         const timeout = setTimeout(() => {
    //             setSuccess(null);
    //         }, 5000); // 5 segundos

    //         return () => clearTimeout(timeout); // limpieza
    //     }
    // }, [success]);

    return{
        query,
        setQuery,
        songs,
        isLoading,
        error,
        showAlert,
        success,
        playlistSongs,
        isModalOpen,
        searchSong,
        handleSelectSong,
        handleCloseModal,
        handleCloseAlert
    }
}