import axios from "axios"
import { CadreProduit } from "./cardProduit";
import { Produit } from "@/types/types";
import Image from "next/image";


export const Prod=async()=>{
    
    try{
        const res=await
        axios.get("http://localhost:5000/produit/affiche-client-produit")
        const produit= res.data;
    
    return(
        <>
        {produit.map((Article:Produit, inxdex:string|any)=>(
            // <CadreProduit key={Article.id}
            
            // />
            <div key={inxdex}>
                <Image src ={Article.image} alt="Sac à dos pour homme chez Foluo"/>
                <p>{Article.nom} </p>
            </div>
                
        ))}
        </>
        
    )}catch(err){
        console.error((err))
    }

}