"use client";
/** Hooks */
import Image from "next/image";
import fondo from "@/assets/images/landing/image-paquetes-1.png";
import Rabe from "@/assets/images/landing/rabe-logo.png";
import LoginForm from "@/components/components-admin/loginForm";
import Link from "next/link";

export default function Login() {
  return (
    <main className="Login flex flex-col lg:flex-row">
      <section className="form w-full relative">
        <Link
          href="#"
          className="hidden Rabe absolute lg:flex flex-row items-center gap-1 top-6 left-8"
        >
          <div className="flex items-center">
            <Image src={Rabe} alt="Rabe Innovation" />
          </div>
          <span className="font-bold text-rabe-primary tracking-tight">
            Rabe Innovation
          </span>
        </Link>
        <div className="form-container flex flex-col justify-center items-center px-6 w-full h-screen">
          <div className="lg:max-w-[380px] flex flex-col gap-3">
            <Link
              href="#"
              className="lg:hidden Rabe flex flex-row items-center justify-center gap-1 top-6 left-8"
            >
              <div className="flex items-center">
                <Image src={Rabe} alt="Rabe Innovation" />
              </div>
              <span className="font-bold text-rabe-primary tracking-tight">
                Rabe Innovation
              </span>
            </Link>
            <div className="w-full flex flex-col items-center justify-center text-center">
              <h1 className="text-rabe-primary text-3xl font-bold">
                ¡Bienvenido de nuevo!
              </h1>
              <small className="text-rabe-primary-500">
                Ingresa tus credenciales para poder entrar al tu panel de
                invitaciones.
              </small>
            </div>
            <LoginForm />
            <div className="mt-6 flex flex-row justify-center font-bold">
              <small className="text-rabe-primary-300 tracking-[-0.02em] text-center">
                Todos los derechos reservados &copy; 2025 Rabe Innovation
              </small>
            </div>
          </div>
        </div>
      </section>
      <section className="image hidden lg:block w-full">
        <div className="image-container w-full h-screen bg-blue-400">
          <Image
            src={fondo}
            alt="Login-Fondo"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}
