import SelectConfirmationInvitation from "./SelectConfirmation-Invitation";
import Mensaje from "../Mensaje";
import { useConfirmacionPamela } from "@/hooks/useConfirmacion";
import { ParamValue } from "next/dist/server/request/params";
import { Guest } from "@/types";
import DialogInvitation from "../Dialog-Invitation";
import { zain } from "@/assets/fonts/fonts";
import LogoPamela from "@/assets/images/PamelaCastilloXV/Logo-Pamela.png";
import InvitationOne from "./Invitation-One";
import Image from "next/image";
import separador from "@/assets/images/PamelaCastilloXV/Separator-8-PamelaCastillo.svg";
import CountDown from "../CountDown-Invitation";
import SelectConfirmationKidsInvitation from "./SelectConfirmationKids-Invitation";

interface ConfirmacionProps {
  params: ParamValue;
  datos: Guest;
  numeroPersonas?: number;
  familia?: string;
  className?: string;
  title: string;
  classNameTitle?: string;
}

export default function ConfirmacionInvitation({
  params,
  datos,
  className,
  title,
  classNameTitle,
  familia,
}: ConfirmacionProps) {
  const {
    selectedOption,
    selectedKidsOption,
    message,
    error,
    headerError,
    isModalOpen,
    isModalConfirmationOpen,
    isSubmitted,
    hasKids,
    hasAdults,
    localDatos,
    handleSelectChange,
    handleSelectKidsChange,
    handleMessageChange,
    handleSubmit,
    handleCloseModal,
  } = useConfirmacionPamela({ params, datos });

  const numeroTotalPersonas = localDatos?.adultsNo + localDatos?.kidsNo; // o Number(adultsNo)+Number(kidsNo) si vienen como string

  return (
    <div className={``}>
      {isSubmitted ? (
        <>
          {localDatos?.adultsNo === 0 && localDatos?.kidsNo === 0 ? (
            <div className=" flex flex-col justify-center py-50 gap-4 items-center text-center text-pamela-primary">
              <p className="font-bold text-[40px] tracking-[-0.02em] leading-none">
                Lamentamos que no puedas asistir
              </p>
              <p className="text-[18px] tracking-tighter leading-none">
                Gracias por tu interés. Entendemos que no podrás acompañarnos en esta ocasión, esperamos verte en una próxima celebración.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-[150px]">
              <div className="flex flex-col gap-6">
                <div className="encabezado flex flex-col text-center text-pamela-primary">
                  <h1 className="font-bold text-[40px] tracking-[-0.02em]">
                    Pase de entrada
                  </h1>
                </div>
                <InvitationOne
                  className="text-pamela-primary"
                  numPer={numeroTotalPersonas}
                  family={familia}
                  adultsNo={localDatos?.adultsNo}
                  kidsNo={localDatos?.kidsNo}
                />
                <p className="text-pamela-primary tracking-[-0.02em] leading-none text-center">
                  Recuerda mostrar tu pase en la entrada del evento para que
                  puedas entrar.
                </p>
              </div>
              <Image src={separador} alt="separador" />
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-1 text-center text-pamela-primary">
                  <p className="font-bold tracking-[-0.02em] text-[40px] leading-none">
                    Haz confirmado tu asistencia
                  </p>
                  <p className="tracking-[-0.02em]">
                    Esta es la cuenta regresiva para el gran evento, no olvides
                    agregar esta fecha especial en tu recordatorio.
                  </p>
                </div>
                <CountDown
                  targetDate={new Date("2025-11-08T00:00:00")}
                  showTitle={false}
                  classNameTitle="text-center text-[40px] font-bold text-pamela-primary tracking-[-0.02em] leading-[40px]"
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex flex-col gap-10">
            <div className="encabezado flex flex-col text-center text-pamela-primary">
              <h1 className="font-bold text-[40px] tracking-[-0.02em]">
                Confirma tu asistencia
              </h1>
              <p className="tracking-[-0.02em]">
                <b>{familia}</b>, por favor rellena el siguiente formulario correctamente para
                obtener tu pase a este gran evento.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div
                className={`${className} flex flex-col p-6 bg-white rounded-[6px] gap-3`}
              >
                <h3 className={`${classNameTitle}`}>{title}</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    {hasAdults === true && (
                      <SelectConfirmationInvitation
                        label="Selecciona los adultos que asistirán:"
                        selectedOption={selectedOption}
                        onSelect={handleSelectChange}
                        persons={datos?.adultsNo}
                      />
                    )}
                    {hasKids === true && (
                      <SelectConfirmationKidsInvitation
                        label="Selecciona la cantidad de menores que asistirán:"
                        selectedOption={selectedKidsOption}
                        onSelect={handleSelectKidsChange}
                        persons={datos?.kidsNo}
                      />
                    )}
                    {error && (
                      <p className="text-red-400 text-sm font-semibold">
                        {error}
                      </p>
                    )}
                  </div>
                  <Mensaje
                    persona="Pamela Castillo Monterrosas"
                    message={message}
                    onMessageChange={handleMessageChange}
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 rounded-[16px] text-[18px] text-white bg-[linear-gradient(to_right,#435A62_0%,#668995_34%,#77A0AF_68%,#89B8C8_100%)]"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      {isModalOpen && (
        <>
          <DialogInvitation
            title={headerError}
            classNameTitle="text-[40px] text-pamela-primary tracking-[-0.04em] leading-none"
            description={error}
            classNameDescription="text-pamela-primary text-[18px] leading-none tracking-[-0.02em]"
            classNameButton="rounded-[16px] text-[18px] text-white bg-[linear-gradient(to_right,#435A62_0%,#668995_34%,#77A0AF_68%,#89B8C8_100%)]"
            tipography={zain}
            logo={LogoPamela}
            closeModal={handleCloseModal}
          />
        </>
      )}
      {isModalConfirmationOpen && (
        <>
          <DialogInvitation
            title="¡Haz confirmado tu asistencia con éxito!"
            classNameTitle="text-[40px] text-pamela-primary tracking-[-0.04em] leading-none"
            description="En un momento veras tu pase de acceso al evento, recuerda mostrar tu pase el dia del evento en la entrada para poder ingresar"
            classNameDescription="text-pamela-primary text-[18px] leading-none tracking-[-0.02em]"
            classNameButton="rounded-[16px] text-[18px] text-white bg-[linear-gradient(to_right,#435A62_0%,#668995_34%,#77A0AF_68%,#89B8C8_100%)]"
            tipography={zain}
            logo={LogoPamela}
            closeModal={handleCloseModal}
          />
        </>
      )}
    </div>
  );
}
