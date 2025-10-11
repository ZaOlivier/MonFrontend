import Link from "next/link";
import { PanierStore } from "../store global/panierStore";


export default function ResumerPanier(){
    const panier=PanierStore((state)=>state.etatPanier)
    const TotalPrixPanier = panier.reduce((prixtotal, details)=>
    prixtotal +  details.prix * details.quantite, 0
    );
    const ResumeQte= panier.reduce((quantite, details)=>
        quantite + details.quantite, 0
    )

    return(

        <>
         <div className="sticky top-24 z-50 bg-white mb-4">
                <section>
                    <h1 className="bg-sky-300">Détails</h1>
                    <p>Montants Totals: {TotalPrixPanier} FCFA</p>
                    <div className="flex">
                    <p className="mr-14">Nombres d&apos;articles: {ResumeQte}</p> <Link href={'/commande'} className="text-sky-400">Commander</Link>
                    </div>
                    <p>Livraison: 0 FCFA (Gratuit)</p>
                </section>
            </div>
        
        </>

    )

}