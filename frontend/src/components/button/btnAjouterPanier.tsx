
"use client";

import { Produit } from "@/types/types";
import { PanierStore } from "../store global/panierStore"; 

const AddToCartButton = ({ produit }: { produit: Produit })=> {
  const addCart= PanierStore((state) => state.AjouterAuPanier);

    
  return (
    <button onClick={()=>addCart(produit) }
        className="border-2 rounded-3xl border-blue-500 h-auto bg-blue-400"
    >
      Ajouter au panier
    </button>
  );
};

export default AddToCartButton;
