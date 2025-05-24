'use client'
import Image from 'next/image'
import separador from "@/assets/images/DanielaMedelXV/Separador.png"

import ApartaFecha from "../ui/ApartaFecha";
import Header from "../ui/Header";
import SobreAnimation from "../ui/SobreAnimation";
import TextoInspirador from '../ui/TextoInspirador';
// import GaleriaFotos from '../ui/GaleriaFotos';
import Itinerario from '../ui/Itinerario';
import CodigoVestimenta from '../ui/CodigoVestimenta';
import Padres from '../ui/Padres';
import Padrinos from '../ui/Padrinos';
import LluviaSobres from '../ui/LluviaSobres';
import Ubicacion from '../ui/Ubicacion';
import Hoteles from '../ui/Hoteles';
import Playlist from '../ui/Playlist';
import Asistencia from '../ui/Asistencia';
import Footer from '../ui/Footer';
import { inspiration, playwrite } from '@/assets/fonts/fonts';
import { Bancos, nombrePadresPadrinos } from '@/assets/data/DanielaMedel/db';
import BackgroundMusic from '../ui/BackgroundMusic';

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
                        {/* <section className='GaleriaFotos'> 
                            <GaleriaFotos />
                        </section> */}
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
                                    nombre1={nombrePadresPadrinos[0].nombre}
                                    apellido1={nombrePadresPadrinos[0].apellido}
                                    nombre2={nombrePadresPadrinos[1].nombre}
                                    apellido2={nombrePadresPadrinos[1].apellido}
                                />
                                <Padrinos 
                                    nombre1={nombrePadresPadrinos[2].nombre}
                                    apellido1={nombrePadresPadrinos[2].apellido}
                                    nombre2={nombrePadresPadrinos[3].nombre}
                                    apellido2={nombrePadresPadrinos[3].apellido}
                                />
                            </div>
                        </section>
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='LluviaDeSobres'>
                            <LluviaSobres 
                                numero={Bancos[0].numero}
                                nombre={Bancos[0].titular}
                                banco={Bancos[0].banco}
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
                        {/* <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='Playlist'>
                            <Playlist />
                        </section> */}
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className="confirmacionAsistencia">
                            <Asistencia />
                        </section>
                        <div className="footer flex flex-col" >
                            <p className={`${inspiration.className} text-[96px] text-center leading-none`}>Mis XV</p>
                            <div className={`${playwrite.className} text-[20px] text-center`}>
                                <p>Daniela Medel</p>
                                <p className="font-light text-[10px]">09.09.2025</p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
                <BackgroundMusic audioSrc={'/audio/TheGreatestShowmanCast-AMillionDreams.mp3'}/>
            </SobreAnimation>
        </>
    )
}
