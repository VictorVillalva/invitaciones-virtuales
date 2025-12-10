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
    selectedOption?: string;
    onSelect?: (value: string) => void;
}

const kids = [
    {
        id: 1,
        value: "1",
        label: "1 niño",
    },
    {
        id: 2,
        value:"2",
        label: "2 niños",
    },
    {
        id: 3,
        value: "3",
        label: "3 niños",
    },
]

export default function SelectConfirmationKidsInvitation({ label, placeholder = "Selecciona", selectedOption, onSelect }: SelectProps) {
    return (
        <div className="flex flex-col">
            <legend className="font-medium mb-2">{label}</legend>
            <Select value={selectedOption} onValueChange={onSelect}>
                <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Opciones</SelectLabel>
                        {kids.map((opcion)=>(
                            <SelectItem key={opcion.id} value={opcion.value}>{opcion.label}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
