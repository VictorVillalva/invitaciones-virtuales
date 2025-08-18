import React from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import AppLogo from "./app-logo";
import Link from "next/link";
import NavOpciones from "./nav-opciones";
import { ChartLine, LayoutGrid, List, Mailbox, Shield, Users } from "lucide-react";
import type { NavItem } from "@/types";
import NavUser from "./nav-user";

const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Quejas",
    href: "/quejas",
    icon: Mailbox,
  },
  {
    title: "Estadisticas",
    href: "/estadisticas",
    icon: ChartLine,
  },
  {
    title: "Catalogo",
    href: "/catalogos",
    icon: List,
    subitems: [
      {
        title: "Tipo de Violencia",
        url: "/tipo-de-violencia",
      },
    ],
  },
];

const adminNavItems: NavItem[] = [
  {
    title: "Usuarios",
    href: "/usuarios",
    icon: Users,
  },
  {
    title: "Roles",
    href: "/roles",
    icon: Shield,
  },
];

const catalogoNavItems: NavItem[] = [
  {
    title: "Lista de Catalogos",
    href: "/catalogos",
    icon: List,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
        
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard" prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavOpciones items={mainNavItems} titulo="Acciones" />
        <NavOpciones items={adminNavItems} titulo="Administración" />
        <NavOpciones items={catalogoNavItems} titulo="Catálogos" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
