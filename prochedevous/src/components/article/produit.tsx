import axios from "axios"
// import { CadreProduit } from "./cardProduit";
import { Produit } from "@/types/types";
import Image from "next/image";


export const Prod=async()=>{
    
    try{
        const res=await
        axios.get("http://localhost:5000/produit/affiche-client-produit")
        const produit= res.data;
    
    return(
        <>
        {produit.map((Article:Produit, inxdex:string)=>(
            // <CadreProduit key={Article.id}
            
            // />
            <section key={inxdex}>
            <div className="block ">
                <div className="bg-gray-600">
                    <Image src ={Article.image} alt="Sac à dos pour homme chez Foluo"/>
                    <p>{Article.nom} </p>
                    <p>{Article.prix} </p>
                </div>
            </div>
            </section>
                
        ))}
        </>
        
    )}catch(err){
        console.error((err))
    }

}