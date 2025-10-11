"use client"

import QDeProduitDansLePanier from "@/components/augmenterQProduitPanier/QproduitP";
import SimulationRecherche from "@/components/Navigation/simulationBarreRech";
import ResumerPanier from "@/components/resumerPanier/resumerPanier";
import { PanierStore } from "@/components/store global/panierStore";
import Image from "next/image";
import Link from "next/link";






const MonPanier=()=>{
    const panier=PanierStore((state)=>state.etatPanier)
    const Supprimer=PanierStore((state)=>state.SupprimerDuPanier)

    return(
        <>
            <SimulationRecherche/>
            <ResumerPanier/>
           
            <div className="bg-white">
                <section>
                    <h1 className="text-white bg-gray-300 text-center">Mon panier</h1>
                </section>
        {panier.map((produit, _id)=>
        
            <div key={_id} className="h-1OO m-3 border-b-1 border-b-neutral-300 overflow-y-auto scrollbar-hidden">
                <div className="w-20  mb-2">
                    <Image src={produit.image} alt={produit.nom} width={300} height={300}/>
                    
                     <p>{produit.nom} </p> 
                     <p>{produit.prix} </p>
                     <QDeProduitDansLePanier _id={produit._id}/>
                     <button onClick={()=>Supprimer(produit._id)} className="text-red-500">supprimer</button>
                     {/* <Link href={'/commande'} className="text-amber-500">Commander</Link> */}
                </div>
             </div>
        
        )}
        </div>
    </>
    )}
       
    

export default MonPanier;

{/* // {panier.map((produit)=> */}
{/* //             <div key={produit._id} className="h-1OO m-3">
//                 <div className="w-20  ">
//                     <Image src={produit.image} alt={produit.nom} width={300} height={300}/>
                    
//                     <p>{produit.nom} </p> 
//                     <p>{produit.prix} </p>
//                     <button onClick={()=>Supprimer(produit._id)}>supprimer</button>
//                 </div>
//             </div>
//         )} */}