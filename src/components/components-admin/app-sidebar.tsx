/** Hooks */
import Link from "next/link";

/** Assets */
import { LayoutGrid, ListChecks } from "lucide-react";
/** Components */
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import AppLogo from "./app-logo";
import NavMain from "./nav-main";
/** Interfaces or Types */
import type { NavItem } from "@/types";
import { useUserData } from "@/hooks/useProvider";
import NavUserProvisional from "./nav-user-proviciona";
/** Consts */
const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Lista Invitados",
    href: "lista-invitados",
    icon: ListChecks,
  },
];

export default function AppSidebar() {
  const user = useUserData();

  const sidebarUser = user
    ? {
        honereeName: user.honereeName,
        username: user.username,
      }
    : {
        honereeName: "Rabe Innovation",
        username: "Rabe",
      };

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
        <NavUserProvisional user={sidebarUser} />
        {/* <NavUser /> */}
      </SidebarFooter>
    </Sidebar>
  );
}
