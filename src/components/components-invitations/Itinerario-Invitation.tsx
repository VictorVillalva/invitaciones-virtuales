"use client";
//** Hooks */
import Image, { StaticImageData } from "next/image";
import { useItinerario } from "@/hooks/useItinerario";
//** Interfaces or Types */
interface Evento {
  title: string;
  time: string;
  icon: StaticImageData;
}
interface ItinerarioProps {
  title?: string;
  classNameTitle?: string;
  classNameItem?: string;
  classNameDescription?: string;
  colorLine?: string;
  colorItems?: string;
  colorText?: string;
  data: Evento[];
}

export default function ItinerarioInvitation({
  title = "Itinerario",
  classNameTitle,
  colorLine,
  colorItems,
  colorText,
  classNameItem,
  classNameDescription,
  data,
}: ItinerarioProps) {
  const { activeIndex, progressHeight } = useItinerario(); //Declaramos el Hook personalizado

  return (
    <div className="Itinerario flex flex-col gap-10">
      <p className={`${classNameTitle} text-center text-[32px]`}>{title}</p>
      <div className="w-full flex flex-col items-center ">
        <ul
          aria-label="Activity feed"
          role="feed"
          className={`${colorLine ? colorLine : 'before:border-primary-200'} relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed  after:absolute after:top-0 after:left-8 after:-translate-x-1/2 after:border-primary-200`}
          style={{
            position: "relative",
          }}
        >
          {/* Línea de progreso */}
          <div
            className={`${colorItems ? colorItems : 'bg-[#323C5D]'} absolute top-0 left-8 -translate-x-1/2 w-[2px]  transition-all duration-500 ease-in-out`}
            style={{
              height: `${progressHeight}%`,
            }}
          ></div>
          {data.map((momento, index) => (
            <li
              key={index}
              role="article"
              className={`timeline-item relative pl-8 transition-all duration-500 ease-in-out ${
                index <= activeIndex ? "text-white" : "text-gray-200"
              }`}
            >
              <div
                className={`absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full transition-all duration-500 ease-in-out ${
                  index <= activeIndex ? `${colorItems ? colorItems : 'bg-[#323C5D]'}` : "bg-gray-400"
                } ring-2 ring-primary-200`}
              >
                <Image
                  src={momento.icon}
                  alt={momento.title}
                  className="cover w-[24px]"
                />
              </div>
              <div className={`flex flex-col flex-1 gap-0 ${colorText ? colorText : 'text-[#323C5D]'}`}>
                <h4 className={`text-3xl font-semibold ${classNameItem}`}>{momento.title}</h4>
                <p className={`text-sm ${classNameDescription}`}>{momento.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
