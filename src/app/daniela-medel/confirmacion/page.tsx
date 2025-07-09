'use client'
import Confirmacion from "@/components/components-invitations/Confirmacion";
import Footer from "@/components/components-invitations/Footer";
import Invitacion from "@/components/components-invitations/Invitacion";

export default function ConfirmacionAsistencia() {
  const COLORTEXT = '#323C5D'

  return (
    <>
      <main className={`text-[${COLORTEXT}] w-full px-4 py-[100px] relative z-10`}>
        <div className="asistencia flex flex-col gap-10" data-aos="fade-up">
          <p className="text-[32px] text-center">Confirmación de asistencia</p>
          <Invitacion
            numPersonas={3}
            familia="Muñiz"
            adultos={2}
            ninos={1}
          />
          <Confirmacion />
        </div>
      </main>
      <Footer />
    </>
  )
}
