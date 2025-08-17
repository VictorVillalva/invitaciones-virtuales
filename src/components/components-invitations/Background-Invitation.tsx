/** Hooks */
import { StaticImageData } from "next/image"

interface BackgroundInvitationProps {
  image: StaticImageData
}

export default function BackgroundInvitation({ image }: BackgroundInvitationProps) {
  return (
    <div
      className="absolute inset-0 opacity-5 h-auto"
      style={{ backgroundImage: `url(${image.src})` }}>

    </div>
  )
}
