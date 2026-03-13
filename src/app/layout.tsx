import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "spider-verse",
  description: "Criando uma aplicação React com Next.js e TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="opções de menu"
            width={36}
            height={25}
          />
          <Image
            src="/spider-logo.svg"
            alt="logo da spider-verse"
            width={260}
            height={70}
          />
          <Image
            src="/icons/user.svg"
            alt="Usuário logado"
            width={36}
            height={25}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
