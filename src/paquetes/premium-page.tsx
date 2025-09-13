'use client'
//Assets
import separador from "@/assets/images/DanielaMedelXV/Separador.png"
import LogoDanielMedel from "@/assets/images/DanielaMedelXV/Logo_DanielMedel.jpg"
import Iglesia from '@/assets/images/DanielaMedelXV/ParroquiaSanAndresApostol.jpg'
import SalonLuzcina from '@/assets/images/DanielaMedelXV/SalonLuzcina.jpg'
import premium1 from '@/assets/images/Paquetes/premium-1.jpg'
//Data
import { nombrePadresPadrinos } from '@/assets/data/DanielaMedel/db'
import { ImagesCarrusel } from '@/assets/data/db-paquetes';
//Fonts
import { inspiration, playwrite, quicksand } from '@/assets/fonts/fonts'
//Components
import Image from 'next/image'

import Link from "next/link"
import { ParamValue } from "next/dist/server/request/params"
import SobreAnimation from "@/components/components-invitations/SobreAnimation"
import Header from "@/components/components-invitations/Header"
import ApartaFecha from "@/components/components-invitations/ApartaFecha"
import TextoInspirador from "@/components/components-invitations/TextoInspirador"
import Padres from "@/components/components-invitations/Padres"
import Padrinos from "@/components/components-invitations/Padrinos"
import GaleriaFotos from "@/components/components-invitations/GaleriaFotos"
import Itinerario from "@/components/components-invitations/Itinerario"
import CodigoVestimenta from "@/components/components-invitations/CodigoVestimenta"
import LluviaSobres from "@/components/components-invitations/LluviaSobres"
import Ubicacion from "@/components/components-invitations/Ubicacion"
import Hoteles from "@/components/components-invitations/Hoteles"
import Playlist from "@/components/components-invitations/Playlist"
import CountDown from "@/components/components-invitations/CountDown"
import Footer from "@/components/components-invitations/Footer"
import BackgroundMusic from "@/components/components-invitations/BackgroundMusic"

interface PremiumProps {
    code: ParamValue;
}

export default function Premium({ code }: PremiumProps) {
    const COLORTEXT = '#323C5D'
    const fechaEvento = new Date('2025-08-10T00:00:00');

    return (
        <>
            <SobreAnimation>
                <Header
                    title="Mis XV"
                    subtitle="Alejandra Lopez Ruiz"
                    img={premium1}
                    alt="Alejandra Lopez Ruiz"
                />
                <main className="w-full px-4 py-[100px] relative z-10">
                    <div className={`flex flex-col items-center text-[${COLORTEXT}] gap-[120]`}>
                        <section className='ApartaFecha'>
                            <ApartaFecha fecha="26 de Septiembre del 2025" />
                        </section>
                        <div className="separador flex" >
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='TextoInspirador'>
                            <TextoInspirador />
                        </section>
                        <div className="separador flex" >
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='Padres-Padrinos'>
                            <div className="padres-padrinos flex flex-col gap-10" >
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
                        <div className="separador flex" >
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='GaleriaFotos'>
                            <GaleriaFotos ImagesCarrusel={ImagesCarrusel}/>
                        </section>
                        <div className="separador flex">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='Itinerario'>
                            <Itinerario />
                        </section>
                        <div className="separador flex">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='CodigoVestimenta'>
                            <CodigoVestimenta />
                        </section>
                        <div className="separador flex">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='LluviaDeSobres'>
                            <LluviaSobres
                                tarjeta={false}
                            />
                        </section>
                        <div className="separador flex">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className="UbicacionEvento">
                            <Ubicacion
                                label="Ubicación del evento"
                                placeName="Salón Luzcina"
                                address="Av. 5 de Mayo 1400, San Juan Aquiahuac, 72810 San Andrés Cholula, Pue."
                                href={"https://maps.app.goo.gl/CpJ4H3AD8HFbJYnK6"}
                                img={SalonLuzcina}  // Assuming Iglesia is the image for the event location  
                            />
                        </section>
                        <div className="separador flex">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className="UbicacionIglesia">
                            <Ubicacion
                                label="Ubicación de la iglesia"
                                placeName="Parroquia de San Andrés Apóstol"
                                address="C. 3 Ote. 2, Centro San Andrés Cholula, 72810 San Andrés Cholula, Pue."
                                href={"https://maps.app.goo.gl/zsZMZDFANsf5CNcB8"}
                                img={Iglesia}  // Assuming Iglesia is the image for the event location  
                            />
                        </section>
                        <div className="separador flex">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='SugerenciaHospedaje'>
                            <Hoteles />
                        </section>
                        <div className="separador flex">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className='Playlist'>
                            <Playlist />
                        </section>
                        <div className="separador flex">
                            <Image src={separador} alt="separador" />
                        </div>
                        <section className="confirmacionAsistencia">
                            <div className="asistencia flex flex-col gap-10">
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
                <BackgroundMusic audioSrc={'/audio/Timber.mp3'}/>
            </SobreAnimation>
        </>
    )
}
