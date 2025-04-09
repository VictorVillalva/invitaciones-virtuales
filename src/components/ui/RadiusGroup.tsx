import { options } from "@/assets/data/DanielaMedel/db";
import type { RadiusGroupProps } from "@/types";

export default function RadiusGroup({ selectedOption, onValueChange }: RadiusGroupProps) {
    return (
        <fieldset className="flex flex-col text-white">
            <legend className="font-medium mb-2">Selecciona las personas que asistirán:</legend>
            <div className="w-full px-4 flex flex-col gap-2">
                {options.map((option) => (
                    <div key={option.value} className="relative flex items-center font-light">
                        <input
                            className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-[#4F619B] checked:bg-[#4F619B]checked:hover:border-white checked:hover:bg-[#FFFFFF] focus:outline-none checked:focus:border-[#323C5D] checked:focus:bg-white focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                            type="radio"
                            value={option.value}
                            id={option.value}
                            name="attendance"
                            onChange={onValueChange}
                            checked={selectedOption === option.value}
                        />
                        <label
                            className="pl-2 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                            htmlFor={option.value}
                        >
                            {option.label}
                        </label>
                        <svg
                            className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-[#323C5D] peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-[#323C5D] peer-focus:fill-[#323C5D] peer-disabled:cursor-not-allowed"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-labelledby={`title-${option.value} description-${option.value}`}
                            role="graphics-symbol"
                        >
                            <title id={`title-${option.value}`}>Circle Shape</title>
                            <desc id={`description-${option.value}`}>
                                Circle shape to indicate whether the radio input is checked or not.
                            </desc>
                            <circle cx="8" cy="8" r="4" />
                        </svg>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}
