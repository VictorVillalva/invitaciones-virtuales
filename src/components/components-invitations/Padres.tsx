import { quicksand } from "@/assets/fonts/fonts";
import type { Nombres } from "@/types";

export default function Padres({nombre1, apellido1, nombre2, apellido2}: Nombres) {
    return (
        <div className="padres text-center flex flex-col gap-6">
            <p className="text-[32px]">Mis Padres</p>
            <div className={`${quicksand.className} text-[20px] flex flex-col gap-1`}>
                <p>{nombre1} {apellido1}</p>
                <p className="font-medium">&</p>
                <p>{nombre2} {apellido2}</p>
            </div>
        </div>
    )
}
