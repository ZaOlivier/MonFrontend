"use client"

import QDeProduitDansLePanier from "@/components/augmenterQProduitPanier/QproduitP";
import SimulationRecherche from "@/components/Navigation/simulationBarreRech";
import { PanierStore } from "@/components/store global/panierStore";
import { Menu, UserRoundPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";






const MonPanier=()=>{
    const panier=PanierStore((state)=>state.etatPanier)
    const Supprimer=PanierStore((state)=>state.SupprimerDuPanier)

    return(
        <>
            <SimulationRecherche/>
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