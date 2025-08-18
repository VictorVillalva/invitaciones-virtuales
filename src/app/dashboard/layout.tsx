import AppLayoutInvitations from "@/components/components-admin/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AppLayoutInvitations breadcrumbs={breadcrumbs}>
        {children}
      </AppLayoutInvitations>
    </>
  );
}
