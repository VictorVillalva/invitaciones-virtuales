import foto1 from '@/assets/images/DanielaMedelXV/VIL_0289.webp';
import foto2 from '@/assets/images/DanielaMedelXV/VIL_0316.webp';
import foto3 from '@/assets/images/DanielaMedelXV/VIL_0410.webp';
import iglesia from "@/assets/icons/Church.png";
import bell from "@/assets/icons/ServiceBell.png"
import dance from "@/assets/icons/Dance.png"
import cena from "@/assets/icons/Dinner.png"
import party from "@/assets/icons/Disco.png"


export const ImagesCarrusel = [
    {
        id: 1,
        src: foto1,
        alt: "Daniela Medel 1",
    },
    {
        id: 2,
        src: foto2,
        alt: "Daniela Medel 2",
    },
    {
        id: 3,
        src: foto3,
        alt: "Daniela Medel 3",
    },
];

export const evento = [
    { title: "Iglesia", time: "17:00 pm", icon: iglesia },
    { title: "Recepción", time: "18:30 pm", icon: bell },
    { title: "Baile", time: "19:00 pm", icon: dance },
    { title: "Cena", time: "20:00 pm", icon: cena },
    { title: "Fiesta", time: "21:00 pm", icon: party },
];

export const options = [
    { value: "1_persona", label: "1 Persona" },
    { value: "2_personas", label: "2 Personas" },
    { value: "3_personas", label: "3 Personas" },
    { value: "Todos", label: "Todos asistiremos"},
    { value: "Ninguno", label: "Lo siento, no podremos asitir"}
];

export const nombrePadresPadrinos = [
    {
        id:1, 
        nombre: "Dr. Pablo", 
        apellido: "Medel Román"
    },
    {
        id:2,
        nombre: "Dra. Yazmin",
        apellido: "Muñiz Lopez",
    },
    {
        id:3,
        nombre: "Lic. Omar",
        apellido: "Medel Roman",
    },
    {
        id:4,
        nombre:"Lic. Maria Teresa",
        apellido:"Medel Roman"
    }
]          
export const Bancos = [
    {
        id:1,
        numero: "xxxx xxxx xxxx xxxx",
        titular: "Nombre",
        banco: "Bancomer"
    }
]                          