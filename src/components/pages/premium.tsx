import Image from 'next/image'
import separador from "@/assets/images/DanielaMedelXV/Separador.png"

import ApartaFecha from "../ui/ApartaFecha";
import Header from "../ui/Header";
import SobreAnimation from "../ui/SobreAnimation";
import TextoInspirador from '../ui/TextoInspirador';


export default function Premium() {
    const COLORTEXT = '#323C5D'
    return (
        <>
            <SobreAnimation>
                <Header />
                <main className="w-full px-4 py-[100px] relative z-10">
                    <div className={`flex flex-col items-center text-[${COLORTEXT}] gap-[120]`}>
                        <section className='ApartaFecha'>
                            <ApartaFecha />
                        </section>
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='TextoInspirador'>
                            <TextoInspirador />
                        </section>
                    </div>
                </main>
            </SobreAnimation>
        </>
    )
}
