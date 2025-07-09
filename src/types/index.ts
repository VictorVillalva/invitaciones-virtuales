import { StaticImageData } from "next/image";

export interface SobreAnimationProps{
    children: React.ReactNode;
}

export interface IconsProps{
    width: string;
    height: string;
}
export interface Nombres{
    nombre1: string;
    apellido1: string;
    nombre2: string;
    apellido2: string;
}

export interface Sobre{
    tarjeta: boolean;
    numero?: string;
    nombre?: string;
    banco?: string;
}

export interface Ubicacion{
    image: StaticImageData | string;
    placeName: string;
    address: string;
    href: string;
}

export interface Hotel{
    image: StaticImageData | string;
    placeName: string;
    address: string;
    event: string;
    salon: string;
    date: string;
    href: string;
}

export interface SpotifySongs {
    id: string;
    name: string;
    artists: {name: string}[];
    album: {images: {url:string}[]};
}

export interface InputSearchProps{
    query: string;
    setQuery: (query: string) => void;
    searchSong: (query: string) => Promise<void>;
    songs: SpotifySongs[];
    isLoading: boolean;
    selectSong: (songId: string) => void;
}

export interface InvitacionProps{
    numPersonas: number;
    familia: string;
    adultos: number;
    ninos: number;
}

export interface RadiusGroupProps {
    selectedOption: string;
    onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MensajeProps {
    persona: string;
    message: string;
    onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface CountdownProps {
    targetDate: Date;
}