//** Assets */
import { zain } from "@/assets/fonts/fonts"
import "../../globals.css";
import bgImage from "@/assets/images/PamelaCastilloXV/Background-PamelaCastillo.png"
//** Hooks */
import AOSInit from "@/components/components-invitations/AOSInit";

//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function DanielaLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <section className={`pamela-castillo-layout ${zain.className} antialiased relative`}>
                <div className="absolute inset-0 h-auto bg-repeat" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
                <div className="relative z-10">
                    <AOSInit />
                    {children}
                </div>
            </section>
        </>
    );
}