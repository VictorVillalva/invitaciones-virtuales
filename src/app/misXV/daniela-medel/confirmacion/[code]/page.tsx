'use client'
import { quicksand } from "@/assets/fonts/fonts";
import BlockMobile from "@/components/components-invitations/BlockMobile";
import Confirmacion from "@/components/components-invitations/Confirmacion";
import Footer from "@/components/components-invitations/Footer";
import Invitacion from "@/components/components-invitations/Invitacion";
import { useConfirmacion, useConfirmacionAsistencia } from "@/hooks/useConfirmacion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ConfirmacionAsistencia() {
  const { isMobile } = useIsMobile()
  const COLORTEXT = '#323C5D'
  const params = useParams();
  const code = params?.code;

  const { codeParam, guestsData } = useConfirmacionAsistencia({ codeParam: code });

  // Si no hay datos, mostrar mensaje de error
  const noPass = !guestsData;

  return (
    <>
      {!isMobile && <BlockMobile />}
      <main className={`text-[${COLORTEXT}] w-full px-4 py-[100px] relative z-10`}>
        <div className="asistencia flex flex-col gap-10" >
          <p className="text-[32px] text-center">Confirmación de asistencia</p>
          {noPass ? (
            <div className=" flex flex-col pt-40 gap-4 items-center text-center h-dvh">
              <span className="text-6xl">🫣</span>
              <p className="font-bold text-xl">Creemos que no tienes un pase</p>
            </div>
          ) : (
            <>
              {(guestsData.adultsNo === null && guestsData.kidsNo === null) ||
                ((guestsData.adultsNo ?? 0) + (guestsData.kidsNo ?? 0) >= 1) ? (
                <>
                  <Confirmacion 
                    params={codeParam} 
                    datos={guestsData} 
                    numeroPersonas={guestsData.invitationQty} 
                    familia={guestsData.name} 
                  />
                </>
              ) : (
                <div className="h-dvw flex flex-col justify-center text-center py-20 mb-20">
                  <p className={`${quicksand.className} font-medium`}>
                    Gracias por tu interés. Entendemos que no podrás acompañarnos en esta ocasión y esperamos verte en una próxima celebración.                 
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
