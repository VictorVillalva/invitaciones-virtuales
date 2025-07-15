import CardHotel from "./CardHotel";
import HotelPosadaSenoria from '@/assets/images/DanielaMedelXV/Hotel-Posada-Senorial.jpg'
export default function Hoteles() {
    return (
        <div className="sugerencia-de-hospedaje flex flex-col text-center gap-10" >
            <p className="text-[32px]">Sugerencia de Hospedaje</p>
            <CardHotel
                image={HotelPosadaSenoria}
                placeName="Hotel Posada Señorial"
                address="Av. 5 de Mayo 1400, San Juan Aquiahuac, 72810 San Andrés Cholula, Pue."
                event="XV Años Daniela Medel"
                salon="Salón Luzcina"
                date="6 - Septiembre - 2025"
                href={'https://maps.app.goo.gl/CpJ4H3AD8HFbJYnK6'}
            />
        </div>
    )
}
