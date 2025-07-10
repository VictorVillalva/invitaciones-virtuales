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
}

const Opciones = [
    {id:1, label:"Opcion1", value:"Opcion1"},
    {id:2, label:"Opcion2", value:"Opcion2"},
    {id:3, label:"Opcion3", value:"Opcion3"},
    {id:4, label:"Opcion4", value:"Opcion4"}, 
]
export default function SelectConfirmation({ label, placeholder="Selecciona", selectedOption} : SelectProps) {
    return (
        <div className="flex flex-col">
            <legend className="font-medium mb-2">{label}</legend>
            <Select>
                <SelectTrigger className="w-full bg-white text-slate-500">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Opciones</SelectLabel>
                        {Opciones.map((opcion)=>(
                            <SelectItem key={opcion.id} value={opcion.value}>{opcion.label}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
