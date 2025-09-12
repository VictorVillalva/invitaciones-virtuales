
/** Assets */
import { JSX } from "react";

/** Hooks */
interface CardDataProps {
    title: string;
    data: string | number;
    icon?: JSX.Element;
}
export default function CardData({ title, data, icon } : CardDataProps) {
    return (
        <div className="bg-rabe-primary-300 flex flex-col w-full px-3 py-4 rounded text-white shadow-xl">
            <div className='flex flex-row gap-1 items-center'>
                {icon}
                <p className='tracking-[-0.06em] text-neutral-100'>{title}</p>
            </div>
            <span className='font-semibold text-4xl tracking-[-0.08em]'>{data}</span>
        </div>
    );
}