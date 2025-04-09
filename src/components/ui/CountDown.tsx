import { useCounterDown } from '@/hooks/useCounterdown';
import type { CountdownProps } from '@/types';

export default function CountDown({ targetDate }:CountdownProps) {
    const {timeLeft} = useCounterDown({targetDate});

    return (
        <div className="flex items-center justify-center w-full gap-1.5 count-down-main">
            <div className="timer">
                <div className="rounded-xl bg-gradient-to-b from-[#c09a1e] to-[#CBA836] py-3 min-w-[80px] flex items-center justify-center flex-col gap-1 aspect-square px-3">
                    <h3 className="countdown-element days font-manrope font-semibold text-2xl text-white text-center">
                        {String(timeLeft.days).padStart(2, '0')}
                    </h3>
                    <p className="text-sm font-manrope font-normal text-white mt-1 text-center w-full">Dias</p>
                </div>
            </div>
            <h3 className="font-manrope font-semibold text-2xl text-white">:</h3>
            <div className="timer">
                <div className="rounded-xl bg-gradient-to-b from-[#c09a1e] to-[#CBA836] py-3 min-w-[80px] flex items-center justify-center flex-col gap-1 aspect-square px-3">
                    <h3 className="countdown-element hours font-manrope font-semibold text-2xl text-white text-center">
                        {String(timeLeft.hours).padStart(2, '0')}
                    </h3>
                    <p className="text-sm font-manrope font-normal text-white mt-1 text-center w-full">Horas</p>
                </div>
            </div>
            <h3 className="font-manrope font-semibold text-2xl text-white">:</h3>
            <div className="timer">
                <div className="rounded-xl bg-gradient-to-b from-[#c09a1e] to-[#CBA836] py-3 min-w-[80px] flex items-center justify-center flex-col gap-1 aspect-square px-3">
                    <h3 className="countdown-element minutes font-manrope font-semibold text-2xl text-white text-center">
                        {String(timeLeft.minutes).padStart(2, '0')}
                    </h3>
                    <p className="text-sm font-manrope font-normal text-white mt-1 text-center w-full">Minutos</p>
                </div>
            </div>
            <h3 className="font-manrope font-semibold text-2xl text-white">:</h3>
            <div className="timer">
                <div className="rounded-xl bg-gradient-to-b from-[#c09a1e] to-[#CBA836] py-3 min-w-[80px] flex items-center justify-center flex-col gap-1 aspect-square px-3">
                    <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-white text-center">
                        {String(timeLeft.seconds).padStart(2, '0')}
                    </h3>
                    <p className="text-sm font-manrope font-normal text-white mt-1 text-center w-full">Segundos</p>
                </div>
            </div>
        </div>
    )
}
