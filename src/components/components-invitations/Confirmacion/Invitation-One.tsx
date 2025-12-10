import React from "react";
import Image from "next/image";
import LogoPamela from "@/assets/images/AimeeSabbaghXV/logo.png";
import separador from "@/assets/images/AimeeSabbaghXV/Separator-4.png";


interface InvitationProps {
  numPer?: number;
  family?: string;
  adultsNo?: number;
  kidsNo?: number
  className?: string;
}

export default function InvitationOne({
  numPer = 0,
  family = "Familia Sanchez",
  adultsNo = 0,
  kidsNo = 0,
  className,
}: InvitationProps) {
  return (
    <div className={`${className} flex flex-col p-6 gap-3`}>
      <div className="informacion flex flex-col items-center gap-6">
        <Image src={LogoPamela} alt="Logo-Invitacion" />
        <div className="cantidad-familia flex flex-col text-center">
          <p className="text-aimee-primary">Pase para {numPer} personas</p>
          <p className="text-aimee-primary tracking-[-0.06em] text-[36px] font-bold">
            {family}
          </p>
        </div>
      </div>
      <Image src={separador} alt="separador" />
      <div className="footer-pase flex flex-col items-center gap-2">
        <div className="cantidades flex flex-col items-center font-bold">
          {adultsNo > 0 && <p>{adultsNo} Adulto(s)</p>}
          {kidsNo > 0 && <p>{kidsNo} Menor(es)</p>}
        </div>
        <p className="text-xs">*Pase único e intransferible</p>
      </div>
    </div>
  );
}
