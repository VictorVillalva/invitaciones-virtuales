'use client'
import { useState } from 'react'
import { ImagesCarrusel } from '@/assets/data/DanielaMedel/db'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

export default function GaleriaFotos() {
    const [data] = useState(ImagesCarrusel)

    return (
        <div className="galeria-Fotos flex flex-col items-center text-[32px] gap-10" data-aos="fade-up">
            <p>Galeria de fotos</p>
            {/*<!-- Component: Carousel with indicators outside --> */}
            <Carousel className="w-full">
                <CarouselContent>
                    {/* Mapeo de las imagenes */}
                    {data.map((item) => (
                        <CarouselItem key={item.id}>
                        <div className="flex flex-col items-center justify-center">
                            <Image src={item.src} alt={item.alt} />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            {/*<!-- End Carousel with indicators outside --> */}
        </div>
    )
}
