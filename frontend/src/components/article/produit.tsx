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
        
                <div >
                    <div className="py-8">
                    <section >
                        <header className="bg-red-600 h-10">
                            <div className="pl-3">
                                <p >Notre nouvelle gamme</p>
                            </div>
                            
                        </header>
                        <div className=" flex overflow-x-auto scrollbar-hidden w-100%">
                       
                        
                        
                        {produit.map((Article:Produit, inxdex:string)=>(
                            <div key={inxdex} className="h-1OO bg-white pl-2" >
                                 <article className="flex w-40" >
                                <Link href={'/produit'} className="">
                                    <Image  src={Article.image}  alt="Sac à dos pour homme chez Foluo" height={150} width={150}/>
                                    <p>{Article.nom } </p>
                                    <p>{Article.prix} </p>
                                </Link>
                                </article>
                                <button>ajouter au panier</button>
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

export const Produ=async()=>{
    
   

    try{
        const res = await
        axios.get("https://olivi.onrender.com/produit/article")
        const produit= res.data;
        
    
        return(
            <>
        
                <div className="">
                    <section >
                        <header className="bg-red-600 h-10">
                            <div className="pl-3">
                                <p >Notre nouvelle gamme</p>
                            </div>
                            
                        </header>
                        <div className=" flex overflow-x-auto scrollbar-hidden">
                       
                        
                        
                        {produit.slice(2, 6).map((Article:Produit, inxdex:string)=>(
                            <div key={inxdex} className="h-1OO bg-white pl-2" >
                                 <article className="flex w-40" >
                                <Link href={'/produit'} className="">
                                    <Image  src={Article.image}  alt="Sac à dos pour homme chez Foluo" height={150} width={150}/>
                                    <p>{Article.nom } </p>
                                    <p>{Article.prix} </p>
                                </Link>
                                </article>
                                <button>ajouter au panier</button>
                            </div>
                        ))}
                        
                        </div>
                    </section>
                </div>
        
            </>
        
        )}catch(err){
        console.error((err))
    }

}