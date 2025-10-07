// import AddToCartButton from "@/components/button/btnAjouterPanier";
import AddToCartButton from "@/components/button/btnAjouterPanier";
import { ListeNouv } from "@/homme DB/listeProduits/listeProd";
// import { Produit } from "@/types/types";
import Image from "next/image";
import Link from "next/link";


export default function CardPromo(){

    return(
        <><br />
            
                <div className="flex overflow-x-auto scrollbar-hidden">
                   {ListeNouv.map((Article, index)=>(
                    <div key={index} className="">
                        <article className="flex w-40" >
                        <Link href={`produit/${Article._id}`}>
                        <Image src={Article.image} alt={Article.nom} width={300} height={300}/>
                        <p>{Article.nom} </p>
                        <p>{Article.prix} </p>
                        </Link>
                        </article>
                        {/* <AddToCartButton produit={Article}/> */}

                    </div>

                   ))}
                </div>
           
        </>
    )

}