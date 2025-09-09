import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import Image, { StaticImageData } from "next/image";

interface DialogProps {
  title?: string;
  classNameTitle?: string;
  description: string;
  classNameDescription?: string;
  tipography: { className: string };
  logo?: StaticImageData;
  classNameButton?: string;
  closeModal: () => void;
}

export default function DialogInvitation({
  title = "Ups",
  classNameTitle,
  description,
  classNameDescription,
  logo,
  classNameButton,
  tipography,
  closeModal,
}: DialogProps) {
  return (
    <AlertDialog open onOpenChange={closeModal}>
      <AlertDialogContent className={`${tipography.className} rounded-sm`}>
        <AlertDialogHeader>
          <AlertDialogTitle
            className={`flex flex-col justify-center items-center gap-2 ${classNameTitle}`}
          >
            {logo && <Image src={logo || ""} alt="Logo-Evento" />}
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className={`${classNameDescription}`}>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className={`${classNameButton}`}
            onClick={closeModal}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
