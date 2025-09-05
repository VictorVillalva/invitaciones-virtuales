import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, EllipsisVertical } from "lucide-react";
import Link from "next/link";

//type RowData = { id: number };

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ColumnaInvitados = {
  id: string;
  name: string;
  hasConfirmed: boolean;
  invitationQty: number;
  kidsNo: number;
  adultsNo: number;
  phoneNumber: string;
  message: string;
};

// function ActionsCellInvitados({ row }: { row: { original: RowData } }) {
//   return (
//     <>
//       <div className="flex flex-row justify-end">
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="ghost"
//               className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
//               size="icon"
//             >
//               <EllipsisVertical />
//               <span className="sr-only">Opciones</span>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end" className="w-32">
//             <DropdownMenuItem>
//               <Link href="#" className="w-full">
//                 Editar
//               </Link>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </>
//   );
// }

export const columnasInvitados: ColumnDef<ColumnaInvitados>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "hasConfirmed",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Confirmación
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) =>
      row.getValue("hasConfirmed") ? (
        <Badge variant="default" className="w-[60px]">Sí</Badge>
      ) : (
        <Badge variant="destructive" className="w-[60px]">No</Badge>
      ),
  },
  {
    accessorKey: "invitationQty",
    header: "No. Invitados",
  },
  {
    accessorKey: "kidsNo",
    header: "No. Menores",
  },
  {
    accessorKey: "adultsNo",
    header: "No. Adultos",
  },
  {
    id: "pasesConfirmados",
    header: "Pases confirmados",
    cell: ({ row }) => {
      const kids = Number(row.getValue("kidsNo")) || 0
      const adults = Number(row.getValue("adultsNo")) || 0
      return (
        <span className="font-semibold">{kids + adults}</span>
      )
    }
  },
  {
    accessorKey: "phoneNumber",
    header: "Número de teléfono",
    cell: ({ row }) => (
      <span className="tracking-wide">{row.getValue("phoneNumber")}</span>
    ),
  },
  {
    accessorKey: "message",
    header: "Mensaje",
    cell: ({ row }) => (
      <span className="whitespace-pre-line break-words">
        {row.getValue("message") || "-"}
      </span>
    ),
  },
]
export const columnasInvitadosBase: ColumnDef<ColumnaInvitados>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div className="w-4">
          <Button
            className="flex"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            ID del Catalogo
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="pl-3 lowercase">
        <span>{row.getValue("id")}</span>
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre de Invitado
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="w-full pl-3">
        <span>{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre de Invitado
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="w-full pl-3">
        <span>{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({}) => {
      <div className="flex flex-row justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
              size="icon"
            >
              <EllipsisVertical />
              <span className="sr-only">Opciones</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem>
              <Link href="#" className="w-full">
                Editar
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>;
    },
  },
];
