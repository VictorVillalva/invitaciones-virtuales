'use client'
import { useState } from "react";

export const useConfirmacion = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
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

    // const { width, height } = useWindowSize();
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedOption) {
            setError("*Por favor, selecciona una opción.");
            setIsModalOpen(true); // Mostrar el modal
            return;
        }
        // Aquí puedes manejar el envío de los datos, por ejemplo, enviándolos a un servidor
        console.log("Opción seleccionada:", selectedOption);
        console.log("Mensaje:", message);
        setIsModalConfirmationOpen(true);
        setIsSubmitted(true); // Marcar como enviado
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsModalConfirmationOpen(false)
    };
    
    return {
        selectedOption,
        message,
        error,
        isModalOpen,
        isModalConfirmationOpen,
        isSubmitted,
        handleSelectChange,
        handleMessageChange,
        handleSubmit,
        handleCloseModal,
    }
}