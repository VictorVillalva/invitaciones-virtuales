//** Hooks */}
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
//** Assets */
import { ArrowUpRight, MapPin, Clock3 } from 'lucide-react';
//** Interfaces or Types*/
interface CardProps {
    title: string;
    image: StaticImageData;
    location: string;
    haveTime?: boolean;
    time?: string;
    url: string;
    classNameTitle?: string;
    classNameSubtitle?: string;
    classNameButton?: string;
}
export default function CardLugarEventoInvitation2({ title = "Lugar del Evento", classNameTitle, location, image, url = "#", classNameButton, haveTime = false, time = "09 de Enero - 15:30 p.m.", classNameSubtitle}: CardProps) {
    return (
        <div className="mx-7 flex flex-col px-2 pt-2 pb-4 bg-white rounded-[12px] gap-3">
            <Image src={image} alt="separador" className='w-full h-[360px] object-cover rounded-t-[12px] rounded-b-[24px]' loading="lazy" />
            <div className="datos-lugar flex flex-col gap-6">
                <div className='lugar flex flex-col px-2 gap-4'>
                    <h3 className={`${classNameTitle} font-bold text-2xl`}>{title}</h3>
                    <div className={`${classNameSubtitle} flex flex-row items-start gap-1.5 text-neutral-500`}>
                        <div>
                            <MapPin size={16} />
                        </div>
                        <p className='font-light leading-[14px]'>{location}</p>
                    </div>
                    {haveTime && (
                        <div className={`${classNameSubtitle} flex flex-row items-start gap-1.5 text-neutral-500`}>
                            <div>
                                <Clock3 size={16} />
                            </div>
                            <p className='font-light leading-[14px]'>{time}</p>
                        </div>
                    )}
                </div>
                <Link className={`${classNameButton} flex flex-row items-center justify-center gap-1 px-3 py-2`} href={url}>Ubicación <ArrowUpRight size={16} /></Link>
            </div>
        </div>
    )
}
