import { quicksand } from '@/assets/fonts/fonts'
import etiqueta from '@/assets/images/etiqueta.png'
import Image from 'next/image'

export default function CodigoVestimenta() {
    return (
        <div className="Codigo-vestimenta flex flex-col gap-6" data-aos="fade-up">
            <p className="text-center text-[32px]">Codigo de vestimenta</p>
            <div className={`${quicksand.className} text-center text-xl flex flex-col items-center`}>
                <p>Etiqueta</p>
                <Image src={etiqueta} alt=" " width={200} />
            </div>
        </div> 
    )
}
