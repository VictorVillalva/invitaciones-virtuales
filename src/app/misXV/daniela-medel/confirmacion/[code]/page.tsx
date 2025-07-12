'use client'
import BlockMobile from "@/components/components-invitations/BlockMobile";
import Confirmacion from "@/components/components-invitations/Confirmacion";
import Footer from "@/components/components-invitations/Footer";
import Invitacion from "@/components/components-invitations/Invitacion";
import { useIsMobile } from "@/hooks/useIsMobile";
import type { Guest } from "@/types";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function ConfirmacionAsistencia() {
  const { isMobile } = useIsMobile()
  const COLORTEXT = '#323C5D'
  const params = useParams();
  const code = params?.code;
  const [guestsData, setGuestsData] = useState<Guest | null>(null);

  // ...existing code...
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphbmUuZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzUyMzAzNDAwfQ._Mwg3Fsnjk9zeH9wJtfe0eGCNszasK7SapVdLpRjzjQ"; // Ajusta el nombre si es diferente
        const response = await axios.get(
          `http://localhost:8080/guests/${code}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        // Guardar la data en el estado
        // Si tu response.data ya es un arreglo:
        setGuestsData(response.data.data);
        // Aquí puedes guardar la respuesta en el estado si lo necesitas
      } catch (error) {
        console.error("Error al obtener la confirmación:", error);
      }
    };
    if (code) {
      fetchData();
    }
  }, [code]);

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
              <Confirmacion params={code} datos={guestsData} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
