'use client'
import { evento } from "@/assets/data/DanielaMedel/db";
import { quicksand } from "@/assets/fonts/fonts";
import { useItinerario } from "@/hooks/useItinerario";
import Image from 'next/image';



export default function Itinerario() {
    const { activeIndex, progressHeight } = useItinerario(); //Declaramos el Hook personalizado
    
    return (
        <div className="Itinerario flex flex-col gap-10" >
            <p className="text-center text-[32px]">Itinerario</p>
            <ul
                aria-label="Activity feed"
                role="feed"
                className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-primary-200 after:absolute after:top-0 after:left-8 after:-translate-x-1/2 after:border-primary-200"
                style={{
                    position: "relative",
                }}
            >
                {/* Línea de progreso */}
                <div
                    className="absolute top-0 left-8 -translate-x-1/2 w-[2px] bg-[#323C5D] transition-all duration-500 ease-in-out"
                    style={{
                        height: `${progressHeight}%`,
                    }}
                ></div>
                {evento.map((momento, index) => (
                    <li
                        key={index}
                        role="article"
                        className={`timeline-item relative pl-8 transition-all duration-500 ease-in-out ${
                            index <= activeIndex ? "text-white" : "text-gray-200"
                        }`}
                    >
                        <div
                            className={`absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full transition-all duration-500 ease-in-out ${
                                index <= activeIndex ? "bg-[#323C5D]" : "bg-gray-400"
                            } ring-2 ring-primary-200`}
                        >
                            <Image
                                src={momento.icon}
                                alt={momento.title}
                                className="cover w-[24px]"
                            />
                        </div>
                        <div className={`${quicksand.className} flex flex-col flex-1 gap-0 text-[#323C5D]`}>
                            <h4 className="text-xl font-semibold">{momento.title}</h4>
                            <p className="text-sm ">{momento.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


