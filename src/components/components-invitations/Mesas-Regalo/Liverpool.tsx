import Image from "next/image";
import Logo from "@/assets/images/Liverpool-Logo.png";

interface LiverpoolProps {
  code: string;
  classNameTitle?: string;
  classNameCode?: string;
}

export default function Liverpool({
  code = "000000",
  classNameTitle,
  classNameCode,
}: LiverpoolProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="logo w-fit flex justify-center items-center p-[25px] bg-white rounded-2xl">
        <Image src={Logo} alt="Logo Liverpool" />
      </div>
      <h3 className={`${classNameTitle} font-bold text-2xl`}>
        Información de Mesa de Regalo
      </h3>
      <div className={`${classNameCode} flex flex-col font-bold text-center`}>
        <p>No. de Evento</p>
        <p className="font-extrabold text-[40px]">{code}</p>
      </div>
    </div>
  );
}
