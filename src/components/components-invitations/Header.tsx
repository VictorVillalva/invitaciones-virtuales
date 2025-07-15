import Image, { StaticImageData } from 'next/image'
import { inspiration } from '@/assets/fonts/fonts'

interface HeaderProps {
    title: string;
    subtitle: string;
    img: StaticImageData;
    alt: string;
    colortext?: string;
}
export default function Header({ title, subtitle, img, alt, colortext }: HeaderProps) {
    return (
        <header>
            <div className='relative w-full h-[900px] max-w-[768px] mx-auto flex flex-col justify-center items-center'>
                <Image
                    src={img}
                    alt={alt}
                    fill
                    sizes='(max-width: 768px) 100vw, 768px'
                    className='mask-fade-bottom object-cover'
                    priority
                />

                <div className={`absolute bottom-10 flex flex-col items-center justify-end mb-24 gap-2 ${colortext ? colortext : 'text-white'}`}>
                    <div className='flex flex-col items-center'>
                        <span className={`${inspiration.className} text-[60px] leading-none`}>{title}</span>
                        <span className="text-[16px] font-normal">{subtitle}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
