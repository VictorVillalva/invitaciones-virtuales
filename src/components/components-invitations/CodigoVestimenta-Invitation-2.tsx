import Image, { StaticImageData } from 'next/image'

interface Props{
    classNameTitle?: string
    classNameDescription?: string
    title?: string;
    description?: string;
    image: StaticImageData
}

export default function CodigoVestimenta({image, classNameTitle, classNameDescription, title="Codigo de Vestimenta", description="Formal"}:Props) {
    return (
        <div className="Codigo-vestimenta flex flex-col justify-center items-center gap-6" >
            <div className={`${classNameDescription} text-center text-xl flex flex-col items-center`}>
                <Image src={image} alt=" " width={200} />
            </div>
            <p className={`${classNameTitle} text-center text-[40px]`}>{title}</p>
            <p className={`${classNameDescription} text-center text-2xl`}>{description}</p>
        </div> 
    )
}
