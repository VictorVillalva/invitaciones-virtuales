import Image from 'next/image'
import { inspiration } from '@/assets/fonts/fonts'
import DanielaMedel from '@/assets/images/DanielaMedelXV/VIL_0316.webp'
export default function Header() {
    return (
        <header>
            <div className='relative w-full h-[900px] max-w-[768px] mx-auto flex flex-col justify-center items-center'>
                <Image
                    src={DanielaMedel}
                    alt='Daniela Medel Quinceañera'
                    fill
                    sizes='(max-width: 768px) 100vw, 768px'
                    className='mask-fade-bottom object-cover'
                    priority
                />

                <div className="absolute bottom-10 flex flex-col items-center justify-end mb-24 text-white gap-2">
                    {/* <Image 
                        src={LogoDanielaMedel}
                        alt=' '
                        width={40}
                        className="filter invert brightness-0 contrast-200"
                    /> */}
                    <div className='flex flex-col items-center'>
                        <span className={`${inspiration.className} text-[60px] leading-none`}>Mis XV</span>
                        <span className="text-[16px] font-normal">Daniela Medel Muñiz</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
