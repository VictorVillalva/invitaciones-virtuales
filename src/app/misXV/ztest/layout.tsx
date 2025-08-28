//** Assets */
import { zain } from "@/assets/fonts/fonts"
import "../../globals.css";
//** Hooks */
import AOSInit from "@/components/components-invitations/AOSInit";

//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function DanielaLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <section className={`pamela-castillo-layout ${zain.className} antialiased relative`}>
                <div className="relative z-10">
                    <AOSInit />
                    {children}
                </div>
            </section>
        </>
    );
}