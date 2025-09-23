import axios from "axios"
// import { CadreProduit } from "./cardProduit";
import { Produit } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import '../../styles/style.css'


export const Prod=async()=>{
    
   

    try{
        const res = await
        axios.get("https://olivi.onrender.com/produit/article")
        const produit= res.data;
        
    
    return(
        <>
        

            <section className="flex overflow-x-auto scrollbar-hidden ">
          {produit.map((Article:Produit, inxdex:string)=>(
            <div key={inxdex} >
                <div className="bg-gray-600">
                    <Link href={'/produit'}>
                    <Image  src={Article.image}  alt="Sac à dos pour homme chez Foluo" height={150} width={150}/>
                    <p>{Article.nom } </p>
                    <p>{Article.prix} </p>
                    </Link>
                    <button>ajouter au panier</button>
                </div>
            </div>
            ))}
            </section>
        
        </>
        
    )}catch(err){
        console.error((err))
    }

}