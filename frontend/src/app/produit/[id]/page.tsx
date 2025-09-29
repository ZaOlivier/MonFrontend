import { Paramettre } from "@/types/types";
import axios from "axios";

const fetchProduit = async (id:string) => {
  try {
    const res = await axios.get(`https://olivi.onrender.com/produit/article/${id}`);
    return res.data;
  } catch (err) {
    console.error("Erreur lors de la récupération du produit :", err);
    return null;
  }
  
};

export default async function Page({ params }: { params: Paramettre }) {
  const produit = await fetchProduit(params.id)
  console.log(produit);
 
  
  
  if (!produit) {
    return <p>Produit introuvable</p>;
  }

  return (
    <div>
      <h1>{produit.nom}</h1>
      <p>{produit.description}</p>
      {/* Ajoute ici le reste des infos */}
    </div>
  );
}

