'use client'
//Assets
import separador from "@/assets/images/DanielaMedelXV/Separador.png"
import LogoDanielMedel from "@/assets/images/DanielaMedelXV/Logo_DanielMedel.jpg"
//Data
import { nombrePadresPadrinos } from '@/assets/data/DanielaMedel/db'
//Fonts
import { inspiration, playwrite, quicksand } from '@/assets/fonts/fonts'
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
import Playlist from "../components-invitations/Playlist"
import GaleriaFotos from "../components-invitations/GaleriaFotos"
import CountDown from "../components-invitations/CountDown"
import Link from "next/link"
import { ParamValue } from "next/dist/server/request/params"

interface PremiumProps {
    code: ParamValue;
}

export default function Premium({ code }: PremiumProps) {
    const COLORTEXT = '#323C5D'
    const fechaEvento = new Date('2025-08-10T00:00:00');

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
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='Playlist'>
                            <Playlist />
                        </section>
                        <div className="separador flex" data-aos="fade-up">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className="confirmacionAsistencia">
                            <div className="asistencia flex flex-col gap-10" data-aos="fade-up">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[32px] text-center">Confirmación de asistencia</p>
                                    <small className={`${quicksand.className} text-center`}>Esta es la fecha límite para confirmar tu asistencia al evento</small>
                                </div>
                                <CountDown targetDate={fechaEvento} />
                                <div className="flex flex-col gap-4">
                                    <small className={`${quicksand.className} text-center`}>Da click en el boton para confirmar tu asistencia al evento</small>
                                    <Link
                                        href={`/misXV/daniela-medel/confirmacion/${code}`}
                                        className={`${quicksand.className} w-full py-2 bg-[#CBA836] text-white rounded hover:bg-[#d9b12d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#927823] font-semibold text-center`}>
                                        Confirmar asistencia
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <div className="footer flex flex-col justify-center items-center gap-6" >
                            <div className="relative">
                                <Image src={LogoDanielMedel} alt="Logo" width={60} />
                            </div>
                            <div className="flex flex-col">
                                <p className={`${inspiration.className} text-[96px] text-center leading-none`}>Mis XV</p>
                                <div className={`${playwrite.className} text-[20px] text-center`}>
                                    <p>Daniela Medel</p>
                                    <p className="font-light text-[10px]">06.09.2025</p>
                                </div>
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
