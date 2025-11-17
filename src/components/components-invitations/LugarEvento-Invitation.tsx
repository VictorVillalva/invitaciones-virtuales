//** Hooks */}
import { StaticImageData } from 'next/image'
//** Components */
import CardLugarEvento from '@/components/components-invitations/CardLugarEvento-Invitation-1'
import CardLugarEvento2 from '@/components/components-invitations/CardLugarEvento-Invitation-2'
//** Interfaces or Types*/
interface LugareEventoProps {
    title: string;
    classNameTitle?: string;
    titleCard: string;
    classNameTitleCard?: string;
    classNameSubtitle?: string;
    image: StaticImageData;
    location: string;
    classNameButton?: string;
    urlLocation: string;
    variant?: keyof typeof cardVariants;
    haveTime?: boolean;
    time?: string;
}

/** Mapa escalable de variantes */
const cardVariants = {
    v1: CardLugarEvento,
    v2: CardLugarEvento2,
    // v3: ...
};

export default function LugarEventoInvitation({ 
    title = "Lugar del Evento", 
    classNameTitle, 
    titleCard, 
    classNameTitleCard, 
    classNameSubtitle, 
    image, 
    location,
    classNameButton,
    urlLocation = "#",
    variant = "v1",
    haveTime = false,
    time = ""
}: LugareEventoProps) {

    const VarianteLugarEvento = cardVariants[variant] || cardVariants['v1'];

    return (
        <div className="flex flex-col gap-6">
            <h2 className={`${classNameTitle}`}>{title}</h2>
            <VarianteLugarEvento 
                image={image}
                location={location}
                title={titleCard}
                url={urlLocation}
                classNameTitle={classNameTitleCard}
                classNameSubtitle={classNameSubtitle}
                classNameButton={classNameButton}
                haveTime={haveTime}
                time={time}
            />
        </div>
    )
}
