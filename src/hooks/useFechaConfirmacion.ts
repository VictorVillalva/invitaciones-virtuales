import { useEffect, useState } from "react";

export const useFechaConfirmacion = () => {
    const FECHA_LIMITE = "2025-08-19T00:00:00";
    const [puedeConfirmar, setPuedeConfirmar] = useState<boolean>(true);

    useEffect(() => {
        const limite = new Date(FECHA_LIMITE).getTime();
        const tick = () => {
            const now = Date.now();
            setPuedeConfirmar(now <= limite);
        };

        // Evalúa de inmediato y re-evalúa cada 1s
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);
    return {
        puedeConfirmar
    }
}

interface FechaProps{
    fechaLimite: string | number;
}
export const useFechaConfirmacionInvitation = ({ fechaLimite }: FechaProps) => {
    const FECHA_LIMITE = fechaLimite;
    const [puedeConfirmar, setPuedeConfirmar] = useState<boolean>(true);

    useEffect(() => {
        const limite = new Date(FECHA_LIMITE).getTime();
        const tick = () => {
            const now = Date.now();
            setPuedeConfirmar(now <= limite);
        };

        // Evalúa de inmediato y re-evalúa cada 1s
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [FECHA_LIMITE]);
    return {
        puedeConfirmar
    }
}
