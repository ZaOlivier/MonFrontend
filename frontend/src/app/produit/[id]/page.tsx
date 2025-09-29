// import {Props } from "@/types/types";
import axios from "axios";
import Image from "next/image";

const fetchProduit = async (id:string) => {
  try {
    const res = await axios.get(`https://olivi.onrender.com/produit/article/${id}`);
    return res.data;
  } catch (err) {
    console.error("Erreur lors de la récupération du produit :", err);
    return null;
  }
  
};

// { params: Paramettre })

export default async function Page({ params }:{params : {id:string}})  {
  const produit = await fetchProduit(params.id)
  console.log(produit);
 
  // encore
  
  if (!produit) {
    return <p>Produit introuvable</p>;
  }

  return (
    <div>
      <Image src={produit.image} alt={produit.nom} width={230} height={300}/>
      <h1>{produit.nom}</h1>
      <p>{produit.prix} </p>
      <p>{produit.description}</p>
      {/* Ajoute ici le reste des infos */}
    </div>
  );
}

