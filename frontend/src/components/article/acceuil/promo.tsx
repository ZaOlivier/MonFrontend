export const dynamic = 'force-dynamic'; // utile si la data change souvent

import axios from "axios"
import { Produit } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import '@/styles/style.css'
// import AddToCartButton from "../../button/btnAjouterPanier";


export default async function Promo(){
    const indexSouhaite = [8,0,1,7,9, 2];

   
    try{
        const res = await
        axios.get("https://olivi.onrender.com/produit/article")
        const produit= res.data;
        
    
        return(
            <>
                <div >
                    <div className="pb-1">
                        <section className="bg-white">
                            <header className="h-8">
                                <div className="pl-3 h-8 bg-blue-400">

                                    <p className="py-1.5">Offre de la semaine</p>

                                </div>
                            
                            </header>
                            <div className="grid grid-cols-2 gap-4 mt-0.5">
                       
                                  
                                {produit.filter((_:Produit,index:number) => indexSouhaite.includes(index))
                                    .map((Article:Produit, inxdex:string)=>(
                                    // {produit.slice(0, 6).map((Article:Produit, inxdex:string)=>(

                                  

                                        <article key={inxdex} className=" bg-white" >

                                            <Link href={`produit/${Article._id}`}>

                                                <Image  src={Article.image}  alt="Sac à dos pour homme chez Foluo" height={300} width={300}/>
                                                <div className="text-center">
                                                <p>{Article.nom } </p>
                                                <p>{Article.prix} </p>
                                                </div>

                                            </Link>

                                        </article>
                                        // {/* <AddToCartButton produit={Article}/
                    
                                ))}
                        
                            </div>
                        </section>
                    </div>
                </div>
        
            </>
        
        )}catch(err){
        console.error((err))
    }

}




