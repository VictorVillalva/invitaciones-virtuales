import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
import beneficio4 from "@/assets/images/landing/image-beneficios-4.png";
import beneficio3 from "@/assets/images/landing/image-beneficios-3.png";
import beneficio2 from "@/assets/images/landing/image-beneficios-2.png";
import beneficio1 from "@/assets/images/landing/image-beneficios-1.png";

const features = [
  {
    Icon: FileTextIcon,
    name: "Diseños únicos que hablan por ti",
    description:
      "Cada invitación es creada a tu medida, reflejando el estilo y la esencia de tu evento.",
    href: "#",
    className: "col-span-1 row-span-1",
    cta: "Conocer mas",
    background: (
      <Image
        src={beneficio1}
        alt="Beneficio 1"
        className="absolute w-[220px] right-26 -bottom-15 scale-100 rounded-md transition-all duration-300 ease-out group-hover:scale-110"
      />
    ),
  },
  {
    Icon: BellIcon,
    name: "Música, fotos y animaciones",
    description:
      "Haz que tu invitación cobre vida con una experiencia multimedia única. Incluye la canción que más te guste, agrega tus fotos favoritas y sorprende con animaciones que capturan la esencia de tu evento.",
    href: "#",
    cta: "Conocer mas",
    className: "col-span-2",
    background: (
      <Image
        src={beneficio3}
        alt="Beneficio 3"
        className="absolute w-[370px] right-64 -bottom-14 scale-100 rounded-md transition-all duration-300 ease-out group-hover:scale-110"
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Comparte en segundos",
    description:
      "Envíala por WhatsApp, correo o redes sociales sin límites y sin complicaciones.",
    href: "#",
    cta: "Conocer mas",
    className: "col-span-1",
    background: (
      <Image
        src={beneficio2}
        alt="Beneficio 2"
        className="absolute w-[240px] right-26 -bottom-15 scale-100 rounded-md transition-all duration-300 ease-out group-hover:scale-110"
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Confirmación de asistencia online",
    description:
      "Tus invitados pueden confirmar con un solo clic, y tú ves la lista en tiempo real.",
    className: "col-span-1 row-span-2",
    href: "#",
    cta: "Conocer mas",
    background: (
      <Image
        src={beneficio4}
        alt="Beneficio 4"
        className="absolute w-[270px] right-22 bottom-25 scale-100 rounded-md transition-all duration-300 ease-out group-hover:scale-110"
      />
    ),
  },
];

export function BentoBeneficios() {
  return (
    <BentoGrid className="grid grid-flow-col grid-cols-3 gap-4">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
