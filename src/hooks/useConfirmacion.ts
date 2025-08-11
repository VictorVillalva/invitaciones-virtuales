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
    const [localDatos, setLocalDatos] = useState(datos);

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

        // 1) Normaliza números
        const adultsNo = Number(selectedOption) || 0;
        const kidsNo = hasKids ? (Number(selectedKidsOption) || 0) : 0;
        const total = adultsNo + kidsNo;

        // 2) Validaciones de selects
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
                setError("Por favor, selecciona una opción.");
                setIsModalOpen(true);
                return;
            }
        }

        // 3) No exceder pases
        if (total > datos.invitationQty) {
            setHeaderError("¡Ups! Creo que te has pasado");
            setError(`No puedes confirmar más de ${datos.invitationQty} personas. Revisa tu invitación e intenta nuevamente.`);
            setIsModalOpen(true);
            return;
        }

        // 4) Payload para backend
        const payload = {
            adultsNo,
            kidsNo,
            message,
            // si tu backend deduce hasConfirmed, omítelo; si no:
            hasConfirmed: total > 0,
        };

        try {
            const token = process.env.NEXT_PUBLIC_TOKEN_ACCESS_API;
            const urlApi = process.env.NEXT_PUBLIC_BACKEND_URL;

            // 5) **Actualiza UI al instante** (optimista)
            setIsSubmitted(true);
            setLocalDatos(prev => ({
                ...prev,
                ...payload,
            }));

            // modal según asista/no asista
            if (total > 0) {
                setIsModalConfirmationOpen(true); // modal "¡confirmaste!"
            } else {
                // 0/0: no asiste → usa el modal de "lamentamos..."
                setHeaderError("Lamentamos que no puedas asistir");
                setError("Gracias por confirmarlo. Ojalá podamos coincidir en otra ocasión.");
                setIsModalOpen(true);
            }

            // 6) Llama al backend
            await axios.post(
                `${urlApi}/api/guests/confirm-assistance/${params}`,
                payload,
                {
                    headers: {
                        // según tu API tal vez requiere 'Bearer ':
                        Authorization: `${token}`, // o `Bearer ${token}`
                    },
                }
            );

            // Si usas Server Components y quieres refrescar datos del server:
            // router.refresh();

        } catch (err) {
            console.error("Error:", err);
            // Reacción de error
            setHeaderError("Ocurrió un error");
            setError("Ocurrió un error al enviar la confirmación. Intenta de nuevo.");
            setIsModalOpen(true);

            // (Opcional) revertir UI si quieres
            // setIsSubmitted(false);
            // setLocalDatos(datos);
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
        localDatos,
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
                const urlApi = process.env.NEXT_PUBLIC_BACKEND_URL; // Asegúrate de que esta URL sea correcta
                //`${urlApi}/api/guests/${codeParam}`
                const response = await axios.get(
                    `${urlApi}/api/guests/${codeParam}`,
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
            } catch{
                //console.error("Error al obtener la confirmación:", error);
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

