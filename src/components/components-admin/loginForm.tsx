/** Hooks */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from 'js-cookie';

/** Components */
import { Button } from "../ui/button";
import { Input } from "../ui/input-rabe";
/** Assets */
import { Eye, EyeClosed } from "lucide-react";
import axios from "axios";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
  password: z.string().min(4),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);

  const router = useRouter();
  const { setUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginData) => {
    try {
      const urlBase = process.env.NEXT_PUBLIC_BACKEND_URL;
      const { data } = await axios.post(`${urlBase}/api/invitation/sign-in`, {
        credentials: {
          username: values.username,
          password: values.password,
        },
      });
      const userData = {
        token: data.data.token,
        uuid: data.data.uuid,
        username: data.data.username,
        honereeName: data.data.honereeName,
        eventType: data.data.eventType,
        eventDate: data.data.eventDate,
        eventDeadLine: data.data.eventDeadLine,
      };

      // Supón que el token viene en data.token
      // El token está en data.data.token
      Cookies.set("token", data.data.token, { expires: 7 });
      localStorage.setItem("userData", JSON.stringify(userData));
      setUser(userData); // También en contexto para el uso inmediato
      router.push("administrador/dashboard");
    } catch {
      //console.log(error);
      setError("root", {
        type: "manual",
        message: "Credenciales inválidas. Por favor, inténtalo de nuevo.",
      });
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Usuario</label>
        <Input
          id="username"
          type="text"
          placeholder="Usuario"
          required
          {...register("username")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Contraseña</label>
        <div className="relative">
          <Input
            id="password"
            type={showPass ? "text" : "password"}
            placeholder="********"
            {...register("password")}
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
      {errors.root && <div className="text-red-600">{errors.root.message}</div>}
      <Button className="bg-rabe-primary hover:bg-rabe-primary-800">
        {isSubmitting ? 'Ingresando...' : 'Ingresar'}
      </Button>
    </form>
  );
}
