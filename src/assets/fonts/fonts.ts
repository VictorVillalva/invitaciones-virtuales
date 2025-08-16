import { Ephesis, Inspiration, Inter, Playwrite_US_Trad, Quicksand, Zain } from "next/font/google";

// Versión optimizada - solo los pesos y subsets más usados
export const inter = Inter({
    subsets: ['latin', 'latin-ext'], // Solo los subsets más comunes
    weight: ['300', '400', '500', '600', '700'], // Solo los pesos más usados
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-inter'
})

export const playwrite = Playwrite_US_Trad({
    weight: ['300', '400'], // Solo los pesos más usados
    style: ['normal'],
    display: 'swap',
    variable: '--font-playwrite'
})

export const quicksand = Quicksand({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '500', '600'], // Solo los pesos más usados
    style: ['normal'],
    display: 'swap',
    variable: '--font-quicksand'
})

export const inspiration = Inspiration({
    subsets: ['latin', 'latin-ext'],
    weight: ['400'], // Solo peso disponible
    style: ['normal'],
    display: 'swap',
    variable: '--font-inspiration'
})

export const ephesis = Ephesis({
    subsets: ['latin', 'latin-ext'],
    weight: ['400'], // Solo peso disponible
    style: ['normal'],
    display: 'swap',
    variable: '--font-ephesis'
})

export const zain = Zain({
    subsets: ['latin', 'arabic'],
    weight: ["200", "300", "400", "700", "800", "900"], // Solo peso disponible
    style: ['normal', "italic"],
    display: 'swap',
    variable: '--font-zain'
})