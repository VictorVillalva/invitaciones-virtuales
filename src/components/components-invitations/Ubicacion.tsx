import React from 'react'
import CardSalon from './CardSalon'
import { StaticImageData } from 'next/image';

interface UbicacionProps {
    label: string;
    placeName: string;
    address: string;
    href: string;
    img: StaticImageData
}

export default function Ubicacion({label,placeName,address,href,img }: UbicacionProps) {
    return (
        <div className="ubicacion-evento flex flex-col text-center gap-10" >
            <p className="text-[32px]">{label}</p>
            <CardSalon
                image={img}
                placeName={placeName}
                address={address}
                href={href}
            />
        </div>
    )
}
