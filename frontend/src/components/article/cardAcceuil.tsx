
export const dynamic = 'force-dynamic'; // utile si la data change souvent

import axios from "axios"
import { Produit } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import '../../styles/style.css'
import AddToCartButton from "../button/btnAjouterPanier";


export default async function CardHorizontal6Prod(){
    // const indexSouhaite = [0,1,3,4, 2, 5];

   
    try{
        const res = await
        axios.get("https://olivi.onrender.com/produit/article")
        const produit= res.data;
        
    
        return(
            <>
                <div >
                    <div className="py-2 border-2">
                        <section className="bg-white conten border-2">
                            <header className="bg-red-600 h-10 border-2">
                                <div className="pl-3 border-2">

                                    <p>Notre nouvelle gamme</p>

                                </div>
                            
                            </header>
                            <div className="flex overflow-x-auto scrollbar-hidden min-w-3xl">
                       
                        
                        
                                {/* {produit.filter((_:any,index:number) => indexSouhaite.includes(index))
                                    .map((Article:Produit, inxdex:string)=>( */}
                                    {produit.slice(0, 1).map((Article:Produit, inxdex:string)=>(

                                    <div key={inxdex} className="h-1OO bg-white pl-2 round border-2"  >

                                        <article className="flex w-40 border-2" >

                                            <Link href={`produit/${Article._id}`}>

                                                <Image  src={Article.image}  alt="Sac à dos pour homme chez Foluo" height={300} width={300}/>
                                                <p>{Article.nom } </p>
                                                <p>{Article.prix} </p>

                                            </Link>

                                        </article>
                                        <AddToCartButton produit={Article}/>
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


