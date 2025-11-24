"use client";
//** Hooks */
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
//** Components */
import BlockMobileInvitation from "@/components/components-invitations/BlockMobile-Invitation";
import HeaderInvitation from "@/components/components-invitations/Header-Invitation";
import SobreAnimationInvitation from "@/components/components-invitations/SobreAnimation-Invitation";
import ApartaFechaInvitation from "@/components/components-invitations/ApartaFecha-Invitation";
import FooterRabe from "@/components/components-invitations/Footer-Rabe";
//** Assets */
import { inspiration, lexend, lobsterTwo } from "@/assets/fonts/fonts";
import etiqueta from "@/assets/images/DarinkaRaquelXV/codigo-vestimenta.png";
import Portada from "@/assets/images/DarinkaRaquelXV/darinka-8.png";
import separador from "@/assets/images/DarinkaRaquelXV/separator-3-pink.png";
import Lugar from "@/assets/images/DarinkaRaquelXV/social-d-mary.png";
import LugarIglesia from "@/assets/images/DarinkaRaquelXV/iglesia-san-miguel-xaltipan.png";
import footerImage from "@/assets/images/DarinkaRaquelXV/footer-image.png";
import TextoInspiradorInvitation from "@/components/components-invitations/TextoInspirador-Invitation";
import GaleriaFotosInvitation from "@/components/components-invitations/GaleriaFotos-Invitation";
import PadresInvitation from "@/components/components-invitations/Padres-Invitation";
import PadrinosInvitation from "@/components/components-invitations/Padrinos-Invitation";
import CodigoVestimentaInvitation from "@/components/components-invitations/CodigoVestimenta-Invitation-2";
import LugarEventoInvitation from "@/components/components-invitations/LugarEvento-Invitation";
import ConfirmacionWhatsapp from "@/components/components-invitations/Confirmacion/Confirmacion-Whatsapp";
import BackgroundMusicInvitation from "@/components/components-invitations/BackgroundMusic-Invitation";
import LluviaSobres from "@/components/components-invitations/LluviaSobres";
import CountDownInvitation from "@/components/components-invitations/CountDown-Invitation2";
//** Data */
import {
  ImagesCarrusel,
  nombrePadresPadrinos,
} from "@/assets/data/DarinkaRaquel/dt";

export default function DarinkaRaquel() {
  const { isMobile } = useIsMobile();
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_DARINKA_RAQUEL;
  return (
    <>
      {!isMobile && <BlockMobileInvitation />}
      <SobreAnimationInvitation
        classNameColorSobreInferior="bg-[#F9BBC3]"
        classNameColorSobreLaterales="bg-[#FF9DA5]"
        classNameColorSobreSuperior="bg-[#F77781]"
      >
        <HeaderInvitation
          title="Mis XV"
          classNameHeader="h-[852px] shadow-[0_1px_20px_15px_#FCD1D8]"
          classNameCardTitle="bottom-117"
          image={Portada}
          classNameTitle="text-[96px] text-[#FFD2D7]"
          tipographyTitle={inspiration}
          tipographySubtitle={lobsterTwo}
          nombreFestejada="Darinka Raquel"
          classNameSubtitle="text-[30px] text-[#FFDEE0]"
          filterImage={true}
          separator={false}
        />
        <main className="invitacion-pamela-castillo flex flex-col gap-[150px] px-4 py-[150px]">
          <section data-aos="fade-dowm" className="aparta-fechas-invitation">
            <ApartaFechaInvitation
              date="21 de Diciembre 2025"
              classNameTitle="tracking-[-0.06em] text-darinka-primary font-semibold text-[40px]"
              classNameText="text-[24px] font-normal tracking-[-0.06em] text-darinka-primary"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="texto-inspirador-invitation">
            <TextoInspiradorInvitation
              title="Quince primaveras en tu mirada, tu juventud llena de magia y encanto. Hoy comienzan nuevos caminos de muchos sueños anhelados. Por eso deseo que estés conmigo en este día tan especial."
              classNameText="text-[24px] font-normal text-darinka-primary"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="carrusel">
            <GaleriaFotosInvitation
              title="Galería de fotos"
              classNameTitle="tracking-[-0.06em] font-semibold text-[40px] text-darinka-primary"
              fotos={ImagesCarrusel}
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="padres-padrinos">
            <div className="flex flex-col gap-10">
              <PadresInvitation
                nombre1={nombrePadresPadrinos[0].nombre}
                apellido1={nombrePadresPadrinos[0].apellido}
                nombre2={nombrePadresPadrinos[1].nombre}
                apellido2={nombrePadresPadrinos[1].apellido}
                classNameTitle="font-semibold text-[40px] tracking-[-0.06em] text-darinka-primary"
                classNameNombres="text-darinka-primary tracking-[-0.06em]"
              />
              <PadrinosInvitation
                nombre1={nombrePadresPadrinos[2].nombre}
                apellido1={nombrePadresPadrinos[2].apellido}
                nombre2={nombrePadresPadrinos[3].nombre}
                apellido2={nombrePadresPadrinos[3].apellido}
                classNameTitle="font-semibold text-[40px] tracking-[-0.06em] text-darinka-primary"
                classNameNombres="text-darinka-primary tracking-[-0.06em]"
              />
            </div>
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="lluvia-sobres">
            <LluviaSobres
              titleClassName="font-semibold text-darinka-primary tracking-[-0.06em] !text-[40px]"
              tarjeta={false}
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="vestimenta-regalos">
            <CodigoVestimentaInvitation
              classNameTitle="font-semibold text-darinka-primary tracking-[-0.06em]"
              classNameDescription="text-darinka-primary"
              image={etiqueta}
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="countdown-invitation">
            <CountDownInvitation
              targetDate={new Date("2025-12-21T13:40:00")}
              classNameTitle="text-center text-[40px] font-semibold text-darinka-primary tracking-[-0.06em] leading-[40px]"
              classNameText="text-darinka-primary"
              classNameContainer="bg-darinka-primary"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="iglesia-evento-invitation">
            <LugarEventoInvitation
              variant="v2"
              title="Misa de acción de gracias"
              classNameTitle="text-center text-[40px] font-bold text-darinka-primary tracking-[-0.02em] leading-[40px]"
              image={LugarIglesia}
              location="C. 20 de Noviembre, Tercera Secc, 90680 Contla, Tlax."
              urlLocation="https://maps.app.goo.gl/5WqBHJKmxgdvRHKb9"
              titleCard="Iglesia de San Miguel Xaltipan"
              haveTime={true}
              time="21 Diciembre 2025 - 13:40 p.m."
              classNameTitleCard="text-[32px] tracking-[-0.06em] text-darinka-primary font-semibold"
              classNameSubtitle="text-[16px] !text-darinka-primary"
              classNameButton="rounded-[16px] text-[18px] text-white bg-darinka-primary hover:scale-105 transition-transform duration-300"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="lugar-evento-invitation">
            <LugarEventoInvitation
              variant="v2"
              title="Recepción"
              classNameTitle="text-center text-[40px] font-bold text-darinka-primary tracking-[-0.02em] leading-[40px]"
              image={Lugar}
              location="Felipe Santiago Xicohtencatl 22, San Sebastián, Tepetlapa, 90805 Santa Ana Chiautempan, Tlax."
              urlLocation="https://maps.app.goo.gl/sEfZHCayLuAXzgaZ8"
              titleCard="Salón Social D'mary."
              haveTime={true}
              time="21 Diciembre 2025 - 15:30 p.m."
              classNameTitleCard="text-[32px] tracking-[-0.06em] text-darinka-primary font-semibold"
              classNameSubtitle="text-[16px] !text-darinka-primary"
              classNameButton="rounded-[16px] text-[18px] text-white bg-darinka-primary hover:scale-105 transition-transform duration-300"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="confirmacion-whastapp-invitation">
            <ConfirmacionWhatsapp
              phone={`${number}`}
              messageText={`¡Hola! Quisiera confirmar mi asistencia a la fiesta de quince años de Darinka Raquel.`}
              classNameTitle="text-darinka-primary tracking-[-0.06em] font-semibold text-center"
              classNameMessage="text-darinka-primary tracking-[-0.06em] font-regular text-center"
              classNameButton="rounded-[16px] text-[18px] text-white bg-darinka-primary hover:scale-105 transition-transform duration-300"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="footer-invitation">
            <div className="footer flex flex-col items-center text-darinka-primary">
              <Image
                src={footerImage}
                alt='Mis XV Invitation'
              />
              <span
                className={`${inspiration.className} text-[96px] text-center leading-none`}
              >
                Mis XV
              </span>
              <span
                className={`${lobsterTwo.className} text-[30px] text-center `}
              >
                Darinka Raquel
              </span>
            </div>
          </section>
        </main>
        <FooterRabe className={`${lexend.className} bg-white text-darinka-primary`} />
        <BackgroundMusicInvitation audioSrc={'/audio/MartaAlbarracin-QuinceAños.mp3'} className="bg-darinka-primary hover:bg-darinka-primary text-white" />
      </SobreAnimationInvitation>
    </>
  );
}
