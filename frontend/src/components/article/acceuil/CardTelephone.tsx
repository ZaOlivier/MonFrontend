
export const dynamic = 'force-dynamic'; // utile si la data change souvent

import axios from "axios"
import { Produit } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import '@/styles/style.css'
import AddToCartButton from "@/components/button/btnAjouterPanier";
// import AddToCartButton from "../../button/btnAjouterPanier";


export default async function Telephone(){
    const indexSouhaite = [3,0,1,2];
// http://localhost:5000/produit/categorie/telephone
// https://olivi.onrender.com/produit/categorie/telephone
   
    try{
        const res = await
        axios.get("http://localhost:5000/produit/categorie/telephone")
        const produit= res.data;
        
    
        return(
            <>
                <div >
                    <div className="pb-1">
                        <section className="bg-white h-68">
                            <header className="h-8">
                                <div className="pl-3 h-8 bg-blue-500">

                                    <p className="py-1.5">Telephone à porter de main</p>

                                </div>
                            
                            </header>
                            <div className="flex overflow-x-auto scrollbar-hidden">
                       
                                  
                                {produit.filter((_:Produit,index:number) => indexSouhaite.includes(index))
                                    .map((Article:Produit, inxdex:string)=>(
                                    // {produit.slice(0, 6).map((Article:Produit, inxdex:string)=>(

                                    <div key={inxdex} className=" bg-white pl-2 mt-0.5">

                                        <article className="flex w-40 " >

                                            <Link href={`produit/${Article._id}`}>

                                                <Image  src={Article.image}  alt="Sac à dos pour homme chez Foluo" height={300} width={300}/>
                                               <div className="text-center">
                                                <p>{Article.nom } </p>
                                                <p>{Article.prix} </p>
                                                </div>

                                            </Link>

                                        </article>
                                        <div className="px-4.5 pt-1">
                                        <AddToCartButton produit={Article}/>
                                        </div>
                                    </div>
                                ))}
                        
                            </div>
                        </section>
                    </div>
                </div>
        
            </>
        
        )}catch(err){
       console.error("Erreur lors de la récupération :", err.response?.data || err.message);
    }

}

 


