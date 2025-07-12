'use client'
import type { Guest } from "@/types";
import axios from "axios";
import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";
interface ConfirmacionProps {
    params: ParamValue;
    datos: Guest
}

export const useConfirmacion = ({ params, datos }: ConfirmacionProps) => {
    const [hasKids, setHasKids] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedKidsOption, setSelectedKidsOption] = useState("")
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [headerError, setHeaderError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalConfirmationOpen, setIsModalConfirmationOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // Nuevo estado para controlar si los datos han sido enviados

    // ---- Se desactivo por que ya no se usaron los checkboxs ----
    // const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelectedOption(e.target.value);
    //     setError(""); // Limpiar el mensaje de error cuando se selecciona una opción
    // };

    // Función de manejo que se pasa como prop al hijo
    const handleSelectChange = (value: string) => {
        setSelectedOption(value);  // Actualiza el valor seleccionado
    };

    const handleSelectKidsChange = (value: string) => {
        setSelectedKidsOption(value);  // Actualiza el valor seleccionado
    };

    // const { width, height } = useWindowSize();
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Convertir a número, si están vacíos poner 0
        const adultsNo = Number(selectedOption) || 0;
        const kidsNo = Number(selectedKidsOption) || 0;
        const total = adultsNo + kidsNo;

        console.log("Adults:", adultsNo, "Kids:", kidsNo, "Total:", total);

        if (hasKids) {
            if (selectedOption === "" || selectedKidsOption === "") {
                setHeaderError("Olvidaste confirmar");
                setError("*Por favor, selecciona una opción para adultos y niños.");
                setIsModalOpen(true);
                return;
            }
        } else {
            if (selectedOption === "") {
                setHeaderError("Olvidaste confirmar");
                setError("*Por favor, selecciona una opción.");
                setIsModalOpen(true);
                return;
            }
        }

        if (total > datos.invitationQty) {
            setHeaderError("Ups!, creo que te has pasado");
            setError(`No puedes confirmar más de ${datos.invitationQty} personas, revisa bien tu invitación e intenta nuevamente.`);
            setIsModalOpen(true);
            return;
        }
        // Si pasa la validación, realiza el POST con header de autenticación
        try {
            const token = process.env.NEXT_PUBLIC_TOKEN_ACCESS_API; // Cambia por tu método de obtención de token
            await axios.post(
                `http://localhost:8080/guests/confirm-assistance/${params}`,
                {
                    adultsNo,
                    kidsNo,
                    message
                },
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );
            setIsModalConfirmationOpen(true);
            setIsSubmitted(true);
        } catch (error) {
            setError("Ocurrió un error al enviar la confirmación.");
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsModalConfirmationOpen(false)
    };

    useEffect(() => {
        if (datos?.hasKids === true) {
            setHasKids(true);
        } else {
            setHasKids(false);
        }
    }, [datos?.hasKids]);

    useEffect(() => {
        if (datos?.hasConfirmed === true) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    }, [datos?.hasConfirmed]);

    return {
        hasKids,
        selectedKidsOption,
        selectedOption,
        message,
        error,
        headerError,
        isModalOpen,
        isModalConfirmationOpen,
        isSubmitted,
        handleSelectKidsChange,
        handleSelectChange,
        handleMessageChange,
        handleSubmit,
        handleCloseModal,
    }
}

interface UseConfirmacionAsistenciaProps {
    codeParam: ParamValue;
}

export const useConfirmacionAsistencia = ({ codeParam }: UseConfirmacionAsistenciaProps) => {
    const [guestsData, setGuestsData] = useState<Guest | null>(null);

    // ...existing code...
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = process.env.NEXT_PUBLIC_TOKEN_ACCESS_API; // Ajusta el nombre si es diferente
                const response = await axios.get(
                    `http://localhost:8080/guests/${codeParam}`,
                    {
                        headers: {
                            Authorization: `${token}`,
                        },
                    }
                );
                // Guardar la data en el estado
                // Si tu response.data ya es un arreglo:
                setGuestsData(response.data.data);
                // Aquí puedes guardar la respuesta en el estado si lo necesitas
            } catch (error) {
                console.error("Error al obtener la confirmación:", error);
            }
        };
        if (codeParam) {
            fetchData();
        }
    }, [codeParam]);

    return {
        codeParam,
        guestsData
    }
}

