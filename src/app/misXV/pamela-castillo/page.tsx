//** Hooks */}
import Image from 'next/image'

//** Components */
import HeaderInvitation from '@/components/components-invitations/Header-Invitation'
import ApartaFechaInvitation from '@/components/components-invitations/ApartaFecha-Invitation'
import TextoInspirador from '@/components/components-invitations/TextoInspirador-Invitation'
import CountDown from '@/components/components-invitations/CountDown-Invitation'
import LugarEvento from '@/components/components-invitations/LugarEvento-Invitation'

//** Assets */
import PamelaCastillo from '@/assets/images/PamelaCastilloXV/Portada-PamelaCastillo.png'
import Lugar from '@/assets/images/PamelaCastilloXV/Hacienda-ElJaguey.png'
import separador from '@/assets/images/PamelaCastilloXV/Separator-8-PamelaCastillo.svg'
import { ephesis } from '@/assets/fonts/fonts'


export default function PamelaCastilloPreInvitation() {
  return (
    <>
      <HeaderInvitation
        title='Mis XV'
        image={PamelaCastillo}
        classNameTitle='text-[80px]'
        tipographyTitle={ephesis}
        nombreFestejada='Pamela Castillo'
        classNameSubtitle='text-[20px]'
      />
      <main className='pre-invitacion-pamela-castillo flex flex-col gap-[150px] px-4'>
        <ApartaFechaInvitation
          date='8 de Noviembre del 2025'
          classNameTitle='tracking-[0.16em] text-pamela-primary font-normal'
          classNameText='text-[40px] font-bold tracking-[-0.02em] text-[#C4870A]'
        />
        <Image src={separador} alt="separador" />
        <TextoInspirador
          title='La vida está hecha de instantes únicos, y este es uno de ellos. Me encantaría que me acompañes a celebrar mis XV años y a compartir juntos este día tan especial.'
          classNameText='text-[24px] font-normal text-[#814D12]'
        />
        <Image src={separador} alt="separador" />
        <CountDown
          targetDate={new Date('2025-11-08T00:00:00')}
          classNameTitle='text-center text-[40px] font-bold text-pamela-primary tracking-[-0.02em] leading-[40px]'
        />
        <Image src={separador} alt="separador" />
        <LugarEvento 
          title='Lugar del Evento'
          classNameTitle='text-center text-[40px] font-bold text-pamela-primary tracking-[-0.02em] leading-[40px]'
          image={Lugar}
          location='Prolongación Hacienda El Jaguey 3402 Cholula, 72828 Heroica Puebla de Zaragoza'
          urlLocation='https://maps.app.goo.gl/bnV6uGG2rLP7YQYWA'
          titleCard='Hacienda El Jaguey'
          classNameTitleCard='text-[32px] tracking-[-0.06em] text-pamela-primary'
          classNameButton='rounded-[16px] text-[18px] text-white bg-[linear-gradient(to_right,#435A62_0%,#668995_34%,#77A0AF_68%,#89B8C8_100%)]'
        />
      </main>
    </>
  )
}
