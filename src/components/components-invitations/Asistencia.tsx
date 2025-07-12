import Confirmacion from "./Confirmacion";
import Invitacion from "./Invitacion";

export default function Asistencia() {
    return (
        <div className="asistencia flex flex-col gap-10" data-aos="fade-up">
            <p className="text-[32px] text-center">Confirmación de asistencia</p>
            <Invitacion 
                numPersonas={3}
                familia="Muñiz"
                adultos={2}
                ninos={1}
            />
            <Confirmacion />
        </div>
    )
}
