import type { Metadata } from "next";
import { Montserrat, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Configurer la police Montserrat avec les sous-ensembles appropriés
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Configurer la police Space Grotesk pour les titres
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Configurer la police JetBrains Mono pour le code
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RAYANE HAMADA | PORTFOLIO - ALTERNANCE RÉSEAUX & SYSTÈMES",
  description: "Portfolio professionnel de Rayane Hamada, étudiant en informatique à la recherche d'une alternance en administration réseaux et systèmes pour septembre 2025.",
  keywords: "Rayane Hamada, portfolio, alternance, réseaux, systèmes, informatique, BTS SIO, Licence Pro, admin réseau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${montserrat.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
