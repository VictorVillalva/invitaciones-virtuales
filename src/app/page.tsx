//** Images-Assests */
import Rabe from "@/assets/images/landing/rabe-logo.png";
import headerImage from "@/assets/images/landing/image-header-1.png";
import processImage from "@/assets/images/landing/image-proceso-1.png";
import paquete1 from "@/assets/images/landing/image-paquetes-1.png";
import paquete2 from "@/assets/images/landing/image-paquetes-2.png";
import paquete3 from "@/assets/images/landing/image-paquetes-3.png";
import { ArrowUpRight } from "lucide-react";
//** Components */
import Image from "next/image";
import Link from "next/link";
import { BadgeRabe } from "@/components/ui/badge-rabe";
import { BentoBeneficios } from "@/components/components-landing-page/bento-beneficios";
import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import Whatsapp from "@/assets/icons/Whatsapp";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/components-landing-page/header";

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
        <Header />
        <div className="CTO xl:px-[134px] px-4 flex flex-col items-center gap-10">
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
      <section id="beneficios-landing-page" className="bg-white ">
        <div className="encabezado xl:px-[134px] lg:px-[100px] px-4 flex flex-col justify-center items-center gap-6 mt-[100px]">
          <BadgeRabe variant="outline" className="font-semibold">
            BENEFICIOS
          </BadgeRabe>
          <div className="encabezado xl:px-[236px] flex flex-col items-center text-center gap-2.5">
            <h2 className="font-semibold tracking-[-0.08em] text-4xl text-rabe-primary">
              Porque tu evento merece lo mejor desde la invitación
            </h2>
            <p className="font-medium tracking-[-0.08em] text-xs text-neutral-600">
              No es solo una invitación, es la primera experiencia que tendrán
              tus invitados de tu evento. Con nosotros, cada detalle cuenta:
              diseños únicos, entrega rápida y la magia de lo digital para
              sorprender y emocionar desde el primer clic.
            </p>
          </div>
          <BentoBeneficios />
        </div>
      </section>
      <section id="proceso-landing-page" className="bg-rabe-primary-100 py-[50px] mt-[100px]">
        <div className="encabezado xl:px-[134px] lg:px-[100px] px-4 flex flex-col justify-center items-center gap-10">
          <div className="encabezado-titulos flex flex-col justify-center items-center gap-6">
            <BadgeRabe variant="outline" className="font-semibold">
              PROCESO
            </BadgeRabe>
            <div className="encabezado xl:px-[236px] flex flex-col items-center text-center gap-2.5">
              <h2 className="font-semibold tracking-[-0.08em] text-4xl text-rabe-primary">
                Crea tu invitación digital en pocos pasos
              </h2>
              <p className="font-medium tracking-[-0.08em] text-xs text-neutral-600">
                Hacer tu invitación nunca fue tan fácil. Desde elegir el diseño
                hasta enviarlo a tus invitados, nuestro proceso es rápido,
                simple y lleno de posibilidades para que cada detalle sea tan
                especial como tu evento.
              </p>
            </div>
          </div>
          <div className="pasos flex flex-col justify-center lg:flex-row gap-4">
            <div className="pasos-descripcion flex flex-col gap-6">
              <div className="paso flex flex-col gap-0 tracking-[-0.08em]">
                <h3 className="text-rabe-primary-500 font-semibold">
                  Paso 1: Elige tu estilo y personaliza
                </h3>
                <p className="text-xs text-neutral-500">
                  Explora nuestra colección de diseños y selecciona el que mejor
                  represente tu evento. Luego, personalízalo con tus colores,
                  textos, fotos y detalles especiales para que sea 100% único.
                </p>
              </div>
              <div className="paso flex flex-col gap-0 tracking-[-0.08em]">
                <h3 className="text-rabe-primary-500 font-semibold">
                  Paso 2: Revisa y aprueba el diseño
                </h3>
                <p className="text-xs text-neutral-500">
                  Te enviamos una vista previa para que revises cada detalle.
                  Podrás solicitar cambios hasta que quede tal como lo
                  imaginaste.
                </p>
              </div>
              <div className="paso flex flex-col gap-0 tracking-[-0.08em]">
                <h3 className="text-rabe-primary-500 font-semibold">
                  Paso 3: Recibe tu invitación digital
                </h3>
                <p className="text-xs text-neutral-500">
                  Obtendrás tu invitación lista para compartir, optimizada para
                  verse perfecta en cualquier dispositivo, desde celulares hasta
                  computadoras.
                </p>
              </div>
              <div className="paso flex flex-col gap-0 tracking-[-0.08em]">
                <h3 className="text-rabe-primary-500 font-semibold">
                  Paso 4: Envía y recibe confirmaciones
                </h3>
                <p className="text-xs text-neutral-500">
                  Comparte tu invitación por WhatsApp, redes sociales o correo.
                  Tus invitados podrán confirmar su asistencia con un solo clic
                  y tú podrás llevar un registro en tiempo real.
                </p>
              </div>
            </div>
            <Image
              src={processImage}
              alt="Rabe Innovation"
              className="object-contain xl:w-[568px] xl:h-[329px] w-[400px] h-[329px]"
            />
          </div>
        </div>
      </section>
      <section id="paquetes-landing-page" className="bg-white flex flex-col gap-[60px] mb-[255px]">
        <div className="encabezado xl:px-[134px] lg:px-[100px] px-4 flex flex-col justify-center items-center gap-6 mt-[100px]">
          <BadgeRabe variant="outline" className="font-semibold">
            PAQUETES
          </BadgeRabe>
          <div className="encabezado xl:px-[236px] flex flex-col items-center text-center gap-2.5">
            <h2 className="font-semibold tracking-[-0.08em] text-4xl text-rabe-primary">
              Checa los diferentes paquetes que tenemos para ti
            </h2>
            <p className="font-medium tracking-[-0.08em] text-xs text-neutral-600">
              Encuentra la opción ideal para tu evento. Desde diseños básicos
              hasta experiencias digitales premium, tenemos un plan que se
              adapta a tu estilo, tus necesidades y tu presupuesto.
            </p>
          </div>
        </div>
        <div className="paquetes flex flex-col gap-36">
          <article className="paquete-core flex flex-col lg:flex-row justify-end items-center lg:gap-4 gap-16 pl-4 xl:pl-[134px] lg:pl-[50px]">
            <div className="descripcion-paquete w-full flex flex-col gap-6 lg:pr-0 pr-4">
              <div className="titulo-p flex flex-col gap-1">
                <h4 className="font-semibold text-[32px] leading-none tracking-[-0.08em] text-rabe-primary text-center lg:text-left">
                  Invitación Core
                </h4>
                <small className="text-rabe-primary-500 font-semibold text-center lg:text-left">
                  Ideal para eventos informales de entre 10 - 50 personas
                </small>
              </div>
              <div className="especificaciones">
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Personalización del diseño de Invitación
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div>
                    <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  </div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Sección de información general (Tipo de evento, Fecha,
                    Festejado)
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div>
                    <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  </div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Secciones sobre el evento, 2 a escoger (Papás, Padrinos,
                    Mesa de regalos, Itinerario o Código de vestimenta)
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div>
                    <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  </div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Conteo regresivo del evento, Canción de fondo, Galería de
                    fotos de hasta 3 fotos
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Confirmación mediante Whatsapp directo
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Visibilidad de la invitación por 1 mes
                  </p>
                </div>
              </div>
              <Link
                href={""}
                className="group transition-all flex flex-row items-center justify-center gap-1 px-2 py-3 bg-rabe-primary text-white rounded-[6px] lg:max-w-[180px] text-sm font-medium hover:bg-rabe-primary-800"
              >
                Ver Invitación{" "}
                <ArrowUpRight
                  width={16}
                  height={16}
                  className="group-hover:animate-pulse"
                />
              </Link>
            </div>
            <Image
              src={paquete1}
              alt="Invitación Core"
              className="object-cover relative lg:max-w-[712px] lg:h-[452px] overflow-hidden rounded-l-[9999px]"
            />
          </article>
          <article className="paquete-rise flex flex-col-reverse lg:flex-row items-center lg:gap-4 gap-16 xl:pr-[134px] lg:pr-[50px] pr-4">
            <Image
              src={paquete2}
              alt="Invitación Rise"
              className="object-cover relative lg:max-w-[712px] lg:h-[452px] overflow-hidden rounded-r-[9999px]"
            />
            <div className="descripcion-paquete w-full flex flex-col gap-6 lg:pl-6 pl-4">
              <div className="titulo-p flex flex-col gap-1">
                <h4 className="font-semibold text-[32px] leading-none tracking-[-0.08em] text-rabe-primary text-center lg:text-left">
                  Invitación Rise
                </h4>
                <small className="text-rabe-primary-500 font-semibold text-center lg:text-left">
                  Ideal para eventos semi-formales de entre 50-100 personas
                </small>
              </div>
              <div className="especificaciones">
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Personalización del diseño de Invitación
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div>
                    <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  </div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Sección de información general (Papas, Padrinos, itinerario,
                    Código de vestimenta, Dedicatorias)
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div>
                    <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  </div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Fecha del evento
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div>
                    <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  </div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Sección sobre el evento (Mesa de regalos, Código de
                    vestimenta, Contador para la fecha, Canción de fondo,
                    Galería de fotos de hasta 6 fotos)
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Confirmación mediante Whatsapp directo
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Ubicación del evento
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Visibilidad de la invitación por 2 mes
                  </p>
                </div>
              </div>
              <Link
                href={""}
                className="group transition-all flex flex-row items-center justify-center gap-1 px-2 py-3 bg-rabe-primary text-white rounded-[6px] lg:max-w-[180px] text-sm font-medium hover:bg-rabe-primary-800"
              >
                Ver Invitación{" "}
                <ArrowUpRight
                  width={16}
                  height={16}
                  className="group-hover:animate-pulse"
                />
              </Link>
            </div>
          </article>
          <article className="paquete-nova flex flex-col lg:flex-row justify-end items-center lg:gap-4 gap-16 pl-4 xl:pl-[134px] lg:pl-[50px]">
            <div className="descripcion-paquete w-full flex flex-col gap-6 lg:pr-0 pr-4">
              <div className="titulo-p flex flex-col gap-1">
                <h4 className="font-semibold text-[32px] leading-none tracking-[-0.08em] text-rabe-primary text-center lg:text-left">
                  Invitación Nova
                </h4>
                <small className="text-rabe-primary-500 font-semibold text-center lg:text-left">
                  Ideal para eventos formales para hasta 150 personas
                </small>
              </div>
              <div className="especificaciones">
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Incluye todo lo de los paquetes anteriores
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Pre-Invitación (save the date)
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div>
                    <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  </div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Playlist de spotify
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div>
                    <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  </div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Envio masivo de invitaciones y pre invitaciones automatizado
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Confirmación directa desde la invitación
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Fecha limite para confirmar
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Tablero dinámico para administrar confirmación y datos de
                    invitados
                  </p>
                </div>
                <div className="contenido flex flex-row items-center gap-2.5">
                  <div className="h-[10px] w-[10px] bg-rabe-primary rounded-full"></div>
                  <p className="flex flex-row text-neutral-500 tracking-[-0.08em]">
                    Visibilidad de la invitación por 3 mes
                  </p>
                </div>
              </div>
              <Link
                href={""}
                className="group transition-all flex flex-row items-center justify-center gap-1 px-2 py-3 bg-rabe-primary text-white rounded-[6px] lg:max-w-[180px] text-sm font-medium hover:bg-rabe-primary-800"
              >
                Ver Invitación{" "}
                <ArrowUpRight
                  width={16}
                  height={16}
                  className="group-hover:animate-pulse"
                />
              </Link>
            </div>
            <Image
              src={paquete3}
              alt="Invitación Nova"
              className="object-cover relative lg:max-w-[712px] lg:h-[452px] overflow-hidden rounded-l-[9999px]"
            />
          </article>
        </div>
      </section>
      <section id="CTO-Section-landing-page " className="bg-[linear-gradient(to_bottom,#3C6563_0%,#497975_37%,#4D7F7B_48%,#679A95_100%)] py-[60px] lg:px-[134px] px-6 flex flex-col justify-center items-center gap-6">
        <div className="texto max-w-[772px] flex flex-col gap-3 text-white text-center ">
          <h2 className="font-semibold text-[40px] leading-none tracking-[-0.08em]">
            ¡Haz que tu evento sea inolvidable desde la invitación!
          </h2>
          <p className="tracking-[-0.08em]">
            Sorprende a tus invitados con una invitación digital única,
            interactiva y lista para compartir en minutos. Dale a tu evento el
            inicio que se merece.
          </p>
        </div>
        <Link
          href={""}
          className="group transition-all flex flex-row items-center justify-center gap-1 px-2 py-3 bg-rabe-primary-50 text-rabe-primary rounded-[6px] max-w-[188px] text-sm font-medium hover:text-rabe-primary-500 hover:bg-rabe-primary-100"
        >
          Diseñar mi invitación{" "}
          <ArrowUpRight
            width={16}
            height={16}
            className="group-hover:animate-pulse"
          />
        </Link>
      </section>
      <footer className="footer-landing-page flex flex-col px-[134px] pt-[80px] pb-[24px] gap-[35px] bg-white">
        <div className="secciones flex flex-row justify-between">
          <div className="rabe flex flex-col max-w-[281px] gap-8">
            <div className="encabezado flex flex-col gap-2">
              <div className="RabeInnovation flex flex-row gap-2 tracking-[-0.08em]">
                <Image
                  src={Rabe}
                  alt="Rabe Innovation"
                  width={24}
                  height={16}
                  className="object-contain h-auto w-auto"
                />
                <span className="font-bold text-rabe-primary">
                  Invitaciones Virtuales
                </span>
              </div>
              <small className="tracking-[-0.08em] text-neutral-500">
                Creamos invitaciones digitales únicas que combinan diseño,
                personalización y tecnología para que tu evento brille desde el
                primer clic.
              </small>
            </div>
            <div className="social-medias flex flex-row gap-6">
              <Link href="#">
                <Facebook width="24" height="24" />
              </Link>
              <Link href="#">
                <Instagram width="24" height="24" />
              </Link>
              <Link href="#">
                <Whatsapp width="24" height="24" />
              </Link>
            </div>
          </div>
        </div>
        <Separator />
        <div className="copyright flex flex-row justify-end">
          <small className="text-rabe-primary-400 font-semibold">
            © 2025 Rabe Innovations. Todos los derechos reservados.
          </small>
        </div>
      </footer>
    </main>
  );
}
