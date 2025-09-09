'use client'
/** Components */
import AppContent from "@/components/components-admin/app-content";
import AppShell from "@/components/components-admin/app-shell";
import AppSidebar from "@/components/components-admin/app-sidebar";

//Nota: El body solo se modifica en el layout de la app, no en el de la pagina
export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar" className="overflow-x-hidden">
          {children}
        </AppContent>
      </AppShell>
    </>
  );
}
