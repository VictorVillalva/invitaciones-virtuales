//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <section className={`daniela-medel-layout  antialiased relative`}>
                <div className="absolute inset-0 opacity-5 h-auto"></div>
                <div className="relative z-10">
                    {children}
                </div>
            </section>
        </>
    );
}