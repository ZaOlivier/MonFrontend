import axios from "axios";
import { useState } from "react";

export default function NouvelleCommandePasse() {
    const [ville, setVille] = useState('');
    const [commune, setCommune] = useState('');
    const [quartier, setQuartier] = useState('');
    const [lieuDeLivraison, setLieuDELivraison] = useState('');
     const[message, setMessage]=useState('');


    const Commande=(async(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
        try{
            const res=await
            axios.post('https://olivi.onrender.com/administration/commande_create', {
            // infoUserCd: utilisateur._id,
            // produitCommande: produit._id,
            lieuDeLivraison: 'Abidjan',
            modePaiement: 'Paiement à la livraison',
            provenance: {
                lieuDeLivraison,
                ville,
                commune,
                quartier
            }
            })
            setInterval(() => {
                setMessage(res.data)
            }, 100);
            console.log(message);
            

        }catch(err){
            console.error((err))
        }
    })

    return(
        <>
        
        <form onSubmit={Commande} >
            <input type="text" 
                value={ville}
                placeholder="Ville ?"
                onChange={(e) =>
                setVille(e.target.value)}
            />
            <input type="text" 
                value={commune}
                placeholder="Commune ?"
                // pattern="[0-9]{10}"
                // title="Entrez un numéro valide à 10 chiffres"
                onChange={(e) =>
                setCommune(e.target.value)}
            />
            <input type="text" 
                value={quartier}
                placeholder="Quartier ?"
                onChange={(e) =>
                setQuartier(e.target.value)}
            />
            <input type="text" 
                value={lieuDeLivraison}
                placeholder="Vous souhaitez etre livré ou ?"
                required
                onChange={(e) =>
                setLieuDELivraison(e.target.value)}
            />
            <br />

            <input type="checkbox" name="Paiement" id="Paiement"  required/> <label htmlFor="Paiement">Paiement à la livraison</label>
            <button type="submit">Confirmer</button>
        </form>

                    <div>
                        <h4>{message} </h4>
                    </div>
        </>
    )
    
    
}