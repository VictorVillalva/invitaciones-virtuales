"use client";
import Image from "next/image";
import BlockMobileInvitation from "@/components/components-invitations/BlockMobile-Invitation";
import { useIsMobile } from "@/hooks/useIsMobile";
import separador from "@/assets/images/AimeeSabbaghXV/Separator-4.png";
import { ephesis, fleurDeLeah } from "@/assets/fonts/fonts";
import FooterRabe from "@/components/components-invitations/Footer-Rabe";
import { useParams } from "next/navigation";
import { useConfirmacionAsistenciaPamela } from "@/hooks/useConfirmacion";
import ConfirmacionInvitation from "@/components/components-invitations/Confirmacion/CardConfirmacion-Invitation";
import footerImage from "@/assets/images/AimeeSabbaghXV/flower-footer.png";


export default function PamelaConfirmacion() {
  const { isMobile } = useIsMobile();
  const params = useParams();
  const code = params?.code;

  const { codeParam, guestsData } = useConfirmacionAsistenciaPamela({
    codeParam: code,
  });

  // Si no hay datos, mostrar mensaje de error
  const noPass = !guestsData;

  return (
    <>
      {!isMobile && <BlockMobileInvitation />}
      <main className="flex flex-col px-4 py-[100px] gap-[150px]">
        <section data-aos="fade-dowm" className="confirmacion">
          <div className="flex flex-col gap-10">
            {noPass ? (
              <div className=" flex flex-col justify-center py-50 gap-4 items-center text-center text-aimee-primary">
                <p className="font-bold text-[40px] tracking-tighter leading-none">
                  Lo sentimos pero creemos que no tienes pase
                </p>
                <p className="text-[18px] tracking-tighter leading-none">
                  Por favor ponte en contancto directamente con los
                  organizadores de la fiesta para adquirir tu pase.
                </p>
              </div>
            ) : (
              <>
                {(guestsData.adultsNo === null && guestsData.kidsNo === null) ||
                  (guestsData.adultsNo ?? 0) + (guestsData.kidsNo ?? 0) >= 1 ? (
                  <>
                    <ConfirmacionInvitation
                      title="Completa la confirmación de asistencia"
                      className="text-aimee-primary"
                      classNameTitle="font-bold text-[24px] tracking-[-0.06em] text-center"
                      params={codeParam}
                      datos={guestsData}
                      familia={guestsData.name}
                    />
                  </>
                ) : (
                  <div className=" flex flex-col justify-center py-50 gap-4 items-center text-center text-aimee-primary">
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
              </>
            )}
          </div>
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
    </>
  );
}
