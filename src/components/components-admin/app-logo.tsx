/** Assets */
import rabe from '@/assets/images/landing/rabe-logo.png'
/** Hooks */
import Image from "next/image";
export default function AppLogo() {
  return (
    <>
      <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-rabe-primary-50">
        <Image src={rabe} alt="Rabe-Innovation" />
      </div>
      <div className="ml-1 grid flex-1 text-left text-sm">
        <span className="mb-0.5 truncate leading-tight font-semibold">
          Rabe Innovation
        </span>
      </div>
    </>
  );
}
