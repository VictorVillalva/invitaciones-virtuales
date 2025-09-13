'use client'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface Galeria{
    id: number;
    src: StaticImageData;
    alt: string;
}

interface ImageItem {
    ImagesCarrusel: Galeria[]
}

export default function GaleriaFotos({ImagesCarrusel}: ImageItem) {
    const [data] = useState(ImagesCarrusel)

    return (
        <div className="galeria-Fotos flex flex-col items-center text-[32px] gap-10">
            <p>Galeria de fotos</p>
            {/*<!-- Component: Carousel with indicators outside --> */}
            <Carousel
                className="w-[380px]"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {/* Mapeo de las imagenes */}
                    {data.map((item, idx) => (
                        <CarouselItem key={item.id}>
                        <div className="relative h-[580px]">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover" // Puedes quitar rounded si no quieres esquinas redondas
                                    priority={idx === 0} // Opcional: precarga la primera
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            {/*<!-- End Carousel with indicators outside --> */}
        </div>
    )
}
