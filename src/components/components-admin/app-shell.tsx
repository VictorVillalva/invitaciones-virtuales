import React from "react";
import { SidebarProvider } from "../ui/sidebar";
interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
}
export default function AppShell({ children, variant = 'sidebar' }: AppShellProps) {
  if (variant === "header") {
    return <div className="flex min-h-screen w-full flex-col">{children}</div>;
  }
  return <SidebarProvider defaultOpen={true}>{children}</SidebarProvider>;
}
