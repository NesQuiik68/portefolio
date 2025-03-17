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
  title: "RAYANE HAMADA | EN RECHERCHE D'ALTERNANCE RÉSEAUX & SYSTÈMES 2025",
  description: "Portfolio professionnel de Rayane Hamada, étudiant en informatique actuellement en recherche active d'une alternance en administration réseaux et systèmes pour septembre 2025 en région Grand Est.",
  keywords: "Rayane Hamada, portfolio, alternance 2025, réseaux, systèmes, informatique, BTS SIO, Licence Pro, admin réseau, recherche alternance, apprentissage, Grand Est",
  openGraph: {
    title: "Rayane Hamada | En recherche d'alternance Réseaux & Systèmes 2025",
    description: "Portfolio professionnel - À la recherche d'une alternance en administration réseaux et systèmes pour septembre 2025",
    images: ['/images/og-image.jpg'],
    type: 'website'
  },
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
      <body className={`${montserrat.className} overflow-fix`}>
        {children}
      </body>
    </html>
  );
}
