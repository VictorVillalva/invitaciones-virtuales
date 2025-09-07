"use client";
/** Components */
import AppSidebarHeader from "@/components/components-admin/app-sidebar-header";
/** Interfaces or Types */
import { BreadcrumbItem } from "@/types";
/** Consts */
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Lista Invitados",
    href: "/administrador/lista-invitados",
  },
];

import { columnasInvitados } from "@/components/components-admin/datatable/columns";
import { DataTable } from "@/components/components-admin/datatable/datatable";
import api from "@/lib/api";
import React, { useEffect, useState } from "react";

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
export default function ListaInvitados() {
  const [data, setData] = useState<Invitado[]>([]);
  const [loading, setLoading] = useState(true);

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
  return (
    <>
      <AppSidebarHeader breadcrumbs={breadcrumbs} />
      <main className="flex flex-col px-8 py-6 gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-3xl text-rabe-primary-600">Lista de Invitados</h1>
          <small className="text-muted-foreground">Revisa el estado de confirmacion y otros datos mas de todos tus invitados.</small>
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
