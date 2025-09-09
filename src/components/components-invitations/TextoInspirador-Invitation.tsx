/** Interfaces or Types */
interface TextoInspiradorProps {
    title: string;
    classNameText?: string
}

export default function TextoInspirador({title = "Texto Inspirador", classNameText}: TextoInspiradorProps) {
    return (
        <div className="texto-inspirador">
            <p className={`${classNameText} text-center`}>{title}</p>
        </div>
    )
}
