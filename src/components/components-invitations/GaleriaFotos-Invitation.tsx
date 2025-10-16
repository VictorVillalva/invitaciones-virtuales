"use client";
//** Hooks */
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";
//** Components */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
//** Data */


interface data {
    id: number;
    src: StaticImageData;
    alt: string;
}

interface GaleriaFotosProps {
    title: string;
    classNameTitle?: string;
    fotos: data[];
}

export default function GaleriaFotosInvitation({ title = "Lorem Ipsum", fotos, classNameTitle } : GaleriaFotosProps) {
  const [data] = useState(fotos);
  return (
    <div className="galeria-Fotos flex flex-col items-center gap-6 w-full">
      <p className={`${classNameTitle} text-[32px]`}>{title}</p>
      {/*<!-- Component: Carousel with indicators outside --> */}
      <Carousel
        className="w-[360px]"
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
              <div className="relative h-[580px] rounded-2xl">
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
  );
}
