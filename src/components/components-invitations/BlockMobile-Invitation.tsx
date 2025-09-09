'use client'
//** Hooks */
import { useEffect } from "react";
import Image, { StaticImageData } from 'next/image'

//** Assets */
import bg from "@/assets/images/PamelaCastilloXV/Background-PamelaCastillo-BlockMobile.png";
//** Components */
import { inter } from "@/assets/fonts/fonts";
//** Interfaces or Types */
interface BlockMobileInvitationProps {
    logo?: boolean;
    imageLogo?: StaticImageData;
}

export default function BlockMobileInvitation({ logo = false, imageLogo }: BlockMobileInvitationProps) {
    useEffect(() => {
        // Guarda el valor original
        const original = document.body.style.overflow;
        // Bloquea el scroll
        document.body.style.overflow = "hidden";
        // Al desmontar, restáuralo
        return () => { document.body.style.overflow = original; };
    }, []);
    return (
        <div
            className={`block-responsive bg- ${inter.className} antialiased fixed inset-0 z-[10000] bg-white text-primary flex flex-col items-center justify-center text-2xl text-center gap-6`}
            style={{ backgroundImage: `url(${bg.src})` }}>
            {logo &&
                <Image src={imageLogo || " "} alt={"Logo"} width={100} height={100} className="w-auto h-auto" />
            }
            <div className="flex flex-col gap-2">
                <p className="font-bold text-6xl">Usa un dispositivo móvil</p>
                <small>Esta funcionalidad solo está disponible en pantallas móviles.</small>
            </div>
        </div>
    )
}
