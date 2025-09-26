import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageDeRecherche(){
    const recherche= useSearchParams()
    const query=recherche.get('q')
    const[produit, setProduit]=useState([])

    useEffect(()=>{
        if (query) {
            axios.get(`https://olivi.onrender.com/produit/article?q=${query}`)
            .then(res=>{
                setProduit(res.data)
            })
            
        }

    },[query])

    return(
         <div>
      <h1>Résultats pour : query</h1>
        {produit.map((prod:any, index:any)=> (
        <div key={index}>{prod.nom}</div>
      ))}
    </div>


    )
}