import Image from 'next/image'
import { inspiration } from '@/assets/fonts/fonts'
import fotoPrueba from '@/assets/images/DanielaMedelXV/Foto-Header-Example.png'

export default function Header() {
    return (
        <header>
            <div className='relative w-full h-auto flex flex-col items-center'>
                <Image 
                    src={fotoPrueba}
                    alt='Daniela Medel Quinceañera'
                    className='mask-fade-bottom'
                />
                <div className="absolute bottom-10 flex flex-col items-center justify-end mb-20 text-white">
                    <span className={`${inspiration.className} text-[96px] leading-none`}>Mis XV</span>
                    <span className="text-[20px] font-normal">Daniela Medel Muñiz</span>
                </div>
            </div>
        </header>
    )
}
