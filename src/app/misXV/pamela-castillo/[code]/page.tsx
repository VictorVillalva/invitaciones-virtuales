"use client";
//** Hooks */
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useParams } from "next/navigation";
import { useFechaConfirmacionInvitation } from "@/hooks/useFechaConfirmacion";
import { useConfirmacionAsistencia } from "@/hooks/useConfirmacion";
import Link from "next/link";
import { useSpotifyPamela } from "@/hooks/useSpotify";
//** Components */
import BlockMobileInvitation from "@/components/components-invitations/BlockMobile-Invitation";
import HeaderInvitation from "@/components/components-invitations/Header-Invitation";
import SobreAnimationInvitation from "@/components/components-invitations/SobreAnimation-Invitation";
import ApartaFechaInvitation from "@/components/components-invitations/ApartaFecha-Invitation";
import TextoInspiradorInvitation from "@/components/components-invitations/TextoInspirador-Invitation";
import GaleriaFotosInvitation from "@/components/components-invitations/GaleriaFotos-Invitation";
import ItinerarioInvitation from "@/components/components-invitations/Itinerario-Invitation";
import PadresInvitation from "@/components/components-invitations/Padres-Invitation";
import PadrinosInvitation from "@/components/components-invitations/Padrinos-Invitation";
import Liverpool from "@/components/components-invitations/Mesas-Regalo/Liverpool";
import CountDownInvitation from "@/components/components-invitations/CountDown-Invitation";
import LugarEventoInvitation from "@/components/components-invitations/LugarEvento-Invitation";
import PlaylistInvitation from "@/components/components-invitations/Playlist-Invitation";
import FooterRabe from "@/components/components-invitations/Footer-Rabe";
import BackgroundMusicInvitation from "@/components/components-invitations/BackgroundMusic-Invitation";
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

export default function PamelaCastillo() {

  const { isMobile } = useIsMobile();
  const params = useParams();
  const code = params?.code;
  const fechaLimite = "2025-09-19T00:00:00";
  const { puedeConfirmar } = useFechaConfirmacionInvitation({ fechaLimite });
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
          <section className="spotify-playlist-invitation">
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
          <section data-aos="fade-dowm" className="confirmación-invitation">
            {guestsData?.hasConfirmed ? (
              <div className="asistencia flex flex-col gap-10">
                {(guestsData.adultsNo === null && guestsData.kidsNo === null) ||
                  (guestsData.adultsNo ?? 0) + (guestsData.kidsNo ?? 0) >= 1 ? (
                  <>
                    <div className="flex flex-col">
                      <p className="text-[40px] text-center tracking-[-0.06em] font-bold text-pamela-primary">
                        Fecha del evento
                      </p>
                      <p
                        className={`text-center text-[24px] tracking-[-0.06em] text-pamela-primary leading-none`}
                      >
                        Ya haz confirmado tu asistencia al evento, guarda la
                        fecha para este maravilloso momento
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p
                        className={`text-center tracking-[-0.06em] text-pamela-primary`}
                      >
                        Da click en el boton para ver tus pases
                      </p>
                      <Link
                        href={`/misXV/pamela-castillo/confirmacion/${code}`}
                        className={`py-2 px-3 flex justify-center items-center rounded-[16px] text-[18px] text-white bg-[linear-gradient(to_right,#435A62_0%,#668995_34%,#77A0AF_68%,#89B8C8_100%)]`}
                      >
                        Ver mis pases
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className=" flex flex-col justify-center py-50 gap-4 items-center text-center text-pamela-primary">
                    <p className="font-bold text-[40px] tracking-[-0.02em] leading-none">
                      Lamentamos que no puedas asistir
                    </p>
                    <p className="text-[18px] tracking-tighter leading-none">
                      Gracias por tu interés. Entendemos que no podrás
                      acompañarnos en esta ocasión y esperamos verte en una
                      próxima celebración.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="asistencia flex flex-col gap-10">
                {puedeConfirmar ? (
                  <>
                    <div className="flex flex-col">
                      <p className="text-[40px] text-center tracking-[-0.06em] font-bold text-pamela-primary">
                        Confirmación de Asistencia
                      </p>
                      <p
                        className={`text-center tracking-[-0.06em] text-pamela-primary leading-none`}
                      >
                        Esta es la fecha límite para confirmar tu asistencia al
                        evento, date prisa y no te quedes fuera de este momento
                        tan especial.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className={`text-center tracking-[-0.06em] text-pamela-primary`}
                      >
                        Da click en el boton para confirmar tu asistencia
                      </p>
                      <Link
                        href={`/misXV/pamela-castillo/confirmacion/${code}`}
                        className={`py-2 px-3 flex justify-center items-center rounded-[16px] text-[18px] text-white bg-[linear-gradient(to_right,#435A62_0%,#668995_34%,#77A0AF_68%,#89B8C8_100%)]`}
                      >
                        Confirmar
                      </Link>
                    </div>
                    <ApartaFechaInvitation
                      date="8 de Noviembre del 2025"
                      classNameTitle="tracking-[0.16em] text-pamela-primary font-normal"
                      classNameText="text-[40px] font-bold tracking-[-0.02em] text-[#C4870A]"
                    />
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-4">
                      <p className="text-[40px] tracking-[-0.06em] text-pamela-primary font-bold leading-10 text-center">
                        Lo sentimos pero el tiempo ha terminado
                      </p>
                      <p
                        className={`text-center text-pamela-primary tracking-[-0.02em] leading-none`}
                      >
                        El tiempo para confirmar tu asistencia al evento ha
                        terminado, lamentamos que no hayas podido confirmar tu
                        presencia, ojalá podamos coincidir en otra ocasión.
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </section>
          <section data-aos="fade-dowm" className="separador-invitation">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="footer-invitation">
            <div className="footer flex flex-col items-center gap-2">
              <span
                className={`${ephesis.className} text-[32px] text-[#C4870A] text-center`}
              >
                Mis XV
              </span>
              <span
                className={`${ephesis.className} text-[64px] text-[#C4870A] leading-[80%] text-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]`}
              >
                Pamela Castillo Monterrosas
              </span>
              <span className="tracking-[1em] text-[#9C610C]">08.11.2025</span>
            </div>
          </section>
        </main>
        <FooterRabe className="bg-[#F2D6D6]" />
        <BackgroundMusicInvitation audioSrc={'/audio/LoveOfMyLife.mp3'} className="bg-pamela-primary hover:bg-pamela-primary text-white "/>
      </SobreAnimationInvitation>
    </>
  );
}
