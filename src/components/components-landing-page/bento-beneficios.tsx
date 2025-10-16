import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
import beneficio4 from "@/assets/images/landing/image-beneficios-4.png";
import beneficio3 from "@/assets/images/landing/image-beneficios-3.png";
import beneficio2 from "@/assets/images/landing/image-beneficios-2.png";
import beneficio1 from "@/assets/images/landing/image-beneficios-1.png";

const features = [
  {
    name: "Diseños únicos que hablan por ti",
    description:
      "Cada invitación es creada a tu medida, reflejando el estilo y la esencia de tu evento.",
    href: "#",
    className: "lg:col-span-1 lg:row-span-1",
    cta: "Conocer mas",
    background: (
      <div className="flex items-end justify-center">        
        <Image
          src={beneficio1}
          alt="Beneficio 1"
          className="w-[220px] lg:scale-100 scale-90 rounded-md transition-all duration-300 ease-out group-hover:scale-110"
        />
      </div>
    ),
  },
  {
    name: "Música, fotos y animaciones",
    description:
      "Haz que tu invitación cobre vida con una experiencia multimedia única. Incluye la canción que más te guste, agrega tus fotos favoritas y sorprende con animaciones que capturan la esencia de tu evento.",
    href: "#",
    cta: "Conocer mas",
    className: "lg:col-span-2",
    background: (
      <div className="flex flex-col lg:justify-center lg:items-center justify-start items-center">        
        <Image
          src={beneficio3}
          alt="Beneficio 3"
          className="w-[370px] scale-90 lg:scale-100 lg:group-hover:scale-110 group-hover:scale-100 rounded-md transition-all duration-300 ease-out "
        />
      </div>
    ),
  },
  {
    name: "Comparte en segundos",
    description:
      "Envíala por WhatsApp, correo o redes sociales sin límites y sin complicaciones.",
    href: "#",
    cta: "Conocer mas",
    className: "lg:col-span-1",
    background: (
      <div className="flex flex-col lg:justify-center lg:items-center justify-center items-center">
        <Image
          src={beneficio2}
          alt="Beneficio 2"
          className="w-[240px] scale-100 rounded-md transition-all duration-300 ease-out group-hover:scale-110"
        />
      </div>
    ),
  },
  {
    name: "Confirmación de asistencia online",
    description:
      "Tus invitados pueden confirmar con un solo clic, y tú ves la lista en tiempo real.",
    className: "col-span-1 row-span-2 ",
    href: "#",
    cta: "Conocer mas",
    background: (
      <div className="flex flex-col lg:justify-center lg:items-center justify-center items-center pb-16 lg:pb-20">
        <Image
          src={beneficio4}
          alt="Beneficio 4"
          className="w-[270px] scale-100 rounded-md transition-all duration-300 ease-out group-hover:scale-110"
        />
      </div>
    ),
  },
];

export function BentoBeneficios() {
  return (
    <BentoGrid className="grid lg:grid-flow-col lg:grid-cols-3 grid-cols-1 gap-4">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
