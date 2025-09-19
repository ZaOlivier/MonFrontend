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
   title: "ProcheDeVous | Votre boutique en ligne de confiance",
  description: "Achetez en toute sécurité des produits électroniques, cosmétiques et plus encore. Livraison rapide partout en Côte d'Ivoire.",
  keywords: ["e-commerce", "boutique en ligne", "produits", "électronique", "cosmétiques", "ProcheDeVous", "achat en ligne", "livraison rapide"],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
   icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "ProcheDeVous",
    description: "Découvrez les meilleurs produits en ligne avec ProcheDeVous.",
    url: "https://prochedevous.ci",
    siteName: "ProcheDeVous",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Image de ProcheDeVous",
      },
    ],
        locale: "fr_FR",
    type: "website",
  },
    twitter: {
    card: "summary_large_image",
    title: "ProcheDeVous",
    description: "Achetez en toute confiance en ligne.",
  images: ["/og-image.jpg"],
  },
  


};


<link rel="canonical" href="https://prochedevous.ci" />



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children} </main>
      </body>
      
    </html>
  );
}
