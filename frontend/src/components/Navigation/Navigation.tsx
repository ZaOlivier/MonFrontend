"use client"

import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { Menu } from 'lucide-react';
import Image from "next/image";
import RechercheDeProduit from "./barreDeReche";
import { PanierStore } from "../store global/panierStore";


export const Navigation=()=>{
  const NombreAuPanier=PanierStore((state)=>state.etatPanier)
    return(
    
          <header className="sticky top-0 z-50 w-full bg-white  py-3 border-2 sm:border-2 sm:border-red-500">
            <section className="block md:hidden">
                <div className="flex pl-3 mb-3 w-full border-2">
                    <div className="border-2 w-auto py-1">
                      <span><Menu/> </span>
                    </div>
                    <div className="w-auto ml-2 mr-16 border-2 py-1 sm:mr-70" >
                      <Link href="/produit" >
                        <Image src="/next.svg" alt="olvi vente en ligne" width={100} height={300} priority/>
                      </Link>
                    </div>
                    <section className="flex w-1/3 px-1.5 border-2">
                    <div className="w-auto border-2 mx-2.5 sm:w-1/2">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/panier">
                      <UserRoundPen/>
                    </Link>
                  </div>
                <div className="w-auto border-2 ml-1.5 sm:w-1/2">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/panier">
                      <ShoppingCart/>
                      <div className="absolute bottom-20 right-2 h-[18px] w-[18px] rounded-4xl bg-amber-300 text-blue-500 text-center">
                        <span >{NombreAuPanier.reduce((init, nombre)=> init + nombre.quantite, 0)
                      }</span>
                      </div>
                    </Link>
                  </div>
                  </section>
                </div>
                  <RechercheDeProduit/>
            </section>
            </header>
        
    )
}

// className="
//                 sm:block sm:w-auto
//                 md:w-auto md:border-blue-600  md:border-2"