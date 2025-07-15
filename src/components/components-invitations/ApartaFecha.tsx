import { quicksand } from '@/assets/fonts/fonts'

export default function ApartaFecha() {
    return (
        <div className="aparta-fecha flex flex-col text-2xl text-center gap-3" >
            <p className={`${quicksand.className} font-light`}>Aparta la fecha</p>
            <p>6 de Septiembre del 2025</p>
        </div>
    )
}
