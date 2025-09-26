
"use client";

import { PanierStore } from "../store global/panierStore"; 

const AddToCartButton = ({ produit}:any) => {
  const addCart= PanierStore((state:any) => state.addToCart);
    
//   const handleClick = () => {
//     addCart(produit);
//   };

    
  return (
    <button onClick={()=>AddToCartButton(produit) }
        className="border-2 rounded-3xl h-auto bg-orange-400"
    >
      Ajouter au panier
    </button>
  );
};

export default AddToCartButton;
