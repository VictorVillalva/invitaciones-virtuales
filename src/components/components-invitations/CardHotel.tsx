import type { Hotel } from "@/types";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"  
import Image from 'next/image';
import Link from "next/link";
import { Badge } from "../ui/badge";
import { quicksand } from "@/assets/fonts/fonts";

export default function CardHotel({image, placeName, address, event, salon, date, href}: Hotel) {
    return (
        <Card className={`${quicksand.className} rounded- border-none rounded-md py-0 gap-0`}>
            <CardHeader className="p-0 rounded-t-md space-y-0 w-full">
                <Image src={image} alt="Salon" className="rounded-t-md" />
            </CardHeader>
            <CardContent className="flex flex-col justify-start items-start p-4 text-left gap-6">
                <div>
                    <p className="text-xl font-semibold">{placeName}</p>
                    <p>{address}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-medium text-[#201F1F]">*Incluye un porcentaje de descuentos en su reservación solamente debes dar los siguientes datos:</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <div className="evento flex flex-col gap-1">
                            <p className="text-[10px] font-medium">Evento</p>
                            <Badge className="bg-[#323C5D]">{event}</Badge>
                        </div>
                        <div className="evento flex flex-col gap-1">
                            <p className="text-[10px] font-medium">Salón</p>
                            <Badge className="bg-[#323C5D]">{salon}</Badge>
                        </div>
                        <div className="evento flex flex-col gap-1">
                            <p className="text-[10px] font-medium">Fecha</p>
                            <Badge className="bg-[#323C5D]">{date}</Badge>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 ">
                <Link href={href} className="w-full p-2 bg-[#323C5D] text-[#FFFFFF] rounded text-center font-semibold">Ver ubicación</Link>
            </CardFooter>
        </Card>
    )
}
