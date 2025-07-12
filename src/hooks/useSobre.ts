'use client'
import { useEffect, useState } from "react"

export const useSobre = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
            setTimeout(() => {
                setIsComplete(true);
            }, 2000);
        }, 500);
    }, [])

    return {
        isOpen,
        isComplete
    }
}