//** Hooks */
import Image, { StaticImageData } from 'next/image'
//** Assets */}
import separador from '@/assets/images/PamelaCastilloXV/Separator-2-PamelaCastillo.svg'
//** Interfaces or Types*/
interface HeaderInvitationProps {
    title: string;
    image: StaticImageData;
    tipographyTitle: { className: string };
    tipographySubtitle?: { className: string };
    nombreFestejada: string;
    classNameTitle?: string;
    classNameCardTitle?: string;
    classNameSubtitle?: string;
    filterImage?: boolean;
    classNameFilterImage?: string;
}

export default function HeaderInvitation({ 
    title, 
    image, 
    tipographyTitle, 
    nombreFestejada, 
    classNameTitle, 
    classNameCardTitle,
    classNameSubtitle, 
    tipographySubtitle, 
    filterImage = false, 
    classNameFilterImage 
}: HeaderInvitationProps) {
    return (
        <header>
            <div className='relative w-full h-[900px] max-w-[768px] mx-auto flex flex-col justify-center items-center'>
                {filterImage && <div className={`h-full w-full absolute ${classNameFilterImage ? classNameFilterImage : 'bg-black/20'} z-10`}></div>}
                <Image
                    src={image}
                    alt='Mis XV Invitation'
                    fill
                    sizes='(max-width: 768px) 100vw, 768px'
                    className='object-cover'
                    priority
                />
                <div className={`${classNameCardTitle} absolute bottom-10 flex flex-col items-center justify-end mb-24 text-white gap-2 z-20 `}>
                    <div className='flex flex-col items-center'>
                        <span className={`${tipographyTitle.className} ${classNameTitle} text-[60px] leading-none`}>{title}</span>
                        <span className={`${tipographySubtitle?.className} ${classNameSubtitle} text-[16px] font-normal`}>{nombreFestejada}</span>
                    </div>
                </div>
            </div>
            <Image src={separador} alt="separador" loading="lazy"/>
        </header>
    )
}
