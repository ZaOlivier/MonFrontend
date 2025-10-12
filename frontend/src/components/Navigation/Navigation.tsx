"use client"

import Link from "next/link";
import { CircleQuestionMark, ShoppingCart, UserRound } from 'lucide-react';
import Image from "next/image";
import { PanierStore } from "../store global/panierStore";
import { useRouter } from 'next/navigation'
import { useState } from "react";


export  const Navigation=()=>{
  const NombreAuPanier=PanierStore((state)=>state.etatPanier)
  const[query, setQuery]=useState('')
      const router= useRouter()
  
      const handleClick=(e: React.FormEvent)=>{
          e.preventDefault()
          if (query.trim()) {
              router.push(`/search?q=${encodeURIComponent(query)}`)
          }
      }
  
    return(
      
      <header className=" hidden sm:flex border-b-1 border-gray-300 sm:w-full sticky top-0 z-50  bg-white  py-3 items-center sm:justify-normal md:justify-normal lg:justify-normal lg:border-amber-400">
        <div className="sm:ml-3 sm:mr-3 md:mr-10 md:ml-10 xl:mr-25 xl:ml-20">
          <Link href="/produit" >
            <Image src="/next.svg" alt="olvi vente en ligne" width={100} height={300} priority/>
          </Link>
        </div>
        <div>
          <form onSubmit={handleClick} className="sm:h-10 sm:w-78 md:mr-6 lg:w-140  xl:mr-10 2xl:w-200 ">
            <input type="search" name="" placeholder="recherche d'autres articles, produit, categor..."
        
              autoComplete="search"
              value={query}
              onChange={(e)=> setQuery(e.target.value)}
              className="sm:border-1 sm:border-red-500 sm:h-[100%] sm:w-[77%] mr-2 lg:w-[87%] rounded"

            />
            <button className="bg-red-500 h-[100%] text-white rounded">recherche</button>
          </form>
    
        </div>
        <div className="sm:ml-0 md:mr-3 xl:mr-8">
          <Link href="/#">

            <UserRound className="mx-2"/>
                    
          </Link>
        </div>
        <div className=" md:mr-4 xl:mr-8">
          <Link href="/#" className="flex items-center mr-2">
            <CircleQuestionMark />
            <p className="text-amber-300 pl-1">Aide</p>

          </Link>
        </div>
        <div className="w-auto h-[100%]  border-red-600 pr-2 border-2 rounded-br-3xl rounded-tl-3xl sm:bg-red-500 ">
                    
          <Link href="/panier">
            <section className="flex">
              <ShoppingCart className="mx-2"/>
              <p className="text-white">Panier</p>
            </section>
                       
            <div className="sm:absolute sm:bottom-8 sm:right-15.5 h-[18px] w-[18px] rounded-4xl  bg-white sm:text-blue-800 text-center   md:right-20 lg:right-22 xl:right-48 2xl:right-61">
              <span >
                {NombreAuPanier.reduce((init, nombre)=> init + nombre.quantite, 0)}
              </span>
            </div>
                    
          </Link>
                    
        </div>
                    
       
            
             
      </header>
        
    )
}