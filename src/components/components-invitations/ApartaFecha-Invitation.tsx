/** Interfaces or Types */
interface ApartaFechaInvitationProps {
    title?: string;
    date: string;
    classNameTitle?: string
    classNameText?: string
}

export default function ApartaFechaInvitation({classNameTitle, classNameText, title = "Aparta la fecha", date }: ApartaFechaInvitationProps) {
    return (
        <div className="aparta-fecha flex flex-col text-2xl text-center gap-3" >
            <p className={`${classNameTitle} text-center text-2xl font-light`}>{title}</p>
            <p className={`${classNameText}`}>{date}</p>
        </div>
    )
}
