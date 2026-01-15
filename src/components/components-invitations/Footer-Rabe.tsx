import Whatsapp from "@/assets/icons/Whatsapp";

interface FooterProps {
    className?: string;
}

export default function FooterRabe({ className }: FooterProps) {
  return (
    <footer className={`${className} flex flex-col items-center px-4 py-2 rounded-t-2xl text-[14px] `}>
        <p>¿Te gusto la invitación?</p>
        <div className="info flex flex-row gap-4 font-light ">
            <div className="whatsapp flex flex-row items-center gap-2">
                <Whatsapp width="24" height="24"/>
                <p>961 374 4444</p>
            </div>
            <div className="email flex flex-row items-center">
                <p>✉️ rabe-innovation@gmail.com</p>
            </div>
        </div>
        <p className="font-bold">Derechos Reservados 2025 Rabe Innovation</p>
    </footer>
  )
}
