'use client'
import BlockMobile from "@/components/components-invitations/BlockMobile";
import Confirmacion from "@/components/components-invitations/Confirmacion";
import Footer from "@/components/components-invitations/Footer";
import Invitacion from "@/components/components-invitations/Invitacion";
import { useConfirmacionAsistencia } from "@/hooks/useConfirmacion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useParams } from "next/navigation";

export default function ConfirmacionAsistencia() {
  const { isMobile } = useIsMobile()
  const COLORTEXT = '#323C5D'
  const params = useParams();
  const code = params?.code;

  const {codeParam, guestsData} = useConfirmacionAsistencia({codeParam : code});

  return (
    <>
      {!isMobile && <BlockMobile />}
      <main className={`text-[${COLORTEXT}] w-full px-4 py-[100px] relative z-10`}>
        <div className="asistencia flex flex-col gap-10" data-aos="fade-up">
          <p className="text-[32px] text-center">Confirmación de asistencia</p>
          {guestsData && (
            <>
              <Invitacion
                numPersonas={guestsData.invitationQty}
                familia={guestsData.name}
              />
              <Confirmacion params={codeParam} datos={guestsData} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
