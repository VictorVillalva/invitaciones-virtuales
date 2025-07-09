import type { Metadata } from "next";
import { playwrite } from "@/assets/fonts/fonts"
import "../globals.css";
import bgImage from "@/assets/images/DanielaMedelXV/bg-blue-flowers.jpg"

export const metadata: Metadata = {
    title: "XV Daniela Medel",
    description: "Invitación de XV años de Daniela Medel",
};

//Nota: El body solo se modifica en el layout de la app, no en el de la pagina

export default function DanielaLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <section className={`daniela-medel-layout ${playwrite.className} antialiased relative`}>
            <div className="absolute inset-0 opacity-5 h-auto" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
}