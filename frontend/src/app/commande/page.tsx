"use client"


import Connexion from "@/components/Login/connexion";
import { useState } from "react";
import Inscription from "@/components/Login/inscription";
import './commande.css'
import { useRouter } from "next/navigation";



export default function EtapeCd(){
   const[etape, setEtape]=useState(1)
   const router=useRouter()

    // const[pageVu, setPagzVu]=useState()
    // ici c'est la logique de la page de commande 

    const EtapeC=()=>{
        switch (etape) {

            case 1:
                return<Inscription/>

                break;
            case 2:              
                return<Inscription/>               
                break;

            case 4:
                return<Connexion />
                break;

            default:
                return<Connexion/>
        }
    }

    //   setPagzVu('form')


     const suivant = () => {
        if (etape<=3) {
            setEtape(prev => prev + 1);}
            // setPagzVu('b')
            // setPagzVu('b')
        }


  const retour = () => { 
    
if (etape === 1) {
  router.push('/panier'); // ou la route exacte de ton panier
} else if (etape > 1) {
  setEtape(prev => prev - 1);
}


   }


    return(
            <>
            {/* permet de suivre les etape pour la commande */}
            <p>{etape}</p>

            <div className="stepper">
            <div className={etape>= 1 ? "step active" : "step"}>Formulaire de commande </div>
            <div className={etape >= 2 ? "step active" : "step"}>Mode de paiement</div>
            <div className={etape >= 3 ? "step active" : "step"}>verification</div>
            <div className={etape >= 4 ? "step active" : "step"}>Confirmation</div>
            </div>
            {/* <div className="lapage"> */}
            <EtapeC/>
            {/* </div> */}
            <button onClick={retour} >Retour</button>  
            <button onClick={suivant} >Suivant</button> 



            </>

    )
}