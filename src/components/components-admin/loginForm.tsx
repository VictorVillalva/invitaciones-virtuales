/** Hooks */
import { useState } from "react";
/** Components */
import { Button } from "../ui/button";
import { Input } from "../ui/input-rabe";
/** Assets */
import { Eye, EyeClosed } from "lucide-react";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);

  return (
    <form action="" className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Usuario</label>
        <Input 
            id="username" 
            type="text" 
            placeholder="Usuario" 
            required 
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Contraseña</label>
        <div className="relative">
          <Input
            id="password"
            type={showPass ? "text" : "password"}
            placeholder="********"
            required
          />
          <button
            type="button"
            onClick={() => setShowPass((v) => !v)}
            className="absolute inset-y-0 right-3 my-auto text-xs text-neutral-500"
            aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPass ? <EyeClosed size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>
      <Button className="bg-rabe-primary hover:bg-rabe-primary-800">
        Entrar
      </Button>
    </form>
  );
}
