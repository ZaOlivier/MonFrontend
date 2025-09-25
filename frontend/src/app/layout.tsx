

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation/Navigation";
import "../styles/globals.css";
import { Lumis } from "@/components/h/re";
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



export default function RootLayout({
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
      <body >
        <Lumis/>
{/*         
        <div className="w-full h-[8vh] ">
          <Image src="/es.gif"  alt="ff" width={300} height={300} className="w-full h-full"/>
        </div> */}
        <div><h5 className="bg-gray-400 text-white text-center border-2 w-full">Expose tes gammes de produit sur IDDA</h5></div>
        <Navigation/>
        <main className="border-green-600 ">{children}</main>
        <footer className="bg-gray-500">
          <div>
            <section className="bg-white text-center">
              <p>Expose tes produits sur IDDA et profite d'une vue et vente incroyable</p>
              <span>pour toute collaboration conctater nous au :</span><br />
              <span><strong>Tel: </strong> 07-15-92-65-91</span><br />
              <span><strong>whatsapp: </strong> 07-15-92-65-91</span><br />
              <span><strong>Ouvert 7jr/7 - 24h/24 (pour tout achat)</strong></span><br />
              <span>livraison partout en cote d'ivoire de<br /><strong>7jr/7 - de 8h-20h</strong></span>
            </section>
          </div>
          <div className="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
            elit. Inventore, veritatis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quibusdam, eius aliquid dolorem id iusto laborum ipsum commodi fugiat eveniet ducimus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quibusdam, eius aliquid dolorem id iusto laborum ipsum commodi fugiat eveniet ducimus.</p>
          </div>
        </footer>
      </body>
      
    </html>
  );
}
