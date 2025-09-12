"use client";
import AppSidebarHeader from "@/components/components-admin/app-sidebar-header";
import CardData from "@/components/components-admin/card-data";
import { columnasInvitados } from "@/components/components-admin/datatable/columns";
import { DataTable } from "@/components/components-admin/datatable/datatable";
import { useUserData } from "@/hooks/useProvider";
import api from "@/lib/api";
import { BreadcrumbItem } from "@/types";
import { User, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Dashboard",
    href: "gestor-invitaciones/administrador/dashboard",
  },
];

export type Invitado = {
  id: string;
  name: string;
  hasConfirmed: boolean;
  invitationQty: number;
  kidsNo: number;
  adultsNo: number;
  phoneNumber: string;
  message: string;
};

export default function Dashboard() {
  const [data, setData] = useState<Invitado[]>([]);
  const [loading, setLoading] = useState(true);
  const user = useUserData();

  useEffect(() => {
    async function fetchData() {
      const userDataStr = localStorage.getItem("userData");
      let uuid = "";
      if (userDataStr) {
        const userData = JSON.parse(userDataStr);
        uuid = userData.uuid;
      }
      if (!uuid) {
        setLoading(false);
        return; // No hay uuid, puedes mostrar un error o redirigir
      }
      try {
        const res = await api.get(`/api/guests/invitation/${uuid}`);
        const guestList = res.data.data.guestList; // <- Aquí están todos los invitados
        setData(guestList); // ¡Esto es lo que pasas como prop!
      } catch (error) {
        console.error(error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex flex-1 flex-col items-center justify-center text-center text-neutral-400 text-2xl font-medium">
        Cargando...
      </div>
    );


  const resumen = data.reduce(
    (acc, invitado) => {
      if (invitado.hasConfirmed) {
        acc.adultos += invitado.adultsNo ?? 0;
        acc.ninos += invitado.kidsNo ?? 0;
        acc.total += (invitado.adultsNo ?? 0) + (invitado.kidsNo ?? 0);
      }
      return acc;
    },
    { adultos: 0, ninos: 0, total: 0 }
  );

  const formatDate = (dateString?: string): string => {
    if (!dateString) return ""; // o podrías devolver "Sin fecha"

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ""; // protege si viene algo inválido

    return date.toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <>
      <AppSidebarHeader breadcrumbs={breadcrumbs} />
      <main className="px-8 py-6 flex flex-col gap-8">
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="w-full flex flex-col gap-1">
            <h1 className=" text-3xl tracking-tight text-neutral-700">
              Bienvenida <b className="text-rabe-primary-600">{user?.username || ""}</b>
            </h1>
            <small className="text-muted-foreground">
              Mira un resumen general de tus invitados a tu evento especial.
            </small>
          </div>
          <div className="lg:flex hidden w-full flex-col gap-4 lg:flex-row lg:justify-end lg:items-end">
            <div className="flex flex-col">
              <small className="text-muted-foreground">Fecha del Evento</small>
              <p className="text-rabe-primary-600 tracking-[-0.08em] font-bold">
                {formatDate(user?.eventDate) || "Fecha no disponible"}
              </p>
            </div>
            <div className="flex flex-col">
              <small className="text-muted-foreground">Fecha Limite de Confirmacion</small>
              <p className="text-rabe-primary-600 tracking-[-0.08em] font-bold">
                {formatDate(user?.eventDeadLine) || "Fecha no disponible"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <CardData icon={<User size={16} />} title="Adultos Confirmados" data={resumen.adultos} />
          <CardData icon={<User size={16} />} title="Menores Confirmados" data={resumen.ninos} />
          <CardData icon={<Users size={16} />} title="Total de Personas Confirmadas" data={resumen.total} />
        </div>
        <DataTable
          columns={columnasInvitados}
          data={data}
          placeholderFilter="Nombre..."
          filter="name"
        />
      </main>
    </>
  );
}
