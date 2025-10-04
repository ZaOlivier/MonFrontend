"use client"

import QDeProduitDansLePanier from "@/components/augmenterQProduitPanier/QproduitP";
import { PanierStore } from "@/components/store global/panierStore";
import Image from "next/image";
import Link from "next/link";





const MonPanier=()=>{
    const panier=PanierStore((state)=>state.etatPanier)
    const Supprimer=PanierStore((state)=>state.SupprimerDuPanier)

    return(
    //     <>


    //     {panier.length === 0 ?(
      

    //     <p>rien</p>
     

    // ):(
    //     <>
       <>
       <div className='flex fixed border-b-2 border-b-gray-200 bg-white h-14 py-2 w-full '>
               <div className="w-auto ml-2 mr-16  py-1 sm:mr-70" >
                      <Link href="/produit" >
                        <Image src="/next.svg" alt="olvi vente en ligne" width={115} height={300} priority/>
                      </Link>
                    </div>
                    <p className="text-amber-300">Besion d&apos;aide?</p>
        {/* <form className="mx-1" > */}
            {/* <input type="search" placeholder="Rechercher d'autre produit..."
                className="w-full h-[5vh] text-center 
                rounded-2xl bg-gray-200"
                      
            /> */}
            
        {/* </form> */}
        </div>
        {panier.map((produit, _id)=>
        
            <div key={_id} className="h-1OO m-3">
                <div className="w-20  ">
                    <Image src={produit.image} alt={produit.nom} width={300} height={300}/>
                    
                     <p>{produit.nom} </p> 
                     <p>{produit.prix} </p>
                     <QDeProduitDansLePanier _id={produit._id}/>
                     <button onClick={()=>Supprimer(produit._id)}>supprimer</button>
                     <Link href={'/commande'}>Commander</Link>
                </div>
             </div>
        
        )}
    
       </>
    )}
    //     </>


    // )}
        
    //    </>   
    // )} 

    

               
            
        
            
            
            
        
    
    


export default MonPanier;

// {panier.map((produit)=>
//             <div key={produit._id} className="h-1OO m-3">
//                 <div className="w-20  ">
//                     <Image src={produit.image} alt={produit.nom} width={300} height={300}/>
                    
//                     <p>{produit.nom} </p> 
//                     <p>{produit.prix} </p>
//                     <button onClick={()=>Supprimer(produit._id)}>supprimer</button>
//                 </div>
//             </div>
//         )}