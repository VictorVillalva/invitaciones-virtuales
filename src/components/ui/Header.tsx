import Image from 'next/image'
import { inspiration } from '@/assets/fonts/fonts'
import fotoPrueba from '@/assets/images/DanielaMedelXV/foto-header-DanielaMedel.png'

export default function Header() {
    return (
        <header>
            <div className='relative w-full h-auto flex flex-col items-center pt-12'>
                <Image 
                    src={fotoPrueba}
                    alt='Daniela Medel Quinceañera'
                    className='mask-fade-bottom'
                    priority
                />
                <div className="absolute bottom-10 flex flex-col items-center justify-end mb-24 text-[#323C5D]">
                    <span className={`${inspiration.className} text-[60px] leading-none`}>Mis XV</span>
                    <span className="text-[16px] font-normal">Daniela Medel Muñiz</span>
                </div>
            </div>
        </header>
    )
}
