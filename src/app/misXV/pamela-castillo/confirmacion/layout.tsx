'use client'
//** Hooks */
import { useEffect, useState } from "react";
import Image from "next/image";
import AOSInit from "@/components/components-invitations/AOSInit";
//** Assets */
import { zain } from "@/assets/fonts/fonts"
import "../../../globals.css";
import bgImage from "@/assets/images/PamelaCastilloXV/Background-PamelaCastillo.png"

//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function PamelaLayoutConfirmacion({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula la carga inicial (puedes ajustar el tiempo o la lógica)
        const timer = setTimeout(() => setLoading(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                {/* Aquí tu spinner o animación */}
                <span className="animate-pulse">
                    <Image
                        src="/assets/pamela-castillo/logos/Logo-Pamela.png"
                        alt="Logo de Pamela Castillo Monterrosas"
                        width={361}
                        height={185}
                        className="w-[361px] h-auto"
                        priority
                    />
                </span>
            </div>
        );
    }
    return (
        <>
            <section className={`pamela-medel-layout ${zain.className} antialiased relative`}>
                <div className="absolute inset-0 h-auto bg-repeat" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
                <div className="relative z-10">
                    <AOSInit />
                    {children}
                </div>
            </section>
        </>
    );
}