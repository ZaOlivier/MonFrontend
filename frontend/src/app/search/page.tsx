"use client"

import AddToCartButton from "@/components/button/btnAjouterPanier";
import {Produit } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {useEffect, useState } from "react";


export default  function PageDeRecherche(){
    const recherche= useSearchParams()
    const query=recherche.get('q')
    const[produit, setProduit]=useState<Produit[]>([])
    // const[message, setMessage]=useState<string>("")
  
    
   useEffect(() => {
    if (query) {
      axios.get(`https://olivi.onrender.com/produit/search?q=${query}`)
        .then(res => setProduit(res.data))
        .catch(err => console.log(err))
    }
  }, [query])

  return (
    <>
    {!produit || produit.length === 0 ?(
      <>

      <div className="h-screen w-full text-center text-sm lg:text-lg text-white">
        <section className="border-2 h-1/2">
          <p className="text-black m-6">Désolé aucun resultat pour "{query}"</p>
          <div className="mb-10">
            <p>-Vérifier si le nom est correcte</p>
            <p>-Ou vérifier votre connexion</p>

          </div>
          <div>
            <Link href={'/'} className="min-w-[40vw]  p-1 border-2 rounded-2xl">Revenier à l'acceuil</Link>
          </div>
        </section>
          
      </div>
     
      </>
    ):(

    <div className="grid grid-cols-2  md:grid-cols-3 gap-1">
      {produit.map((p) => (
        <div key={p._id} className=" border p-2 m-1 rounded bg-white">
          <div className="ralive border-r-2 h-1/10 w-1/3 rounded-r-4xl bottom-20 ml-24 bg-amber-300 py-1 px-0.5">
          <p className="text-sm">promo</p>
          </div>
          <Image src={p.image} alt={p.nom} width={300} height={300} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-semibold">{p.nom}</h2>
          <p>{p.prix} FCFA</p>
          <p className="text-sm text-gray-600">{p.description}</p>
           <div className="my-2">
            <AddToCartButton produit={p}/>
           </div>
        </div>
      ))}
    </div>
    )}
    
    </>
    )
}

                 
    
