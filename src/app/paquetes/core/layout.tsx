'use client'
import "../../globals.css";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react"
import { lexend } from "@/assets/fonts/fonts";
import bgImage from "@/assets/images/Paquetes/bg-core.png"
import bgManchas from "@/assets/images/Paquetes/bg-machas-core.png"
import AOSInit from "@/components/components-invitations/AOSInit";


//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function CoreLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
                <span className="animate-spin text-[#475A4C]">
                    <LoaderCircle width={80} height={80}/>
                </span>
            </div>
        );
    }
    return (
        <>
            <section className={`core-layout antialiased relative ${lexend.className}`}>
                <div className="absolute inset-0 h-auto bg-repeat bg-center" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
                <div className="absolute top-0 left-0 w-full h-full bg-repeat bg-top z-10" style={{ backgroundImage: `url(${bgManchas.src})` }}></div>
                <div className="absolute inset-0 opacity-5 h-auto bg-[#6A8E99] z-20"></div>
                <div className="relative z-30">
                    <AOSInit />
                    {children}
                </div>
            </section>
        </>
    );
}