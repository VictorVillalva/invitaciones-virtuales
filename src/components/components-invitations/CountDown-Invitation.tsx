'use client';
//** Hooks */
import { useCounterDown } from '@/hooks/useCounterdown';
//** Interfaces or Types */
import type { CountdownProps } from '@/types';

export default function CountDownInvitation({ targetDate, classNameTitle, title = "Días restantes para el evento"}: CountdownProps) {
    const { timeLeft } = useCounterDown({ targetDate });
    return (
        <div className='flex flex-col gap-12'>
            <h2 className={`${classNameTitle}`}>{title}</h2>
            <div className="flex flex-row justify-between">
                <div className="days flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-20 w-20 rounded-t-full bg-[linear-gradient(to_bottom,#EFB810_0%,#C4870A_64%,#9C610C_100%)]">
                        <span className="text-white font-bold text-4xl leading-[20px]">{String(timeLeft.days).padStart(2, '0')}</span>
                    </div>
                    <p className="font-bold text-2xl text-[#9C610C]">Dias</p>
                </div>
                <div className="days flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-20 w-20 rounded-t-full bg-[linear-gradient(to_bottom,#EFB810_0%,#C4870A_64%,#9C610C_100%)]">
                        <span className="text-white font-bold text-4xl leading-[20px]">{String(timeLeft.hours).padStart(2, '0')}</span>
                    </div>
                    <p className="font-bold text-2xl text-[#9C610C]">Horas</p>
                </div>
                <div className="days flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-20 w-20 rounded-t-full bg-[linear-gradient(to_bottom,#EFB810_0%,#C4870A_64%,#9C610C_100%)]">
                        <span className="text-white font-bold text-4xl leading-[20px]">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    </div>
                    <p className="font-bold text-2xl text-[#9C610C]">Min.</p>
                </div>
                <div className="days flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-20 w-20 rounded-t-full bg-[linear-gradient(to_bottom,#EFB810_0%,#C4870A_64%,#9C610C_100%)]">
                        <span className="text-white font-bold text-4xl leading-[20px]">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    </div>
                    <p className="font-bold text-2xl text-[#9C610C]">Seg.</p>
                </div>
            </div>
        </div>
    )
}
