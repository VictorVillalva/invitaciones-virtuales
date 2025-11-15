import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ConfirmacionWhatsappProps {
    title?: string;
    message?: string;
    classNameTitle?: string;
    classNameMessage?: string;
    classNameButton?: string;
    phone: string;
    messageText?: string;
    buttonText?: string;
}

export default function ConfirmacionWhatsapp({
    title = "¡Confirmación de Asistencia!",
    message = "Confirma tu asistencia al evento por medio de Whastapp para saber que podrás estar presente en este momento tan especial.",
    classNameTitle,
    classNameMessage,
    classNameButton,
    phone,
    buttonText = "Confirmar",
    messageText = "¡Hola! Quisiera confirmar mi asistencia al evento.",
}: ConfirmacionWhatsappProps) {
    const encodedMessage = encodeURIComponent(messageText);

    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="description flex flex-col gap-4 text-center">
                <p className={`${classNameTitle} text-[40px]`}>{title}</p>
                <p className={`${classNameMessage} text-2xl`}>{message}</p>
            </div>
            <Link className={`${classNameButton} flex flex-row items-center justify-center gap-1 px-3 py-2`} href={`https://wa.me/${phone}?text=${encodedMessage}`} target="_blank">{buttonText} <ArrowUpRight size={16} /></Link>
        </div>
    )
}
