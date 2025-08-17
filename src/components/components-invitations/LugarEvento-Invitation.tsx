//** Hooks */}
import { StaticImageData } from 'next/image'
//** Components */
import CardLugarEvento from '@/components/components-invitations/CardLugarEvento-Invitation-1'
//** Interfaces or Types*/
interface LugareEventoProps {
    title: string;
    classNameTitle?: string;
    titleCard: string;
    classNameTitleCard?: string;
    image: StaticImageData;
    location: string;
    classNameButton?: string;
    urlLocation: string;
}
export default function LugarEventoInvitation({ 
    title = "Lugar del Evento", 
    classNameTitle, 
    titleCard, 
    classNameTitleCard, 
    image, 
    location,
    classNameButton,
    urlLocation = "#"
}: LugareEventoProps) {

    return (
        <div className="flex flex-col gap-6">
            <h2 className={`${classNameTitle}`}>{title}</h2>
            <CardLugarEvento
                image={image}
                location={location}
                title={titleCard}
                url={urlLocation}
                classNameTitle={classNameTitleCard}
                classNameButton={classNameButton}
            />
        </div>
    )
}
