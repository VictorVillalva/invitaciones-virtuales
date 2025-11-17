//** Assets */
import { lobsterTwo } from "@/assets/fonts/fonts"
import "../../globals.css";
import bgImage from "@/assets/images/DarinkaRaquelXV/bg-darinka.png"
//** Hooks */
import AOSInit from "@/components/components-invitations/AOSInit";

//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function DarinkaLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <section className={`darinka-raquel-layout ${lobsterTwo.className} antialiased relative bg-[#FAECEB]`}>
                <div className="absolute inset-0 h-auto bg-repeat bg-center" style={{ backgroundImage: `url(${bgImage.src})`}}></div>
                <div className="relative z-10">
                    <AOSInit />
                    {children}
                </div>
            </section>
        </>
    );
}