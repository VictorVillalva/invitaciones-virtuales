//** Hooks */}
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
//** Assets */
import { ArrowUpRight, MapPin } from 'lucide-react';
//** Interfaces or Types*/
interface CardProps {
    title: string;
    image: StaticImageData;
    location: string;
    url: string;
    classNameTitle?: string;
    classNameSubtitle?: string;
    classNameButton?: string;
}
export default function CardLugarEventoInvitation1({ title = "Lugar del Evento", classNameTitle, location, image, url = "#", classNameButton }: CardProps) {
    return (
        <div className="mx-7 flex flex-col px-2 pt-2 pb-4 bg-white rounded-[12px] gap-3">
            <Image src={image} alt="separador" className='w-full h-[360px] object-cover rounded-t-[12px] rounded-b-[24px]' />
            <div className="datos-lugar flex flex-col gap-6">
                <div className='lugar flex flex-col px-2'>
                    <h3 className={`${classNameTitle} font-bold text-2xl`}>{title}</h3>
                    <div className='flex flex-row items-center gap-1.5 text-neutral-500'>
                        <MapPin size={24} />
                        <p className='font-light leading-[14px]'>{location}</p>
                    </div>
                </div>
                <Link className={`${classNameButton} flex flex-row items-center justify-center gap-1 px-3 py-2`} href={url}>Ubicación <ArrowUpRight size={16}/></Link>
            </div>
        </div>

    )
}
