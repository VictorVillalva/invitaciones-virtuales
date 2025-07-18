'use client'
import { playwrite } from "@/assets/fonts/fonts"
import "../../../globals.css";
import bgImage from "@/assets/images/DanielaMedelXV/bg-blue-flowers.jpg"
import { useEffect, useState } from "react";
import Image from "next/image";

//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function DanielaLayoutConfirmacion({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula la carga inicial (puedes ajustar el tiempo o la lógica)
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                {/* Aquí tu spinner o animación */}
                <span className="animate-bounce">
                    <Image
                        src="/assets/daniela-medel/logos/Logo-DanielMedel.jpg"
                        alt="Logo de Daniel Medel"
                        width={80}
                        height={75}
                        className="w-[80px] h-auto"
                        priority
                    />
                </span>
            </div>
        );
    }
    return (
        <>
            <section className={`daniela-medel-layout ${playwrite.className} antialiased relative`}>
                <div className="absolute inset-0 opacity-5 h-auto" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
                <div className="relative z-10">
                    {children}
                </div>
            </section>
        </>
    );
}