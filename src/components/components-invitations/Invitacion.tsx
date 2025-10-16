import bgImage from "@/assets/images/DanielaMedelXV/bg-blue-flowers.jpg"
import Image from 'next/image'
import flowerLeft from "@/assets/images/DanielaMedelXV/bg-pase.png"
import flowerRight from "@/assets/images/DanielaMedelXV/bg-pase.png"
import { inspiration, playwrite, quicksand } from "@/assets/fonts/fonts"
import type { InvitacionProps } from "@/types"

export default function Invitacion({ numPersonas, familia }: InvitacionProps) {
    let familyText = ""

    if (Number(numPersonas) > 1) {
        familyText = `${familia} y familia`
    }else{
        familyText = `${familia}`
    }
    
    return (
        <div className={`${quicksand.className} w-full bg-[#4F619B] relative px-4 py-6 text-white flex flex-col gap-16 rounded-[4px]`}>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 rounded-[4px] pointer-events-none"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            />
            {/* <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${bgImage.src})` }}></div> */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col text-center">
                    <p className={`${inspiration.className} text-[40px]`}>Mis XV</p>
                    <p>Daniela Medel Muñiz</p>
                </div>
                <div className="numero-personas flex flex-col gap-4 text-center">
                    <p className={`${playwrite.className} text-[32px]`}>{familyText}</p>
                    <p className="font-semibold">Pase para {numPersonas} personas</p>
                </div>
            </div>
            {/* <hr className="bg-[#DFDFDF]"/> */}
            <div className="flex flex-col gap-10">
                {/* <div className="nombres flex flex-col text-center font-bold">
                    {adultos > 0 &&
                        <p>{adultos} Adultos</p>
                    }
                    {ninos > 0 && 
                    <p>{ninos} Niños</p>
                    }
                </div> */}
                <p className="text-center font-bold text-xs">*Pase único e intransferible</p>
            </div>
            <Image src={flowerLeft} alt="Flor" width={144} className="absolute bottom-0 left-0 w-[114px]"/>
            <Image src={flowerRight} alt="Flor" className="absolute bottom-0 right-0 w-[114px] transform scale-x-[-1]"/>
        </div>
    )
}
