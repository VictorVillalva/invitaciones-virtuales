import Image from 'next/image'
import separador from "@/assets/images/DanielaMedelXV/Separador.png"

import ApartaFecha from "../ui/ApartaFecha";
import Header from "../ui/Header";
import SobreAnimation from "../ui/SobreAnimation";
import TextoInspirador from '../ui/TextoInspirador';
import GaleriaFotos from '../ui/GaleriaFotos';
import Itinerario from '../ui/Itinerario';
import CodigoVestimenta from '../ui/CodigoVestimenta';
import Padres from '../ui/Padres';
import Padrinos from '../ui/Padrinos';
import LluviaSobres from '../ui/LluviaSobres';
import Ubicacion from '../ui/Ubicacion';
import Hoteles from '../ui/Hoteles';


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
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='GaleriaFotos'> 
                            <GaleriaFotos />
                        </section>
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='Itinerario'>
                            <Itinerario />
                        </section>
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='CodigoVestimenta'>
                            <CodigoVestimenta />
                        </section>
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='Padres-Padrinos'>
                            <div className="padres-padrinos flex flex-col gap-10" data-aos="fade-up">
                                <Padres 
                                    nombre1='Pablo'
                                    apellido1='Medel Román'
                                    nombre2='Yazmin'
                                    apellido2='Muñiz Lopez'
                                />
                                <Padrinos 
                                    nombre1='Omar'
                                    apellido1='Medel Román'
                                    nombre2='Maria Teresa'
                                    apellido2='Medel Román'
                                />
                            </div>
                        </section>
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='LluviaDeSobres'>
                            <LluviaSobres 
                                numero='xxxx xxxx xxxx xxxx'
                                nombre='Nombre'
                                banco='Banco'
                            />
                        </section>
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className="UbicacionEvento">
                            <Ubicacion />
                        </section>
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='SugerenciaHospedaje'>
                            <Hoteles />
                        </section>
                    </div>
                </main>
            </SobreAnimation>
        </>
    )
}
