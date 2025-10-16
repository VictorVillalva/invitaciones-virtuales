import Image, { StaticImageData } from 'next/image'

interface Props{
    classNameTitle?: string
    clawssNameDescription?: string
    image: StaticImageData
}

export default function CodigoVestimenta({image, classNameTitle, clawssNameDescription}:Props) {
    return (
        <div className="Codigo-vestimenta flex flex-col justify-center items-center gap-6" >
            <p className={`${classNameTitle} text-center text-[40px]`}>Codigo de vestimenta</p>
            <div className={`${clawssNameDescription} text-center text-xl flex flex-col items-center`}>
                <p>Formal</p>
                <Image src={image} alt=" " width={200} />
            </div>
        </div> 
    )
}
