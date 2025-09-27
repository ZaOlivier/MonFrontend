import { useState } from "react";
import { PanierStore } from "../store global/panierStore";
import { QDeProduit } from "@/types/types";


const QDeProduitDansLePanier=({_id}:QDeProduit)=>{
    const etatPanier = PanierStore(state => state.etatPanier)
    const sup = PanierStore(state => state.SupprimerDuPanier)
    const setEtatPanier = PanierStore.setState
    const produit = etatPanier.find(p => p._id ===_id)

    const Augmenter=()=>{
        if (produit) {
      const updated = etatPanier.map(p =>
        p._id ===_id ? { ...p, quantite: p.quantite + 1 } : p
      )
      setEtatPanier({ etatPanier: updated })
    }
  
        
    };
    const Diminuer=()=>{
        if (produit && produit.quantite > 1) {
      const updated = etatPanier.map(p =>
        p._id === _id ? { ...p, quantite: p.quantite - 1 } : p
      )
      setEtatPanier({ etatPanier: updated })
    }else{
       sup(_id)
        
    }
  }

  if (!produit) return null

  
    return(
        <>
            <button onClick={Augmenter}>+</button>
                {produit.quantite}
            <button onClick={Diminuer}>-</button>
       
        </>
    )

}

export default QDeProduitDansLePanier;



        // else if (qte<0) {
        //     setqte(qte)
            
        // } 