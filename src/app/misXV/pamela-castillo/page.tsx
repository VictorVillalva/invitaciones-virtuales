'use client'
//** Hooks */}
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
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
import BlockMobile from '@/components/components-invitations/BlockMobile-Invitation'
import FooterRabe from '@/components/components-invitations/Footer-Rabe'

export default function PamelaCastilloPreInvitation() {
  const { isMobile } = useIsMobile()
  return (
    <>
      {!isMobile && <BlockMobile />}
      <HeaderInvitation
        classNameHeader='h-[730px]'
        title='Mis XV'
        image={PamelaCastillo}
        classNameTitle='text-[64px]'
        tipographyTitle={ephesis}
        tipographySubtitle={ephesis}
        nombreFestejada='Pamela Castillo Monterrosas'
        classNameSubtitle='text-[32px] font-semibold bg-gradient-to-r from-[#F3C71C] via-[#EFB810] to-[#C4870A] bg-clip-text text-transparent'
        filterImage={true}
      />
      <main className='pre-invitacion-pamela-castillo flex flex-col gap-[150px] px-4 py-[150px]'>
        <section data-aos="fade-dowm" className='aparta-fechas-invitation'>
          <ApartaFechaInvitation
            date='8 de Noviembre del 2025'
            classNameTitle='tracking-[0.16em] text-pamela-primary font-normal'
            classNameText='text-[40px] font-bold tracking-[-0.02em] text-[#C4870A]'
          />
        </section>
        <section data-aos="fade-dowm" className='separador-invitation'>
          <Image src={separador} alt="separador" />
        </section>
        <section data-aos="fade-dowm" className='texto-inspirador-invitation'>
          <TextoInspirador
            title='La vida está hecha de instantes únicos, y este es uno de ellos. Me encantaría que me acompañes a celebrar mis XV años y a compartir juntos este día tan especial.'
            classNameText='text-[24px] font-normal text-[#814D12]'
          />
        </section>
        <section data-aos="fade-dowm" className='separador-invitation'>
          <Image src={separador} alt="separador" />
        </section>
        <section data-aos="fade-dowm" className='countdown-invitation'>
          <CountDown
            targetDate={new Date('2025-11-08T00:00:00')}
            classNameTitle='text-center text-[40px] font-bold text-pamela-primary tracking-[-0.02em] leading-[40px]'
          />
        </section>
        <section data-aos="fade-dowm" className='separador-invitation'>
          <Image src={separador} alt="separador" />
        </section>
        <section data-aos="fade-dowm" className='lugar-evento-invitation'>
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
        </section>
        <section data-aos="fade-dowm" className='separador-invitation'>
          <Image src={separador} alt="separador" />
        </section>
        <section data-aos="fade-dowm" className='Espera-la-invitación'>
          <div className='flex flex-col gap-3 text-center px-4 text-pamela-primary'>
            <h2 className=' font-bold text-[40px] tracking-[-0.06em] leading-[40px]'>Espera la invitación oficial</h2>
            <p className='tracking-[-0.02em]'>Estamos trabajando en todos los detalles para que este evento sea especial, en los próximos días estarás recibiendo la información oficial para este gran evento</p>
          </div>
        </section>
        <section data-aos="fade-dowm" className='separador-invitation'>
          <Image src={separador} alt="separador" />
        </section>
        <section data-aos="fade-dowm" className='misXV'>
          <div className='flex flex-col justify-center items-center text-center gap-2'>
            <span className={`${ephesis.className} text-[64px] leading-none text-[#C4870A]`}>Mis XV</span>
            <span className={`${ephesis.className} text-[32px] font-bold text-[#9C610C]`}>Pamela Castillo Monterrosas</span>
            <span className='tracking-[1em] text-[#9C610C]'>08.11.2025</span>
          </div>
        </section>
      </main>
      <FooterRabe 
        className='bg-[#F2D6D6]'
      />
    </>
  )
}
