"use client";
import AppSidebarHeader from "@/components/components-admin/app-sidebar-header";
import { columnasInvitados } from "@/components/components-admin/datatable/columns";
import { DataTable } from "@/components/components-admin/datatable/datatable";
import { useUserData } from "@/hooks/useProvider";
import api from "@/lib/api";
import { BreadcrumbItem } from "@/types";
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
  return (
    <>
      <AppSidebarHeader breadcrumbs={breadcrumbs} />
      <main className="px-8 py-6 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className=" text-3xl tracking-tight text-neutral-700">
            Bienvenida <b>{user?.username || ""}</b>
          </h1>
          <small className="text-muted-foreground">
            Mira un resumen general de tus invitados a tu evento especial.
          </small>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="flex flex-col h-full p-2 border border-neutral-200 shadow- rounded">
              <small>Adultos confirmados</small>
              <p className="text-2xl font-bold text-neutral-700">
                {resumen.adultos}
              </p>
            </div>
            <div className="flex flex-col h-full p-2 border border-neutral-200 shadow- rounded">
              <small>Niños confirmados</small>
              <p className="text-2xl font-bold text-neutral-700">
                {resumen.ninos}
              </p>
            </div>
            <div className="flex flex-col h-full p-2 border border-neutral-200 shadow- rounded">
              <small>Total de personas confirmadas</small>
              <p className="text-2xl font-bold text-neutral-700">
                {resumen.total}
              </p>
            </div>
          </div>
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
