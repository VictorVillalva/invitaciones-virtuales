import type { MensajeProps } from "@/types";

export default function Mensaje({persona, message, onMessageChange}:MensajeProps) {
    return (
        <>
        <div className="relative flex flex-col gap-2">
            <p className="font-medium">Escribe alguna dedicatoria para {persona}:</p>   
            <textarea
            id="id-01"
            name="id-01"
            placeholder="Escribe tu mensaje..."
            rows={4}
            className="peer relative w-full rounded border bg-white border-slate-200 px-2 py-2 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#323C5D] focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            value={message}
            onChange={onMessageChange}
            ></textarea>
        </div>
        </>
    )
}