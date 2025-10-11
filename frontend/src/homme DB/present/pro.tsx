
export const dynamic = 'force-dynamic'; // utile si la data change souvent

import Link from "next/link";
import Image from "next/image";
import '@/styles/style.css'
import { ListeNouv } from "@/homme DB/listeProduits/listeProd";
// import AddToCartButton from "../../button/btnAjouterPanier";


export default async function Prot(){
    

   
  
        
    
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
                            <div className="grid grid-cols-2 gap-4 mt-0.5">
                       
                              {ListeNouv.map((Article, index)=>(
                                                 <div key={index} className="">

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
                                        {/* <AddToCartButton produit={Article}/> */}
                                        </div>
                                    </div>
                                ))}
                        
                            </div>
                        </section>
                    </div>
                </div>
        
            </>
        
        )

}