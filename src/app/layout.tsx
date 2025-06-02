import type { Metadata } from "next";
import { inter} from "@/assets/fonts/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Invitacion Virtual",
  description: "Esta es una invitacion virtual para eventos especiales",
};

export default function RootLayout( { children,}: Readonly<{ children: React.ReactNode; }> ) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
