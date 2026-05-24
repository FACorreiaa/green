import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VerdePresente :: Construção e Manutenção de Espaços Verdes",
  description: "Líder em planeamento, construção e manutenção de jardins, relvados residenciais e corporativos, sistemas inteligentes de rega automática e tratamento profissional de piscinas em Portugal. 17 anos de experiência botânica.",
  keywords: "jardins, espaços verdes, rega automatizada, manutenção de piscinas, limpeza de terrenos, arquitetura paisagista, relvado, portugal, verdepresente",
  robots: "index, follow",
  openGraph: {
    title: "VerdePresente :: Construção e Manutenção de Espaços Verdes",
    description: "Serviço de excelência botânica e manutenção de espaços exteriores. Rega automática, limpeza florestal e tratamento de piscinas.",
    url: "https://www.verdepresente.pt",
    siteName: "VerdePresente.pt",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
