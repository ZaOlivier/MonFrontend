"use client"

import { PanierStore } from "@/components/store global/panierStore";
import Image from "next/image";




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
        {panier.map((produit, _id)=>
        
            <div key={_id} className="h-1OO m-3">
                <div className="w-20  ">
                    <Image src={produit.image} alt={produit.nom} width={300} height={300}/>
                    
                     <p>{produit.nom} </p> 
                     <p>{produit.prix} </p>
                     <button onClick={()=>Supprimer(produit._id)}>supprimer</button>
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