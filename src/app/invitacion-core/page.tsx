"use client";
import { lexend, lobsterTwo } from "@/assets/fonts/fonts";
import BlockMobileInvitation from "@/components/components-invitations/BlockMobile-Invitation";
import HeaderInvitation from "@/components/components-invitations/Header-Invitation";
import SobreAnimationInvitation from "@/components/components-invitations/SobreAnimation-Invitation";
import separador from "@/assets/images/Separator-3.png"
import Portada from "@/assets/images/portada-core.png"
//** Hooks */}
import { useIsMobile } from "@/hooks/useIsMobile";

export default function InvitacionCore() {
  const { isMobile } = useIsMobile();
  return (
    <>
      {!isMobile && <BlockMobileInvitation />}
      <SobreAnimationInvitation
        classNameColorSobreInferior="bg-[#f3c71c]"
        classNameColorSobreLaterales="bg-[#e3ae0f]"
        classNameColorSobreSuperior="bg-[#C4870A]"
      >
        <HeaderInvitation
          title="Nuestro Bautizo"
          classNameHeader="h-[900px]"
          classNameCardTitle="bottom-0"
          image={Portada}
          classNameImage="!object-contain" //! "! - HACE QUE SE APLIQUE PRIMERO POR EL !important"
          classNameTitle="text-[48px] font-bold tracking-[-0.02em] text-[#475A4C]"
          tipographyTitle={lobsterTwo}
          tipographySubtitle={lexend}
          classNameSubtitle="text-[#738A79] !font-bold !whitespace-pre-line text-center"
          nombreFestejada={`Leslie Alexander
            &
            Marvin McKinney`}
          filterImage={false}
          srcSeparator={separador}
        />
        <div className="object-contain">hola mundo</div>
      </SobreAnimationInvitation>
    </>
  );
}
