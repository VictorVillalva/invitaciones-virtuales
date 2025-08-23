/** Hooks */
import Link from "next/link";

/** Assets */
import { LayoutGrid, ListChecks } from "lucide-react";
/** Components */
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import AppLogo from "./app-logo";
import NavUser from "./nav-user";
import NavMain from "./nav-main";
/** Interfaces or Types */
import type { NavItem } from "@/types";
/** Consts */
const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/administrador/dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Lista Invitados",
    href: "/administrador/lista-invitados",
    icon: ListChecks,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
        
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/administrador/dashboard" prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} titulo="Acciones" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
