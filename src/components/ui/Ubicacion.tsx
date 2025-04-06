import React from 'react'
import CardSalon from './CardSalon'
import SalonLuzcina from '@/assets/images/DanielaMedelXV/SalonLuzcina.jpg'

export default function Ubicacion() {
    return (
        <div className="ubicacion-evento flex flex-col text-center gap-10" data-aos="fade-up">
            <p className="text-[32px]">Ubicación del evento</p>
            <CardSalon
                image={SalonLuzcina}
                placeName="Salón Luzcina"
                address="Av. 5 de Mayo 1400, San Juan Aquiahuac, 72810 San Andrés Cholula, Pue."
                href={"https://maps.app.goo.gl/CpJ4H3AD8HFbJYnK6"}
            />
        </div>
    )
}
