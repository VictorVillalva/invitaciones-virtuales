"use client";
//** Hooks */
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useParams } from "next/navigation";
//** Components */
import BlockMobileInvitation from "@/components/components-invitations/BlockMobile-Invitation";
import HeaderInvitation from "@/components/components-invitations/Header-Invitation";
import SobreAnimationInvitation from "@/components/components-invitations/SobreAnimation-Invitation";
import ApartaFechaInvitation from "@/components/components-invitations/ApartaFecha-Invitation";
import TextoInspiradorInvitation from "@/components/components-invitations/TextoInspirador-Invitation";
//** Assets */
import Portada from "@/assets/images/PamelaCastilloXV/Portada-Oficial-PamelaCastillo.png";
import Lugar from "@/assets/images/PamelaCastilloXV/Hacienda-ElJaguey.png";
import separador from "@/assets/images/PamelaCastilloXV/Separator-8-PamelaCastillo.svg";
import { ephesis } from "@/assets/fonts/fonts";
//** Data */
import {
  ImagesCarrusel,
  evento,
  nombrePadresPadrinos,
} from "@/assets/data/PamelaCastillo/db";
import GaleriaFotosInvitation from "@/components/components-invitations/GaleriaFotos-Invitation";
import ItinerarioInvitation from "@/components/components-invitations/Itinerario-Invitation";
import PadresInvitation from "@/components/components-invitations/Padres-Invitation";
import PadrinosInvitation from "@/components/components-invitations/Padrinos-Invitation";
import Liverpool from "@/components/components-invitations/Mesas-Regalo/Liverpool";
import CountDownInvitation from "@/components/components-invitations/CountDown-Invitation";
import LugarEventoInvitation from "@/components/components-invitations/LugarEvento-Invitation";
import PlaylistInvitation from "@/components/components-invitations/Playlist-Invitation";
import { useFechaConfirmacion } from "@/hooks/useFechaConfirmacion";
import { useConfirmacionAsistencia } from "@/hooks/useConfirmacion";


export default function PamelaCastillo() {
  const { isMobile } = useIsMobile();
  const params = useParams();
  const code = params?.code;
  const { puedeConfirmar } = useFechaConfirmacion();
  const { guestsData } = useConfirmacionAsistencia({ codeParam: code });

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
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="texto-inspirador-invitation">
            <TextoInspiradorInvitation
              title="La vida está hecha de instantes únicos, y este es uno de ellos. Me encantaría que me acompañes a celebrar mis XV años y a compartir juntos este día tan especial."
              classNameText="text-[24px] font-normal text-[#814D12]"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="carrusel">
            <GaleriaFotosInvitation
              title="Galería de fotos"
              classNameTitle="tracking-[-0.02em] font-bold text-[40px] text-pamela-primary"
              fotos={ImagesCarrusel}
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="Itinerario">
            <ItinerarioInvitation
              classNameTitle="tracking-[-0.02em] font-bold text-[40px] text-pamela-primary"
              data={evento}
              colorItems="bg-[#435A62]"
              colorLine="before:border-bg-[#435A62]"
              colorText="text-[#435A62]"
              classNameItem="tracking-[-0.04em]"
              classNameDescription="tracking-[-0.02em]"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="padres-padrinos">
            <div className="flex flex-col gap-10">
              <PadresInvitation
                nombre1={nombrePadresPadrinos[0].nombre}
                apellido1={nombrePadresPadrinos[0].apellido}
                nombre2={nombrePadresPadrinos[1].nombre}
                apellido2={nombrePadresPadrinos[1].apellido}
                classNameTitle="font-bold text-[40px] tracking-[-0.02em] text-[#435A62]"
                classNameNombres="font-bold text-[#814D12]"
              />
              <PadrinosInvitation
                nombre1={nombrePadresPadrinos[2].nombre}
                apellido1={nombrePadresPadrinos[2].apellido}
                nombre2={nombrePadresPadrinos[3].nombre}
                apellido2={nombrePadresPadrinos[3].apellido}
                classNameTitle="font-bold text-[40px] tracking-[-0.02em] text-[#435A62]"
                classNameNombres="font-bold text-[#814D12]"
              />
            </div>
          </section>
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="mesa-regalos">
            <div className="flex flex-col items-center gap-10">
              <h2 className="font-bold text-[#435A62] text-[40px]">
                Mesa de Regalos
              </h2>
              <Liverpool
                code="51742336"
                classNameTitle="text-[#435A62]"
                classNameCode="text-[#814D12]"
              />
            </div>
          </section>
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="countdown-invitation">
            <CountDownInvitation
              targetDate={new Date("2025-11-08T00:00:00")}
              classNameTitle="text-center text-[40px] font-bold text-pamela-primary tracking-[-0.02em] leading-[40px]"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="lugar-evento-invitation">
            <LugarEventoInvitation
              title="Recepción y Celebración"
              classNameTitle="text-center text-[40px] font-bold text-pamela-primary tracking-[-0.02em] leading-[40px]"
              image={Lugar}
              location="Prolongación Hacienda El Jaguey 3402 Cholula, 72828 Heroica Puebla de Zaragoza"
              urlLocation="https://maps.app.goo.gl/bnV6uGG2rLP7YQYWA"
              titleCard="Hacienda El Jaguey"
              classNameTitleCard="text-[32px] tracking-[-0.06em] text-pamela-primary"
              classNameButton="rounded-[16px] text-[18px] text-white bg-[linear-gradient(to_right,#435A62_0%,#668995_34%,#77A0AF_68%,#89B8C8_100%)]"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="spotify-playlist">
            <PlaylistInvitation
              title="Mi Playlist"
              description="La música es una hermosa forma de transmitir buenos deseos. Por eso, los invitamos a dedicarle una canción a Pame, que represente todo el cariño y los mejores deseos para ella."
              classNameTitle="font-bold tracking-[-0.06em] text-[#435A62]"
              classNameDescription="tracking-[-0.02em] text-[#435A62] leading-[110%]"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
        </main>
        {/* Alertas de la Invitación */}
        {/* Mostrar mensaje si no hay canciones */}
        {/* {showAlert && (
          <div className="fixed left-1/2 top-[calc(env(safe-area-inset-top,0px)+0.75rem)] z-[100] w-full max-w-xl -translate-x-1/2 px-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>
                <div className="flex flex-row justify-between">
                  <span>Error</span>
                  <button onClick={handleCloseAlert}>
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </AlertTitle>
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
          </div>
        )} */}
      </SobreAnimationInvitation>
    </>
  );
}
