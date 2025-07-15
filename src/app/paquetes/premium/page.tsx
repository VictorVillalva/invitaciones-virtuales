'use client'
import BlockMobile from "@/components/components-invitations/BlockMobile";

import { useIsMobile } from "@/hooks/useIsMobile";
import PremiumPage from "@/paquetes/premium-page";
import { useParams } from "next/navigation";

export default function PaquetePremium() {
  const { isMobile } = useIsMobile()
  const params = useParams();
  const code = params?.code;

  return (
    <>
      {!isMobile && <BlockMobile />}
      <PremiumPage code={code} />
    </>
  );
}
