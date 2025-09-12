"use client";
import { useSobre } from "@/hooks/useSobre";

interface SobreAnimationProps {
  children: React.ReactNode;
  classNameColorSobreSuperior?: string;
  classNameColorSobreInferior?: string;
  classNameColorSobreLaterales?: string;
}

export default function SobreAnimationInvitation({
  children,
  classNameColorSobreInferior,
  classNameColorSobreLaterales,
  classNameColorSobreSuperior
}: SobreAnimationProps) {
  const { isOpen, isComplete } = useSobre(); //Declaramos el Hook personalizado

  if (isComplete) {
    return <>{children}</>;
  }
  return (
    <>
      {/* Contenido original - siempre visible */}
      <div className="w-full h-full">{children}</div>
      {/* Capa de animación del sobre */}
      <div
        className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ zIndex: 9999 }}
      >
        <div className="relative w-full h-full">
          {/* Solapa superior del sobre */}
          <div
            className={`${classNameColorSobreSuperior || "bg-blue-500"} absolute top-0 left-0 w-full h-1/2  transition-all duration-1000 ease-in-out
                                    origin-bottom transform ${
                                      isOpen
                                        ? "-translate-y-full"
                                        : "translate-y-0"
                                    } `}
            style={{
              clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
              zIndex: 50,
            }}
          />

          {/* Solapas laterales */}
          <div
            className={`${classNameColorSobreLaterales || "bg-blue-400"} absolute top-0 left-0 w-1/2 h-full transition-transform duration-1000 ease-in-out
                                    origin-right transform ${
                                      isOpen
                                        ? "-translate-x-full"
                                        : "translate-x-0"
                                    }`}
            style={{ zIndex: 40 }}
          />
          <div
            className={`${classNameColorSobreLaterales || "bg-blue-400"} absolute top-0 right-0 w-1/2 h-full transition-transform duration-1000 ease-in-out
                                    origin-left transform ${
                                      isOpen
                                        ? "translate-x-full"
                                        : "translate-x-0"
                                    }`}
            style={{ zIndex: 40 }}
          />

          {/* Solapa inferior */}
          <div
            className={`${classNameColorSobreInferior || "bg-blue-600"} absolute bottom-0 left-0 w-full h-1/2 transition-transform duration-1000 ease-in-out
                                    origin-top transform ${
                                      isOpen
                                        ? "translate-y-full"
                                        : "translate-y-0"
                                    }`}
            style={{ zIndex: 40 }}
          />
        </div>
      </div>
    </>
  );
}
