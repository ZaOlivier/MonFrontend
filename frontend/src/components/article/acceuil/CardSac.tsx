
export const dynamic = 'force-dynamic'; // utile si la data change souvent

import axios from "axios"
import { Produit } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import '@/styles/style.css'
import AddToCartButton from "@/components/button/btnAjouterPanier";
// import AddToCartButton from "../../button/btnAjouterPanier";


export default async function Sac(){
    const indexSouhaite = [0,1,3,4, 2,5];

   
    try{
        const res = await
        axios.get("https://olivi.onrender.com/produit/article")
        const produit= res.data;
        
    
        return(
            <>
                <div >
                    <div className="py-2">
                        <section className="bg-white h-68">
                            <header className="h-8">
                                <div className="pl-3 h-8 bg-amber-200">

                                    <p className="py-1.5">Differents Sac pour tout vos besions</p>

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
        console.error((err))
    }

}




