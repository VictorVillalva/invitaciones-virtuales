'use client'
import { useEffect, useState } from "react"

export const useItinerario = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progressHeight, setProgressHeight] = useState(0); // Altura de la línea de progreso

    useEffect(() => {
        const handleScroll = () => {
            const timelineItems = document.querySelectorAll(".timeline-item");
            let index = 0;

            timelineItems.forEach((item, i) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2) {
                    index = i;
                }
            });

            setActiveIndex(index);

            // Calcula la altura de la línea de progreso
            const firstItem = timelineItems[0];
            const lastItem = timelineItems[timelineItems.length - 1];
            if (firstItem && lastItem) {
                const firstItemTop = firstItem.getBoundingClientRect().top;
                const lastItemTop = lastItem.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;

                // Calcula el progreso relativo
                const progress =
                    Math.min(
                        Math.max(viewportHeight / 2 - firstItemTop, 0),
                        lastItemTop - firstItemTop
                    ) /
                    (lastItemTop - firstItemTop);

                setProgressHeight(progress * 100); // Progreso en porcentaje
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return {
        activeIndex,
        progressHeight
    }
}