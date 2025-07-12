'use client'
import { inter } from "@/assets/fonts/fonts";
import { useEffect } from "react";
import LogoDanielaMedel from "@/assets/images/DanielaMedelXV/Logo_DanielMedel.jpg"
import Image from 'next/image'
import Background from "./Background";

export default function BlockMobile() {
    useEffect(() => {
        // Guarda el valor original
        const original = document.body.style.overflow;
        // Bloquea el scroll
        document.body.style.overflow = "hidden";
        // Al desmontar, restáuralo
        return () => { document.body.style.overflow = original; };
    }, []);
    return (
        <div className={`block-responsive ${inter.className} antialiased fixed inset-0 z-[10000] bg-white text-primary flex flex-col items-center justify-center text-2xl text-center gap-6`}>
            <Background />
            <Image src={LogoDanielaMedel} alt={"Logo"} width={100} height={100} className="w-auto h-auto"/>
            <div className="flex flex-col">
                <p className="font-bold text-4xl">Usa un dispositivo móvil</p>
                <small>Esta funcionalidad solo está disponible en pantallas móviles.</small>
            </div>
        </div>
    )
}
