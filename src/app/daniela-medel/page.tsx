'use client'
import BlockMobile from "@/components/components-invitations/BlockMobile";
import Premium from "@/components/pages/premium";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function DanielaMedel() {
    const { isMobile } = useIsMobile()

    return (
        <>
            {!isMobile && <BlockMobile />}
            <Premium />
        </>
    );
}
