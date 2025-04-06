import { InputSearchProps } from "@/types";
import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";

//Solo extraigo de types la constate query -> {query}: Pick<InputSearchProps, "query">
export const useSearch = ({query, setQuery, selectSong, searchSong, songs}:InputSearchProps) => {
    const [showResults, setShowResults] = useState<boolean>(false);
    const [debouncedQuery, setDebouncedQuery] = useState<string>(query);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const firstRender = useRef<boolean>(true);

    // Efecto para manejar clics fuera del componente
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Efecto para manejar el debounce del input
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 100);

        return () => clearTimeout(timer);
    }, [query]);

    // Efecto para realizar la búsqueda cuando cambia debouncedQuery
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        if (debouncedQuery.trim() === "") {
            return;
        }

        // Verificar si los resultados están en localStorage
        const cachedResults = localStorage.getItem(debouncedQuery);
        if (cachedResults) {
            // Usar los resultados almacenados si existen
            setShowResults(true);
            return;
        }

        if (isFetching) return;

        // Realizar la búsqueda solo si no hay resultados en cache
        const doSearch = async () => {
            setIsFetching(true);
            try {
                await searchSong(debouncedQuery);
                if (debouncedQuery.trim() !== "") {
                    setShowResults(true);
                }
                // Guardar los resultados en localStorage
                localStorage.setItem(debouncedQuery, JSON.stringify(songs));
            } catch (error) {
                // Manejar el error de rate limiting (429)
                const err = error as AxiosError;
                if (err.response?.status === 429) {
                    console.error("Límite de solicitudes alcanzado. Intenta nuevamente en unos segundos.");
                } else {
                    console.error("Error de búsqueda:", error);
                }
            } finally {
                setIsFetching(false);
            }
        };

        doSearch();
    }, [debouncedQuery, searchSong, isFetching, songs]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSelectSong = (songId: string) => {
        selectSong(songId);
        setShowResults(false);
    };

    const handleFocus = () => {
        if (query.trim() !== "" && songs.length > 0) {
            setShowResults(true);
        }
    };

    return {
        showResults,
        debouncedQuery,
        searchRef,
        handleInputChange,
        handleSelectSong,
        handleFocus,
    }

}