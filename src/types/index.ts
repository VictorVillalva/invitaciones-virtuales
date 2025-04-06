import { StaticImageData } from "next/image";

export interface SobreAnimationProps{
    children: React.ReactNode;
}

export interface Nombres{
    nombre1: string;
    apellido1: string;
    nombre2: string;
    apellido2: string;
}

export interface Sobre{
    numero: string;
    nombre: string;
    banco: string;
}

export interface Ubicacion{
    image: StaticImageData | string;
    placeName: string;
    address: string;
    href: string;
}