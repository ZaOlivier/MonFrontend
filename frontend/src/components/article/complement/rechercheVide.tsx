"use client"

import { Produit } from "@/types/types"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

  
  
export const ProduitComplementaire=async()=>{
    const[produit, setProduit]=useState<Produit[]>([])

    try{
         axios.get("https://olivi.onrender.com/produit/article")
        .then(res => setProduit(res.data))
        .catch(err => console.log(err))
      
        return(
        <>
            {produit.map((Produit, index)=>
                <div key={index} className="h-1OO bg-white pl-2 round"  >

                    <article className="flex w-40 " >

                        <Link href={'/detail'}>

                            <Image  src={Produit.image}  alt="Sac à dos pour homme chez Foluo" height={300} width={300}/>
                            <p>{Produit.nom } </p>
                            <p>{Produit.prix} </p>

                        </Link>

                    </article>
                </div>
            )}

        </>
    )} catch(err){
      console.error((err))
    }

}
    