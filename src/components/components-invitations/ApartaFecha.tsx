import { quicksand } from '@/assets/fonts/fonts'

interface ApartaFechaProps {
    fecha: string;
}

export default function ApartaFecha({ fecha }: ApartaFechaProps) {
    return (
        <div className="aparta-fecha flex flex-col text-2xl text-center gap-3" >
            <p className={`${quicksand.className} font-light`}>Aparta la fecha</p>
            <p>{fecha}</p>
        </div>
    )
}
