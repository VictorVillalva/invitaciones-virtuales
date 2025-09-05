import { UserProvider } from "@/context/UserContext";

export default function AdministradorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
}
