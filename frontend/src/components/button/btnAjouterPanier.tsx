
"use client";

import { PanierStore } from "../store global/panierStore"; 

const AddToCartButton = ({produit}:any) => {
  const addCart= PanierStore((state:any) => state.addToCart);

    
  return (
    <button onClick={()=>addCart(produit) }
        className="border-2 rounded-3xl border-blue-500 h-auto bg-blue-400"
    >
      Ajouter au panier
    </button>
  );
};

export default AddToCartButton;
