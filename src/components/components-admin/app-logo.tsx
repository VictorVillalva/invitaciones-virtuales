import { Anchor } from "lucide-react";

export default function AppLogo() {
  return (
    <>
      <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-primary-100 text-sidebar-primary-foreground">
        <Anchor className="size-5 fill-current" />
      </div>
      <div className="ml-1 grid flex-1 text-left text-sm">
        <span className="mb-0.5 truncate leading-tight font-semibold">
          Alerta de Genero
        </span>
      </div>
    </>
  );
}
