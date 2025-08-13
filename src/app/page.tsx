//** Images-Assests */
import Rabe from "@/assets/images/landing/rabe-logo.png";
import headerImage from "@/assets/images/landing/image-header-1.png";
import { ArrowUpRight } from "lucide-react";
//** Components */
import Image from "next/image";
import Link from "next/link";
import { BadgeRabe } from "@/components/ui/badge-rabe";

export default function Home() {
  return (
    <main>
      <section className="contact-information">
        <div className="w-full bg-white lg:px-[134px] px-4 flex md:flex-row flex-col items-center justify-center py-2.5 tracking-[-0.07em] md:gap-10 gap-2">
          <div className="hora-atencion flex flex-row justify-between text-xs gap-3">
            <span className="font-semibold ">Télefono de Contacto</span>
            <span>+52 1 961 374 4444</span>
          </div>
          <div className="numero-atencion flex flex-row justify-between text-xs gap-3">
            <span className="font-semibold ">
              Horarios de Atención{" "}
              <span className="font-light">(Mexico Centro)</span>
            </span>
            <span>Lunes a Viernes 9:00 - 18:00 Hrs.</span>
          </div>
        </div>
      </section>
      <section className="header-landing-page bg-rabe-primary-100 overflow-hidden max-h-[1025px]">
        <header className="lg:px-[134px] px-4 py-8 flex md:flex-row flex-col items-center justify-between">
          <div className="RabeInnovation flex flex-row gap-2 tracking-[-0.08em]">
            <Image
              src={Rabe}
              alt="Rabe Innovation"
              width={24}
              height={16}
              className="object-contain"
            />
            <span className="font-bold text-rabe-primary">
              Invitaciones Virtuales
            </span>
          </div>
          <nav className="flex flex-row text-sm gap-6 text-neutral-600">
            <Link
              href="#"
              className="hover:text-rabe-primary-700 hover:font-semibold"
            >
              Paquetes
            </Link>
            <Link
              href="#"
              className="hover:text-rabe-primary-700 hover:font-semibold"
            >
              Beneficios
            </Link>
            <Link
              href="#"
              className="hover:text-rabe-primary-700 hover:font-semibold"
            >
              Proceso
            </Link>
          </nav>
        </header>
        <div className="CTO lg:px-[134px] px-4 flex flex-col items-center gap-10">
          <div className="encabezado lg:px-[198px] flex flex-col items-center gap-2.5 mt-20">
            <div className="text-encabezado text-center ">
              <small className="font-semibold tracking-[-0.07em]">
                ¡CELEBRA YA!
              </small>
              <h1 className="font-bold text-[64px] text-rabe-primary tracking-[-0.07em] leading-[120%]">
                Celebra momentos únicos con{" "}
                <span className="font-extralight italic">estilo digital.</span>
              </h1>
            </div>
            <div className="CTO lg:px-[99px] flex flex-col justify-center items-center gap-6">
              <p className="tracking-[-0.07em] text-center text-neutral-800">
                Diseñamos invitaciones virtuales que combinan elegancia,
                personalización y tecnología. Sorprende a tus invitados con un
                diseño exclusivo, interactivo y fácil de compartir.
              </p>
              <Link
                href={""}
                className="group transition-all flex flex-row items-center justify-center gap-1 px-2 py-3 bg-rabe-primary text-white rounded-[6px] min-w-[180px] text-sm font-medium hover:bg-rabe-primary-800"
              >
                Pedir información{" "}
                <ArrowUpRight
                  width={16}
                  height={16}
                  className="group-hover:animate-pulse"
                />
              </Link>
            </div>
          </div>
          <div className="Foto flex justify-center">
            <Image
              src={headerImage}
              alt="Foto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="beneficios-landing-page bg-white ">
        <div className="encabezado lg:px-[134px] px-4  flex flex-col justify-center items-center gap-6 mt-[100px]">
          <BadgeRabe variant="outline" className="font-semibold">BENEFICIOS</BadgeRabe>
          <div className="encabezado lg:px-[236px] flex flex-col items-center text-center gap-2.5">
            <h2 className="font-semibold tracking-[-0.08em] text-4xl text-rabe-primary">Porque tu evento merece lo mejor desde la invitación</h2>
            <p className="font-medium tracking-[-0.08em] text-xs text-neutral-600">No es solo una invitación, es la primera experiencia que tendrán tus invitados de tu evento. Con nosotros, cada detalle cuenta: diseños únicos, entrega rápida y la magia de lo digital para sorprender y emocionar desde el primer clic.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
