import { quicksand } from "@/assets/fonts/fonts";
import { useConfirmacion } from "@/hooks/useConfirmacion";
import RadiusGroup from "../ui/RadiusGroup";
import Mensaje from "./Mensaje";
import CountDown from "../ui/CountDown";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function Confirmacion() {
    const {
        selectedOption,
        message,
        error,
        isModalOpen,
        isModalConfirmationOpen,
        isSubmitted,
        handleValueChange,
        handleMessageChange,
        handleSubmit,
        handleCloseModal,
    } = useConfirmacion();

    const fechaEvento = new Date('2025-12-31T00:00:00');

    return (
        <div className={`${quicksand.className} px-4 py-6 bg-[#4F619B] rounded-sm border-[#A5A3A3] flex flex-col gap-6 text-white`}>
            {isSubmitted ? (
                <>
                    <div className="confirmacion flex flex-col gap-6 transition-transform duration-500 ease-in-out transform translate-y-0">
                        <p className="text-[24px] font-bold text-center leading-tight">¡Haz confirmado tu presencia para celebrar junto con Dani 🥳!</p>
                        <div className="flex flex-col items-center text-center gap-2">
                            <p>¡Cuenta regresiva!</p>
                            <CountDown targetDate={fechaEvento}/>
                        </div>
                    </div>
                </>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 transition-transform duration-500 ease-in-out transform translate-y-0">
                    <p className="text-center font-bold text-xl">Completa la confirmación de asistencia</p>
                    <div className="flex flex-col gap-6">
                        <RadiusGroup selectedOption={selectedOption} onValueChange={handleValueChange} />
                        {error && <p className="text-white text-sm font-semibold">{error}</p>}
                        <Mensaje persona='Daniel Medel' message={message} onMessageChange={handleMessageChange} />
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
                                    <p>Olvidaste confirmar</p>
                                </AlertDialogTitle>
                                <AlertDialogDescription className={`${quicksand.className}`}>
                                    Recuerda que debes seleccionar el número de personas que asistirán al evento
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
