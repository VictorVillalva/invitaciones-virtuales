'use client';
//** Hooks */
import { useCounterDown } from '@/hooks/useCounterdown';
//** Interfaces or Types */
import type { CountdownProps } from '@/types';

export default function CountDownInvitation2({ targetDate, classNameTitle, title = "Días restantes para el evento", showTitle=true, classNameContainer, classNameDaysContainer ,classNameText}: CountdownProps) {
    const { timeLeft } = useCounterDown({ targetDate });
    return (
        <div className='flex flex-col gap-12'>
            {showTitle && <h2 className={`${classNameTitle}`}>{title}</h2>}
            <div className="flex flex-row justify-between">
                <div className="days flex flex-col justify-center items-center">
                    <div className={`flex flex-col justify-center items-center h-20 w-20 rounded-full ${classNameContainer}`}>
                        <span className={`text-white font-bold text-4xl leading-[20px] ${classNameDaysContainer}`}>{String(timeLeft.days).padStart(2, '0')}</span>
                    </div>
                    <p className={`font-bold text-2xl ${classNameText}`}>Dias</p>
                </div>
                <div className="days flex flex-col justify-center items-center">
                    <div className={`flex flex-col justify-center items-center h-20 w-20 rounded-full ${classNameContainer}`}>
                        <span className={`text-white font-bold text-4xl leading-[20px] ${classNameDaysContainer}`}>{String(timeLeft.hours).padStart(2, '0')}</span>
                    </div>
                    <p className={`font-bold text-2xl ${classNameText}`}>Horas</p>
                </div>
                <div className="days flex flex-col justify-center items-center">
                    <div className={`flex flex-col justify-center items-center h-20 w-20 rounded-full ${classNameContainer}`}>
                        <span className={`text-white font-bold text-4xl leading-[20px] ${classNameDaysContainer}`}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                    </div>
                    <p className={`font-bold text-2xl ${classNameText}`}>Min.</p>
                </div>
                <div className="days flex flex-col justify-center items-center">
                    <div className={`flex flex-col justify-center items-center h-20 w-20 rounded-full ${classNameContainer}`}>
                        <span className={`text-white font-bold text-4xl leading-[20px] ${classNameDaysContainer}`}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    </div>
                    <p className={`font-bold text-2xl ${classNameText}`}>Seg.</p>
                </div>
            </div>
        </div>
    )
}
