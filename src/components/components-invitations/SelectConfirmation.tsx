import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectProps{
    label: string;
    placeholder?: string;
    selectedOption: string;
    onSelect: (value: string) => void;
    persons?: number
}

export default function SelectConfirmation({ label, placeholder = "Selecciona", selectedOption, onSelect, persons }: SelectProps) {
    // Generar opciones dinámicamente según el número de personas
    const opcionesDinamicas = persons
        ? Array.from({ length: persons }, (_, i) => ({
            id: i + 1,
            label: `${i + 1} Persona${i + 1 > 1 ? 's' : ''}`,
            value: (i + 1).toString(),
        }))
        : [];

    // Agregar la opción "No asistiremos" al final del array
    opcionesDinamicas.push({
        id: 0, // id para la opción "No asistiremos"
        label: "No podremos asistir", // Texto visible de la opción
        value: "0", // Valor de la opción, para enviar "0"
    });
    return (
        <div className="flex flex-col">
            <legend className="font-medium mb-2">{label}</legend>
            <Select value={selectedOption} onValueChange={onSelect}>
                <SelectTrigger className="w-full bg-white text-slate-500">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Opciones</SelectLabel>
                        {opcionesDinamicas.map((opcion)=>(
                            <SelectItem key={opcion.id} value={opcion.value}>{opcion.label}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
