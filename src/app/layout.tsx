import type { Metadata } from "next";
import { playwrite } from "@/assets/fonts/fonts"
import "./globals.css";
import bgImage from "@/assets/images/DanielaMedelXV/bg-blue-flowers.jpg"


export const metadata: Metadata = {
  title: "Invitacion Virtual",
  description: "Esta es una invitacion virtual para eventos especiales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playwrite.className} antialiased relative`}
      >
        <div className="absolute inset-0 opacity-5 h-auto" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
