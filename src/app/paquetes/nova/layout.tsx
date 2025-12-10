'use client'
import "../../globals.css";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react"

//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function NovaLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
                <span className="animate-spin">
                    <LoaderCircle width={80} height={80} />
                </span>
            </div>
        );
    }
    return (
        <>
            <section className={`nova-layout antialiased relative`}>
                <div className="absolute inset-0 opacity-5 h-auto"></div>
                <div className="relative z-10">
                    {children}
                </div>
            </section>
        </>
    );
}