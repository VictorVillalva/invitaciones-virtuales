'use client'
import BlockMobile from "@/components/components-invitations/BlockMobile";
import Premium from "@/components/pages/premium";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useParams } from "next/navigation";

export default function DanielaMedel() {
    const { isMobile } = useIsMobile()
    const params = useParams();
    const code = params?.code;

    return (
        <>
            {!isMobile && <BlockMobile />}
            <Premium code={code} />
        </>
    );
}
