'use client'
//Assets
import separador from "@/assets/images/DanielaMedelXV/Separador.png"
import LogoDanielMedel from "@/assets/images/DanielaMedelXV/Logo_DanielMedel.jpg"
//Data
import { Bancos, nombrePadresPadrinos } from '@/assets/data/DanielaMedel/db'
//Fonts
import { inspiration, playwrite } from '@/assets/fonts/fonts'
//Components
import Image from 'next/image'
import Header from '../components-invitations/Header'
import SobreAnimation from '../components-invitations/SobreAnimation'
import ApartaFecha from '../components-invitations/ApartaFecha'
import TextoInspirador from '../components-invitations/TextoInspirador'
import Itinerario from '../components-invitations/Itinerario'
import CodigoVestimenta from '../components-invitations/CodigoVestimenta'
import Padres from '../components-invitations/Padres'
import Padrinos from '../components-invitations/Padrinos'
import LluviaSobres from '../components-invitations/LluviaSobres'
import Ubicacion from '../components-invitations/Ubicacion'
import Hoteles from '../components-invitations/Hoteles'
import BackgroundMusic from '../components-invitations/BackgroundMusic'
import Footer from '../components-invitations/Footer'
import Asistencia from '../components-invitations/Asistencia'
import Playlist from "../components-invitations/Playlist"
import GaleriaFotos from "../components-invitations/GaleriaFotos"

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
                                tarjeta={false}
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
                        <div className="footer flex flex-col justify-center items-center gap-6" >
                            <div className="relative">
                                <Image src={LogoDanielMedel} alt="Logo" width={60}/>  
                            </div>
                            <div className="flex flex-col">
                                <p className={`${inspiration.className} text-[96px] text-center leading-none`}>Mis XV</p>
                                <div className={`${playwrite.className} text-[20px] text-center`}>
                                    <p>Daniela Medel</p>
                                    <p className="font-light text-[10px]">09.09.2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
                {/* <BackgroundMusic audioSrc={'/audio/TheGreatestShowmanCast-AMillionDreams.mp3'}/> */}
            </SobreAnimation>
        </>
    )
}
