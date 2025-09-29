import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function NouvelleCommandePasse() {
    const [ville, setVille] = useState('');
    const [commune, setCommune] = useState('');
    const [quartier, setQuartier] = useState('');
    const [lieuDeLivraison, setLieuDELivraison] = useState('');
      const [modePaiement, setModePaiement] = useState('');
     const[message, setMessage]=useState('');


    const Commande=(async(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
        try{
            const res= await
            axios.post('https://olivi.onrender.com/commande/nouvelleCommande', {
            // infoUserCd:
            // produitCommande:
            modePaiement,
            provenance: {
                lieuDeLivraison,
                ville,
                commune,
                quartier
            }
            })
            // setInterval(() => {
                setMessage(res.data)
            // }, 100);
            console.log(modePaiement);
            console.log(lieuDeLivraison);
            console.log(ville);
            console.log(commune);
            console.log(quartier);
            

        }catch(err){
            const vi=console.error((err),'erreur')
            console.log(vi);
            
        }
    })

    return(
        <>
            <div>
                <p>{message} </p>
            </div>
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


            <p>Moyen de paiement disponible :</p>
            <input type="checkbox" name="Paiement" id="Paiement"  required
                value={modePaiement}
                // placeholder="Vous souhaitez etre livré ou ?"
                onChange={(e) =>
                setModePaiement(e.target.value)}
            /> 
            <label htmlFor="Paiement">Paiement à la livraison(si satisfait <Link href={'/information'} className="text-white">en savoir plus sur le sujet</Link>)</label><br />
            <button type="submit">Confirmer</button>
        </form>

        </>
    )
    
    
}