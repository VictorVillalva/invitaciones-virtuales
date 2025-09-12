"use client";

import { Avatar, AvatarFallback} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import Cookies from "js-cookie";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

function getInitials(name: string): string {
  if (!name) return "";
  const words = name.trim().split(" ");
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function NavUserProvisional({
  user,
}: {
  user: {
    honereeName?: string;
    username?: string;
  };
}) {
  const { isMobile } = useSidebar();

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token"); // Borra la cookie del token
    localStorage.removeItem("userData");
    router.push("/gestor-invitaciones/login"); // Redirige a login
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg grayscale">
                <AvatarFallback className="rounded-lg">
                  {" "}
                  {user?.honereeName
                    ? getInitials(user.honereeName)
                    : "??"}{" "}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.honereeName}</span>
              </div>
              <DotsHorizontalIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarFallback className="rounded-lg">
                    {" "}
                    {user?.honereeName
                      ? getInitials(user.honereeName)
                      : "??"}{" "}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {user.honereeName}
                  </span>
                  {/* <span className="text-muted-foreground truncate text-xs">
                    {user.username}
                  </span> */}
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut />
              Cerrar Sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
