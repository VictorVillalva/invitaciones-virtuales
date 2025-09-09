import type { Nombres } from "@/types";

export default function PadresInvitation({nombre1, apellido1, nombre2, apellido2 , classNameNombres, classNameTitle }: Nombres) {
    return (
        <div className="padres text-center flex flex-col gap-6">
            <p className={`${classNameTitle} text-[32px]`}>Mis Padres</p>
            <div className={`${classNameNombres} text-[24px] flex flex-col gap-1`}>
                <p>{nombre1} {apellido1}</p>
                <p className="font-light">&</p>
                <p>{nombre2} {apellido2}</p>
            </div>
        </div>
    )
}
