//** Hooks */
import Image, { StaticImageData } from 'next/image'

//** Interfaces or Types*/
interface HeaderInvitationProps {
    title: string;
    image: StaticImageData;
    tipographyTitle: { className: string };
    nombreFestejada: string;
    classNameTitle?: string;
    classNameSubtitle?: string;
}

export default function HeaderInvitation({title, image, tipographyTitle, nombreFestejada, classNameTitle, classNameSubtitle}: HeaderInvitationProps) {
    return (
        <header>
            <div className='relative w-full h-[900px] max-w-[768px] mx-auto flex flex-col justify-center items-center'>
                <Image
                    src={image}
                    alt='Mis XV Invitation'
                    fill
                    sizes='(max-width: 768px) 100vw, 768px'
                    className='mask-fade-bottom object-cover'
                    priority
                />
                <div className="absolute bottom-10 flex flex-col items-center justify-end mb-24 text-white gap-2">
                    <div className='flex flex-col items-center'>
                        <span className={`${tipographyTitle.className} ${classNameTitle} text-[60px] leading-none`}>{title}</span>
                        <span className={`${classNameSubtitle} text-[16px] font-normal`}>{nombreFestejada}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
