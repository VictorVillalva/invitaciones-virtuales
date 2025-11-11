"use client";
//** Hooks */
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useParams } from "next/navigation";
import { useFechaConfirmacionInvitation } from "@/hooks/useFechaConfirmacion";
import { useConfirmacionAsistencia } from "@/hooks/useConfirmacion";
//** Components */
import BlockMobileInvitation from "@/components/components-invitations/BlockMobile-Invitation";
import HeaderInvitation from "@/components/components-invitations/Header-Invitation";
import SobreAnimationInvitation from "@/components/components-invitations/SobreAnimation-Invitation";
import ApartaFechaInvitation from "@/components/components-invitations/ApartaFecha-Invitation";
import FooterRabe from "@/components/components-invitations/Footer-Rabe";
//** Assets */
import Portada from "@/assets/images/PamelaCastilloXV/Portada-Oficial-PamelaCastillo.png";

import { ephesis, lexend } from "@/assets/fonts/fonts";
 
//** Data */
import {
  ImagesCarrusel,
  evento,
  nombrePadresPadrinos,
} from "@/assets/data/PamelaCastillo/db";

export default function DarinkaRaquel() {
  const { isMobile } = useIsMobile();
//   const params = useParams();
//   const code = params?.code;
//   const fechaLimite = "2025-09-19T00:00:00";
//   const { puedeConfirmar } = useFechaConfirmacionInvitation({ fechaLimite });
//   const { guestsData } = useConfirmacionAsistencia({ codeParam: code });

  return (
    <>
      {!isMobile && <BlockMobileInvitation />}
      <SobreAnimationInvitation
        classNameColorSobreInferior="bg-[#f3c71c]"
        classNameColorSobreLaterales="bg-[#e3ae0f]"
        classNameColorSobreSuperior="bg-[#C4870A]"
      >
        <HeaderInvitation
          title="Mis XV"
          classNameHeader="h-[720px]"
          classNameCardTitle="bottom-0"
          image={Portada}
          classNameTitle="text-[64px]"
          tipographyTitle={ephesis}
          tipographySubtitle={ephesis}
          nombreFestejada="Pamela Castillo Monterrosas"
          classNameSubtitle="text-[32px] font-semibold bg-gradient-to-r from-[#F3C71C] via-[#EFB810] to-[#C4870A] bg-clip-text text-transparent"
          filterImage={true}
        />
        <main className="invitacion-pamela-castillo flex flex-col gap-[150px] px-4 py-[150px]">
          <section data-aos="fade-dowm" className="aparta-fechas-invitation">
            <ApartaFechaInvitation
              date="8 de Noviembre del 2025"
              classNameTitle="tracking-[0.16em] text-pamela-primary font-normal"
              classNameText="text-[40px] font-bold tracking-[-0.02em] text-[#C4870A]"
            />
          </section>
        </main>
        <FooterRabe className="bg-[#F2D6D6]" />
      </SobreAnimationInvitation>
    </>
  );
}
