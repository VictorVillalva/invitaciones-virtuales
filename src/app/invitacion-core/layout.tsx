//** Assets */
import { lexend } from "@/assets/fonts/fonts"
import bgImage from "@/assets/images/fondo-core.png"
import manchas from "@/assets/images/manchas-verdes.png"
//** Hooks */
import AOSInit from "@/components/components-invitations/AOSInit";

//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function CoreLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <section className={`invitacion-core-layout ${lexend.className} antialiased relative`}>
                <div className="absolute inset-0 h-auto bg-repeat" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
                <div className="absolute inset-0 h-auto bg-repeat z-10 bg-center" style={{ backgroundImage: `url(${manchas.src})` }}></div>
                <div className="relative z-20">
                    <AOSInit />
                    {children}
                </div>
            </section>
        </>
    );
}