'use client'
import { useEffect, useState, useCallback } from "react";

export function useIsMobile(breakpoint = 768){
    const [isMobile, setIsMobile] = useState(true);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= breakpoint)
    }, [breakpoint]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint, handleResize]);

    return{
        isMobile
    }
}