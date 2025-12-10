"use client";
//** Hooks */
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
//** Components */
import BlockMobileInvitation from "@/components/components-invitations/BlockMobile-Invitation";
import HeaderInvitation from "@/components/components-invitations/Header-Invitation";
import SobreAnimationInvitation from "@/components/components-invitations/SobreAnimation-Invitation";
import ApartaFechaInvitation from "@/components/components-invitations/ApartaFecha-Invitation";
import TextoInspiradorInvitation from "@/components/components-invitations/TextoInspirador-Invitation";
import PadresInvitation from "@/components/components-invitations/Padres-Invitation";
import PadrinosInvitation from "@/components/components-invitations/Padrinos-Invitation";
import CodigoVestimentaInvitation from "@/components/components-invitations/CodigoVestimenta-Invitation-2";
import LugarEventoInvitation from "@/components/components-invitations/LugarEvento-Invitation";
import LluviaSobres from "@/components/components-invitations/LluviaSobres";
import CountDownInvitation from "@/components/components-invitations/CountDown-Invitation3";
import FooterRabe from "@/components/components-invitations/Footer-Rabe";
//** Assets */
import { fleurDeLeah } from "@/assets/fonts/fonts";
import etiqueta from "@/assets/images/AimeeSabbaghXV/vestimenta.png";
import Portada from "@/assets/images/AimeeSabbaghXV/portada.png";
import separador from "@/assets/images/AimeeSabbaghXV/Separator-4.png";
import Lugar from "@/assets/images/DarinkaRaquelXV/social-d-mary.png";
import footerImage from "@/assets/images/AimeeSabbaghXV/flower-footer.png";
//** Data */
import {
  nombrePadresPadrinos,
} from "@/assets/data/AimeeSabbagh/dt";
import { useParams } from "next/navigation";
import { useFechaConfirmacionInvitation } from "@/hooks/useFechaConfirmacion";
import { useConfirmacionAsistencia } from "@/hooks/useConfirmacion";
import Link from "next/link";

export default function AimeeSabbagh() {
  const { isMobile } = useIsMobile();
  const params = useParams();
  const code = params.code;
  const fechaLimite = "2025-12-27T23:59:00";
  const { puedeConfirmar } = useFechaConfirmacionInvitation({ fechaLimite });
  const { guestsData } = useConfirmacionAsistencia({ codeParam: code });

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
          classNameHeader="h-[852px] !object-center"
          classNameCardTitle="-bottom-15"
          image={Portada}
          classNameImage="!object-contain !object-center"
          classNameTitle="text-[64px] text-[#FF9DA5]"
          tipographyTitle={fleurDeLeah}
          nombreFestejada="Aimee Lizeth Sabbagh Martínez"
          classNameSubtitle="text-[20px] text-[#FF9DA5] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          separator={false}
        />
        <main className="invitacion-pamela-castillo flex flex-col gap-[150px] px-4 py-[150px]">
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="bottom- aparta-fechas-invitation">
            <ApartaFechaInvitation
              date="27 de Diciembre de 2025"
              classNameTitle="tracking-[-0.06em] text-aimee-primary !font-bold text-[40px]"
              classNameText="text-[24px] font-normal tracking-[-0.06em] text-aimee-primary"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="texto-inspirador-invitation">
            <TextoInspiradorInvitation
              title="Con la bendición de Dios y el amor de toda mi familia, me siento muy feliz de llegar a este momento de mi vida. Ahora empieza un camino que conduce a un mundo de sueño e ilusiones con mucha fe, humildad y esperanza deseo cumplir. Me gustaría con mucha alegría compartir este comienzo de esta bella etapa con todos ustedes."
              classNameText="text-[24px] font-normal text-aimee-primary tracking-[-0.06em]"
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
                classNameTitle="font-bold text-[40px] tracking-[-0.06em] text-aimee-primary"
                classNameNombres="text-darinka-primary tracking-[-0.06em]"
              />
              <PadrinosInvitation
                nombre1={nombrePadresPadrinos[2].nombre}
                apellido1={nombrePadresPadrinos[2].apellido}
                nombre2={nombrePadresPadrinos[3].nombre}
                apellido2={nombrePadresPadrinos[3].apellido}
                classNameTitle="font-bold text-[40px] tracking-[-0.06em] text-darinka-primary"
                classNameNombres="text-darinka-primary tracking-[-0.06em]"
              />
            </div>
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="vestimenta-regalos">
            <CodigoVestimentaInvitation
              classNameTitle="font-bold text-aimee-primary tracking-[-0.06em]"
              classNameDescription="text-aimee-primary font-normal tracking-[-0.06em]"
              classNamedescriptionClothing="!text-base text-aimee-primary font-normal tracking-[-0.02em]"
              descriptionClothing={`*Mujeres: Traje Regional o Conjunto Istmeño
                *Hombres: Guayabera blanca & Pantalón beige`}
              image={etiqueta}
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="lluvia-sobres">
            <LluviaSobres
              titleClassName="font-bold text-aimee-primary tracking-[-0.06em] !text-[40px]"
              tarjeta={false}
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="countdown-invitation">
            <CountDownInvitation
              targetDate={new Date("2025-12-27T14:00:00")}
              title="Cuenta Regresiva"
              classNameTitle="text-center text-[40px] font-bold text-aimee-primary tracking-[-0.06em]"
              classNameText="text-aimee-primary text-[16px]"
              classNameDaysContainer="!text-aimee-primary text-[24px] "
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="lugar-evento-invitation">
            <LugarEventoInvitation
              variant="v2"
              title="Ubicación del evento"
              classNameTitle="text-center text-[40px] font-bold text-aimee-primary tracking-[-0.06em] leading-[40px]"
              image={Lugar}
              location="Calle 5 de Sept. Interior entre Av. Oaxaca y Av. Abasolo, Juchitán Oax.  70000 Juchitán de Zaragoza, Mexico."
              urlLocation="https://maps.app.goo.gl/Co2TYDseoDC9gKeJA"
              titleCard="Jardín EL ARABE"
              haveTime={true}
              time="27 Diciembre 2025 - 16:00 p.m."
              classNameTitleCard="text-[24px] tracking-[-0.08em] text-aimee-primary font-semibold"
              classNameSubtitle="text-[16px] !text-aimee-primary !leading-normal font-normal"
              classNameButton="rounded-[16px] text-[16px] text-white bg-aimee-primary hover:scale-105 transition-transform duration-300"
            />
          </section>
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
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
                        href={`/misXV/aimee-sabbagh/confirmacion/${code}`}
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
                      <p className="text-[40px] text-center tracking-[-0.06em] font-bold text-aimee-primary">
                        Confirmación de Asistencia
                      </p>
                      <p
                        className={`text-center tracking-[-0.06em] text-aimee-primary leading-none`}
                      >
                        Esta es la fecha límite para confirmar tu asistencia al evento, date prisa y no te quedes fuera de este momento tan especial
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className={`text-center tracking-[-0.06em] text-aimee-primary`}
                      >
                        Da clic en el botón para confirmar tu asistencia
                      </p>
                      <Link
                        href={`/misXV/aimee-sabbagh/confirmacion/${code}`}
                        className={`py-2 px-3 flex justify-center items-center rounded-[16px] text-[18px] text-white bg-aimee-primary`}
                      >
                        Confirmar
                      </Link>
                    </div>
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
          <section data-aos="fade-dowm" className="separador-invitation flex flex-col justify-center items-center">
            <Image src={separador} alt="separador" />
          </section>
          <section data-aos="fade-dowm" className="footer-invitation">
            <div className="footer flex flex-col items-center gap-2">
              <Image
                src={footerImage}
                alt='Mis XV Invitation'
              />
              <span
                className={`${fleurDeLeah.className} text-[70px] text-aimee-primary`}
              >
                Mis XV
              </span>
              <span
                className={`text-[20px] text-aimee-primary text-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]`}
              >
                Aimee Lizeth Sabbagh Martínez
              </span>
              <span className="tracking-[1em] text-aimee-primary">27.12.2025</span>
            </div>
          </section>
        </main>
        <FooterRabe className={`bg-white text-darinka-primary`} />
      </SobreAnimationInvitation>
    </>
  );
}
