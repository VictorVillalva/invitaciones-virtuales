import { quicksand } from "@/assets/fonts/fonts";
import { useConfirmacion } from "@/hooks/useConfirmacion";
import Mensaje from "./Mensaje";
import CountDown from "./CountDown";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import SelectConfirmation from "./SelectConfirmation";
import type { Guest } from "@/types";
import SelectKidsConfirmation from "./SelectKidsConfirmation";
import { ParamValue } from "next/dist/server/request/params";
import Invitacion from "./Invitacion";

interface ConfirmacionProps {
    params: ParamValue;
    datos: Guest
    numeroPersonas?: number;
    familia?: string;

}

export default function Confirmacion({ params, datos, numeroPersonas, familia}: ConfirmacionProps) {
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
        localDatos,
        handleSelectChange,
        handleSelectKidsChange,
        handleMessageChange,
        handleSubmit,
        handleCloseModal,
    } = useConfirmacion({ params, datos });

    const fechaEvento = new Date('2025-09-06T17:00:00');

    return (
        <div className={`${quicksand.className} px-4 py-6 border-[#A5A3A3] flex flex-col gap-6 text-white`}>
            {isSubmitted ? (
                <>
                    {(localDatos?.adultsNo === 0 && localDatos?.kidsNo === 0) ? (
                        <div className="h-dvw flex flex-col justify-center text-center py-20 mb-20 text-[#4F619B]">
                            <p className={`${quicksand.className} font-medium`}>
                                Gracias por tu interés. Entendemos que no podrás acompañarnos en esta ocasión y esperamos verte en una próxima celebración.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6">
                            <Invitacion
                                numPersonas={numeroPersonas}
                                familia={familia}
                            />
                            <div className="confirmacion flex flex-col gap-6 bg-[#4F619B] p-4 rounded-sm">
                                <p className="text-[24px] font-bold text-center leading-tight">
                                    ¡Has confirmado tu presencia para celebrar junto con Dani 🥳!
                                </p>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <p>¡Cuenta regresiva!</p>
                                    <CountDown targetDate={fechaEvento} />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <form onSubmit={handleSubmit} className="p-6 rounded-sm flex flex-col gap-6 transition-transform duration-500 ease-in-out transform translate-y-0 bg-[#4F619B]">
                    <p className="text-center font-bold text-xl">Completa la confirmación de asistencia</p>
                    <div className="flex flex-col gap-6">
                        <SelectConfirmation
                            label="Selecciona las personas que asistirán:"
                            selectedOption={selectedOption}
                            onSelect={handleSelectChange} // Pasamos la función de manejo
                            persons={datos?.invitationQty}
                        />
                        {hasKids === true &&
                            <SelectKidsConfirmation
                                label="Selecciona la cantidad de niños que asistirán:"
                                selectedOption={selectedKidsOption}
                                onSelect={handleSelectKidsChange}  // Pasamos la función de manejo
                            />
                        }
                        {error && <p className="text-white text-sm font-semibold">{error}</p>}
                        <Mensaje persona='Daniela Medel' message={message} onMessageChange={handleMessageChange} />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full py-2 bg-[#CBA836] text-white font-semibold rounded hover:bg-[#d9b12d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#927823]"
                    >
                        Enviar
                    </button>
                </form>
            )}
            {isModalOpen && 
                <>
                    <AlertDialog open onOpenChange={handleCloseModal}>
                        <AlertDialogContent className="rounded-sm text-[#4F619B]">
                            <AlertDialogHeader>
                                <AlertDialogTitle className={`${quicksand.className} text-2xl font-semibold flex flex-col gap-2`}>
                                    <span className="text-6xl">🫣</span>
                                    <p>{headerError}</p>
                                </AlertDialogTitle>
                                <AlertDialogDescription className={`${quicksand.className}`}>
                                    {error}
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="bg-[#CBA836]" onClick={handleCloseModal}>Continuar</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </>
            }
            {isModalConfirmationOpen &&
                <>
                    <AlertDialog open onOpenChange={handleCloseModal}>
                        <AlertDialogContent className="rounded-sm text-[#4F619B]">
                            <AlertDialogHeader>
                                <AlertDialogTitle className={`${quicksand.className} text-2xl font-semibold flex flex-col gap-2`}>
                                    <span className="text-6xl">🥳</span>
                                    <p>Haz confirmado tu asistencia</p>
                                </AlertDialogTitle>
                                <AlertDialogDescription className={`${quicksand.className}`}>
                                    Ya haz confirmado tu asistecia a este maravilloso evento.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction className="bg-[#CBA836]" onClick={handleCloseModal}>Continuar</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </>
            }
        </div>
    )
}

