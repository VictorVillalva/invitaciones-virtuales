import { playwrite, quicksand } from "@/assets/fonts/fonts";

export default function Footer() {
    return (
        <footer className={`${quicksand.className} flex flex-col items-center gap-[6px] p-4 bg-[#323C5D] text-white rounded-t-[16px]`}>
            <span className={`${playwrite.className} text-xs`}>¿Te gusto la invitacion?</span>
            <div className="number-email w-full flex flex-row justify-center gap-4 text-[13px] font-medium">
                <p>📞 961 374 4444</p>
                <p>✉️ venturinaaylin@gmail.com</p>
            </div>
            <span className="text-xs font-bold">Derecho Reservados 2024</span>
        </footer>
    )
}
