import { StaticImageData } from "next/image";
import { LucideIcon } from 'lucide-react';

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
    subitems?: {
        title: string
        url: string
    }[]
}


export interface BreadcrumbItem {
    title: string;
    href: string;
}

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
    classNameTitle?: string;
    classNameNombres?: string;
}

export interface Sobre{
    tarjeta: boolean;
    numero?: string;
    nombre?: string;
    banco?: string;
    titleClassName?: string;
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
    numPersonas?: number;
    familia?: string;
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
    classNameTitle?: string;
    title?: string;
    showTitle?: boolean;
    classNameContainer?: string;
    classNameDaysContainer?: string;
    classNameText?: string;
} 

export interface Guest {
    hasKids: boolean;
    invitationQty: number;
    name: string;
    invitationId: string;
    uuid: string;
    hasConfirmed: boolean;
    adultsNo: number;
    kidsNo: number;
}
export interface GuestWhatsapp {
    name: string;
    contactPhoneNumber: string;
    invitationId: string;
    uuid: string;
}

