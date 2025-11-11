//** Hooks */
import Image, { StaticImageData } from 'next/image'
//** Assets */}
import separador from '@/assets/images/PamelaCastilloXV/Separator-2-PamelaCastillo.svg'
//** Interfaces or Types*/
interface HeaderInvitationProps {
    title: string;
    image: StaticImageData;
    classNameImage?: string;
    tipographyTitle: { className: string };
    tipographySubtitle?: { className: string };
    nombreFestejada: string;
    classNameTitle?: string;
    classNameCardTitle?: string;
    classNameSubtitle?: string;
    filterImage?: boolean;
    classNameFilterImage?: string;
    classNameHeader?: string;
    separator?: boolean;
    srcSeparator?: StaticImageData;
}
//TODO: Agregar el srcSeparator despues de que termine la invitacion de pamela
export default function HeaderInvitation({ 
    title, 
    image, 
    classNameImage,
    tipographyTitle, 
    nombreFestejada, 
    classNameTitle, 
    classNameCardTitle,
    classNameSubtitle, 
    tipographySubtitle, 
    filterImage = false, 
    classNameFilterImage,
    classNameHeader,
    separator = true,
    srcSeparator,
}: HeaderInvitationProps) {
    return (
        <header>
            <div className={`${classNameHeader ? classNameHeader : 'h-[900px]'} relative w-full max-w-[768px] mx-auto flex flex-col justify-center items-center `}>
                {filterImage && <div className={`h-full w-full absolute ${classNameFilterImage ? classNameFilterImage : 'bg-black/20'} z-10`}></div>}
                <Image
                    src={image}
                    alt='Mis XV Invitation'
                    fill
                    sizes='(max-width: 768px) 100vw, 768px'
                    className={`${classNameImage} object-cover`}
                    priority
                />
                <div className={`${classNameCardTitle ? classNameCardTitle : "bottom-10"} absolute flex flex-col items-center justify-end mb-24 text-white gap-2 z-20 `}>
                    <div className='flex flex-col items-center'>
                        <span className={`${tipographyTitle.className} ${classNameTitle} text-[60px] leading-none`}>{title}</span>
                        <span className={`${tipographySubtitle?.className} ${classNameSubtitle} text-[16px] font-normal`}>{nombreFestejada}</span>
                    </div>
                </div>
            </div>
            {separator && <div className='flex justify-center'><Image src={srcSeparator || separador} alt="separador" loading="lazy"/></div>}
        </header>
    )
}
