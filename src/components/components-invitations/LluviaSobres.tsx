import type { Sobre } from '@/types'
import sobre from '@/assets/images/sobre.png'
import Image from 'next/image'
import { quicksand } from '@/assets/fonts/fonts'

export default function LluviaSobres({numero, nombre, banco, tarjeta=true}: Sobre) {
    return (
        <div className="lluvia-sobres flex flex-col items-center text-center gap-4" >
            <Image src={sobre} alt="sobre" width={180} />
            <p className="text-[32px]">Lluvia de sobres</p>
            { tarjeta && (
                <div className={`${quicksand.className} banco `}>
                    <p>{nombre}</p>
                    <p>{banco}</p>
                    <p>{numero}</p>
                </div>
            )}
        </div>
    )
}
