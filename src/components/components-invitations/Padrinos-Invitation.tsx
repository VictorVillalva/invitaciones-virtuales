import type { Nombres } from "@/types";
interface PadrinosInvitationProps extends Nombres {
    title?: string;
}

export default function PadrinosInvitation({title = "Mis Padrinos",nombre1, apellido1, nombre2, apellido2 , classNameNombres, classNameTitle }: PadrinosInvitationProps) {
    return (
        <div className="padres text-center flex flex-col gap-6">
            <p className={`${classNameTitle} text-[32px]`}>{title}</p>
            <div className={`${classNameNombres} text-[24px] flex flex-col gap-1`}>
                <p>{nombre1} {apellido1}</p>
                <p className="font-light">&</p>
                <p>{nombre2} {apellido2}</p>
            </div>
        </div>
    )
}
