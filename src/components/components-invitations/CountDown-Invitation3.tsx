'use client';
//** Hooks */
import { useCounterDown } from '@/hooks/useCounterdown';
//** Interfaces or Types */
import type { CountdownProps } from '@/types';

export default function CountDownInvitation2({ targetDate, classNameTitle, title = "Días restantes para el evento", showTitle = true, classNameContainer, classNameDaysContainer, classNameText }: CountdownProps) {
    const { timeLeft } = useCounterDown({ targetDate });
    return (
        <div className='flex flex-col gap-12'>
            {showTitle && <h2 className={`${classNameTitle}`}>{title}</h2>}
            <div className="flex flex-row justify-between items-center">
                <div className="days flex flex-col justify-center items-center gap-2">
                    <div className={`flex flex-col justify-center items-center  ${classNameContainer}`}>
                        <span className={`text-white text-4xl leading-[20px] ${classNameDaysContainer}`}>{String(timeLeft.days).padStart(2, '0')}</span>
                    </div>
                    <p className={`${classNameText}`}>Dias</p>
                </div>
                <p className={`${classNameText}`}>:</p>

                <div className="days flex flex-col justify-center items-center gap-2">
                    <div className={`flex flex-col justify-center items-center rounded-full ${classNameContainer}`}>
                        <span className={`text-white text-4xl leading-[20px] ${classNameDaysContainer}`}>{String(timeLeft.hours).padStart(2, '0')}</span>
                    </div>
                    <p className={`${classNameText}`}>Horas</p>
                </div>
                <p className={`${classNameText}`}>:</p>

                <div className="days flex flex-col justify-center items-center gap-2">
                    <div className={`flex flex-col justify-center items-center rounded-full ${classNameContainer}`}>
                        <span className={`text-white text-4xl leading-[20px] ${classNameDaysContainer}`}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                    </div>
                    <p className={`${classNameText}`}>Minutos</p>
                </div>
                <p className={`${classNameText}`}>:</p>

                <div className="days flex flex-col justify-center items-center gap-2">
                    <div className={`flex flex-col justify-center items-center rounded-full ${classNameContainer}`}>
                        <span className={`text-white text-4xl leading-[20px] ${classNameDaysContainer}`}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    </div>
                    <p className={`${classNameText}`}>Segundos</p>
                </div>
            </div>
        </div>
    )
}
