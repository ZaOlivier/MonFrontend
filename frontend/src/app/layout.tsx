
import { Analytics } from "@vercel/analytics/next"
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import HeaderGene from "@/components/barreNavi/headerGene";
import "../styles/globals.css";
import "../styles/responsiveCss.css"
// import RechercheDeProduit from "@/components/Navigation/barreDeReche";
// import Head from "next/head";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



// export const metadata: Metadata = {
//   title: "Lao | Votre boutique en ligne de confiance",
//   description: "Achetez en toute sécurité des produits électroniques, cosmétiques et plus encore. Livraison rapide partout en Côte d'Ivoire.",
//   keywords: ["e-commerce", "boutique en ligne", "produits", "électronique", "cosmétiques", "ProcheDeVous.vercel.app", "achat en ligne", "livraison rapide"],
//   robots: "index, follow",
//   viewport: "width=device-width, initial-scale=1.0",
//   themeColor: "#a70808ff",
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },

//   openGraph: {
//     title: "ProcheDeVous",
//     description: "Découvrez les meilleurs produits en ligne avec ProcheDeVous.",
//     url: "https://prochedevous.vercel.app",
//     siteName: "ProcheDeVous",
//     images: [
//       {
//         url: "/favicon.ico",
//         width: 1200,
//         height: 630,
//         alt: "Image de ProcheDeVous",
//       },
//     ],
//         locale: "fr_FR",
//     type: "website",
//   },
//     twitter: {
//     card: "summary_large_image",
//     title: "ProcheDeVous",
//     description: "Achetez en toute confiance en ligne.",
//   images: ["/og-image.jpg"],
//   },
  


// };



{/* <link rel="canonical" href="https://prochedevous.vercel.app" /> */}



export default function LayoutPanier({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="next-size-adjust" content=""/>
        <title>OLIVI | Acheter en toute securite avec nous</title>
        <meta name="description" content="Achetez en toute sécurité des produits électroniques, cosmétiques et plus encore. Livraison rapide partout en Côte d&#x27;Ivoire."/>
        <meta name="keywords" content="e-commerce,boutique en ligne,produits,électronique,cosmétiques,olivi,achat en ligne,livraison rapide"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="ProcheDeVous"/>
        <meta property="og:description" content="Découvrez les meilleurs produits en ligne avec olivi."/>
        <meta property="og:url" content="https://olivi.ci"/>
        <meta property="og:site_name" content="OLIVI"/>
        <meta property="og:locale" content="fr_FR"/>
        <meta property="og:image" content="https://olivi.vercel.app/og-image.jpg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:alt" content="Image de OLIVI"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="OLIVI"/>
        <meta name="twitter:description" content="Achetez en toute confiance en ligne."/>
        <meta name="twitter:image" content="https://olivi.vercel.app/og-image.jpg"/>
        </head>
      <body className="text-sm" >
        {/* <HeaderGene/> */}
         {/* <RechercheDeProduit/> */}
        
        <main className="">{children}</main>
        <Analytics/>
      </body>
      
    </html>
  );
}
