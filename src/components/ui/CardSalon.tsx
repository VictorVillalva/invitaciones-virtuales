
import type { Ubicacion } from '@/types'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"  
import Image from 'next/image';
import Link from "next/link";
import { quicksand } from '@/assets/fonts/fonts';


export default function CardSalon({image,placeName,address,href}:Ubicacion) {
    return (
        <Card className={`${quicksand.className} border-none rounded-md pb-0 pt-0 gap-0`}>
            <CardHeader className="p-0 rounded-t-md space-y-0 w-full">
                <Image src={image} alt={placeName} className="rounded-t-md"/>
            </CardHeader>
            <CardContent className="flex flex-col justify-start items-start p-4 text-left">
                <p className="text-xl font-semibold">{placeName}</p>
                <p>{address}</p>
            </CardContent>
            <CardFooter className="p-4 ">
                <Link  href={href} className="w-full p-2 bg-primary text-[#FFFFFF] rounded text-center font-semibold">Ver ubicación</Link>
            </CardFooter>
        </Card>
    )
}
