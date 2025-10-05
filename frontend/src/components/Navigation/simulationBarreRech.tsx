"use client"

import { Menu, Search, ShoppingCart, UserCircle, UserRoundPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PanierStore } from "../store global/panierStore";
import "../../styles/responsiveCss.css"

export default function SimulationRecherche(){
    const NombreAuPanier=PanierStore((state)=>state.etatPanier)
    return(
        <div className="sticky bg-white h-24 py-2 w-full top-0 z-50">
        <div className='flex mb-2'>
                <div className=" ml-2 w-auto py-1">
                      <span><Menu/> </span>
                    </div>
               <div className="w-auto ml-2  py-1 sm:mr-70" >
                      <Link href="/" >
                        <Image src="/next.svg" alt="olvi vente en ligne" width={100} height={300} priority/>
                      </Link>
                    </div>
                <div className="w-auto sm:w-1/2 ml-6 mr-2" id="respCompte">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/panier">
                      <UserRoundPen className="mx-3.5"/>
                      <p>Compte</p>
                    </Link>
                  </div>
            
            
            {!NombreAuPanier || NombreAuPanier.length === 0 ?( <div><Link href="#">
            {/* <UserCircle/> */}
            <p className="text-amber-300 border-l-2">Besion d&apos;aide?</p>
            </Link></div>

        ):(

            
           
            <div className="w-auto h-[4.5vh] border-b border-l border-t border-red-600 pr-2 border-2 rounded-br-3xl rounded-tl-3xl  " id="respPanier" style={{transition:"500ms", background:"red"}}>
                    
                    <Link href="/panier">
                        <section className="flex">
                      <ShoppingCart className="mx-2"/>
                      <p className="text-white">Panier</p>
                      </section>
                       
                      <div className="absolute bottom-18.5 right-14.5 h-[18px] w-[18px] rounded-4xl  bg-white text-blue-800 text-center" id="respPanierCount">
                        <span >{NombreAuPanier.reduce((init, nombre)=> init + nombre.quantite, 0)
                      }</span>
                      </div>
                    
                    </Link>
                    
            </div>
            )}
               
        </div>
        <Link href={"/recherche"}>
           <form  className="mx-3" >
            <input type="search" name="" id="" placeholder="Recherche sur Olivi"
                autoComplete="search"
                className="w-full h-8 text-center border-1 border-gray-300
                rounded-2xl mr-2"
                      
            />
        </form>
        </Link>
        </div>
        
    )
}