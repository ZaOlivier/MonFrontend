"use client"

import {ShoppingCart, UserRoundPen } from "lucide-react";
import Link from "next/link";
import { PanierStore } from "../store global/panierStore";
import { House } from 'lucide-react'

export default function MobilNavigation(){
    const NombreAuPanier=PanierStore((state)=>state.etatPanier)

    return(
        <>
            <div className="fixed bg-white w-full h-20 text-sm border-t-1 border-t-gray-300">
                <section className="flex w-100% px-1.5  justify-center my-3">
                    <div className="w-auto mr-2  sm:w-1/2">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/">
                      <House className="mx-3"/>
                      <p>Accueil</p>
                    </Link>
                  </div>
                    <div className="w-auto  mx-3 sm:w-1/2">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/categories">
                      <UserRoundPen className="mx-6"/>
                      <p>Categories</p>
                    </Link>
                  </div>              
                    <div className="w-auto  mx-3 sm:w-1/2">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/panier">
                      <ShoppingCart className="mx-2"/>
                      <p>Panier</p>
                       {!NombreAuPanier || NombreAuPanier.length === 0 ?( <div></div> ):(
                      <div className="absolute bottom-13 right-23 h-[18px] w-[18px] rounded-4xl bg-amber-300 text-blue-500 text-center">
                        <span >{NombreAuPanier.reduce((init, nombre)=> init + nombre.quantite, 0)
                      }</span>
                      </div>)}
                    
                    </Link>
                  </div>
                    <div className="w-auto  ml-3 sm:w-1/2">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/panier">
                      <UserRoundPen className="mx-4"/>
                      <p>Compte</p>
                    </Link>
                  </div>
                </section>
            </div>
            
        </>
    )
}