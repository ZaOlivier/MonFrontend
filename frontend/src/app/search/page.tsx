"use client"

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function PageDeRecherche(){
    const recherche= useSearchParams()
    const query=recherche.get('q')
    const[produit, setProduit]=useState<any>([])

    useEffect(()=>{
          axios.get(`https://olivi.onrender.com/produit/search?q=${query}`)
            .then(res=>{
            
        if (res.data.lenght===0) {
            setProduit("aucun produit");
             
        }else{
            setProduit(res.data)
        }
    
        })

    },[query])

    return(
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {produit.map((p:any) => (
        <div key={p._id} className="border p-2 rounded">
          <img src={p.image} alt={p.nom} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-semibold">{p.nom}</h2>
          <p>{p.prix} FCFA</p>
          <p className="text-sm text-gray-600">{p.description}</p>
        </div>
      ))}
    </div>



    )
}