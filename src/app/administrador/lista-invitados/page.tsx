/** Components */
import AppSidebarHeader from "@/components/components-admin/app-sidebar-header";
/** Interfaces or Types */
import { BreadcrumbItem } from "@/types";
/** Consts */
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Lista Invitados',
    href: '/administrador/lista-invitados',
  },
];
export default function ListaInvitados() {
  return (
    <>
      <AppSidebarHeader breadcrumbs={breadcrumbs} />
      <div>ListaInvitados aqui va</div>
    </>
  )
}
