"use client";
//** Hooks */
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
//** Components */
import BlockMobileInvitation from "@/components/components-invitations/BlockMobile-Invitation";
import HeaderInvitation from "@/components/components-invitations/Header-Invitation";
import SobreAnimationInvitation from "@/components/components-invitations/SobreAnimation-Invitation";
//** Assets */
import { lexend, lobsterTwo } from "@/assets/fonts/fonts";
import separador from "@/assets/images/Separator-3.png"
import Portada from "@/assets/images/portada-core.png"
import PadrinosInvitation from "@/components/components-invitations/Padrinos-Invitation";
import LugarIglesia from "@/assets/images/Paquetes/Iglesia-Core.png";
import LugarEvento from "@/assets/images/Paquetes/lugar-core.png";
//** Data */
import {
  nombrePadrinosCore,
} from "@/assets/data/db-paquetes";
import LluviaSobres from "@/components/components-invitations/LluviaSobres";
import LugarEventoInvitation from "@/components/components-invitations/LugarEvento-Invitation";
import ConfirmacionWhatsapp from "@/components/components-invitations/Confirmacion/Confirmacion-Whatsapp";
import FooterRabe from "@/components/components-invitations/Footer-Rabe";

export default function InvitacionCore() {
  const { isMobile } = useIsMobile();
  return (
    <>
      {!isMobile && <BlockMobileInvitation />}
      <SobreAnimationInvitation
        classNameColorSobreInferior="bg-[#738A79]"
        classNameColorSobreLaterales="bg-[#55695A]"
        classNameColorSobreSuperior="bg-[#475A4C]"
      >
        <HeaderInvitation
          title="Nuestro Bautizo"
          classNameHeader="h-[900px]"
          classNameCardTitle="bottom-0"
          image={Portada}
          classNameImage="!object-contain" //! "! - HACE QUE SE APLIQUE PRIMERO POR EL !important"
          classNameTitle="!text-[48px] font-bold tracking-[-0.02em] text-[#475A4C] pb-6"
          tipographyTitle={lobsterTwo}
          tipographySubtitle={lexend}
          classNameSubtitle="text-[#738A79] !font-bold !whitespace-pre-line text-center"
          nombreFestejada={`Leslie Alexander
            &
            Marvin McKinney`}
          filterImage={false}
          srcSeparator={separador}
        />
        <main className="invitacion-core flex flex-col gap-[150px] px-4 py-[150px] text-[#475A4C]">
          <section data-aos="fade-dowm" className="padres-padrinos">
            <div className="flex flex-col gap-10">
              <PadrinosInvitation
                nombre1={nombrePadrinosCore[0].nombre}
                apellido1={nombrePadrinosCore[0].apellido}
                nombre2={nombrePadrinosCore[1].nombre}
                apellido2={nombrePadrinosCore[1].apellido}
                title="Nuestros Padrinos"
                classNameTitle="!font-bold !text-[24px] tracking-[-0.06em]"
                classNameNombres="tracking-[-0.06em] !text-[16px] !font-normal"
              />
            </div>
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="lluvia-sobres">
            <LluviaSobres
            className="!gap-6"
              titleClassName="font-bold tracking-[-0.06em] !text-[24px]"
              classNameDescription="font-normal tracking-[-0.06em]"
              textDescription="Prepara un pequeño detalle para nuestros bautizados"
              tarjeta={false}
              description={true}
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="iglesia-evento-invitation">
            <LugarEventoInvitation
              variant="v2"
              title="Ubicación de la Iglesia"
              classNameTitle="text-center text-[24px] font-bold tracking-[-0.06em] leading-[40px]"
              image={LugarIglesia}
              location="Prolongacion Hacienda El Jaguey 3402 Cholula, 72828 Heroica Puebla de Zaragoza"
              urlLocation="#"
              titleCard="Iglesia “Santo Domingo”"
              haveTime={true}
              time="15 May 2020 8:30 am"
              classNameTitleCard="text-[24px] tracking-[-0.09em] font-semibold"
              classNameSubtitle="text-[14px] font-light"
              classNameButton="rounded-[16px] text-[16px] text-white bg-[#475A4C] hover:scale-105 transition-transform duration-300"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="iglesia-evento-invitation">
            <LugarEventoInvitation
              variant="v2"
              title="Ubicación del Evento"
              classNameTitle="text-center text-[24px] font-bold tracking-[-0.06em] leading-[40px]"
              image={LugarEvento}
              location="Prolongacion Hacienda El Jaguey 3402 Cholula, 72828 Heroica Puebla de Zaragoza"
              urlLocation="#"
              titleCard="Salon “La Villa Bonita”"
              haveTime={true}
              time="15 May 2020 8:30 am"
              classNameTitleCard="text-[24px] tracking-[-0.09em] font-semibold"
              classNameSubtitle="text-[14px] font-light"
              classNameButton="rounded-[16px] text-[16px] text-white bg-[#475A4C] hover:scale-105 transition-transform duration-300"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="confirmacion-whastapp-invitation">
            <ConfirmacionWhatsapp
              phone={`#`}
              messageText={`¡Hola! Quisiera confirmar mi asistencia a la fiesta de quince años de Darinka Raquel.`}
              classNameTitle="tracking-[-0.06em] !text-[24px] font-bold text-center"
              classNameMessage="!text-[16px] tracking-[-0.06em] font-regular text-center"
              classNameButton="rounded-[16px] text-[16px] text-white bg-[#475A4C] hover:scale-105 transition-transform duration-300"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="footer-invitation">
            <div className="footer flex flex-col items-center text-darinka-primary">
              <Image
                src={Portada}
                alt='Mis XV Invitation'
                width={100}
              />
              <span
                className={`${lobsterTwo.className} !text-[48px] font-bold tracking-[-0.02em] text-[#475A4C]`}
              >
                Nuestro Bautizo
              </span>
              <span
                className={`text-[#738A79] !font-bold whitespace-pre-line text-center`}
              >
                Leslie Alexander
                <br />
                &
                <br />
                Marvin McKinney
              </span>
            </div>
          </section>
        </main>
        <FooterRabe className={`bg-[#475A4C] !gap-3 !rounded-none !p-4 !text-[12px] text-white`} />
      </SobreAnimationInvitation>
    </>
  );
}
