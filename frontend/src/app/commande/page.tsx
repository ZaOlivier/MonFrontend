"use client"

import { useState } from "react";
import Inscription from "@/components/Login/inscription";
import './commande.css'
import { useRouter } from "next/navigation";
import NouvelleCommandePasse from "@/components/nouvelleCommande/commande";
import { Menu, UserRoundPen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import ConfirmationCommande from "@/components/nouvelleCommande/confirmation";




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
                return<NouvelleCommandePasse/>               
                break;

            case 3:
                // return< ConfirmationCommande/>
                break;

            default:
                return<NouvelleCommandePasse/>
               
        }
    }

    //   setPagzVu('form')


     const suivant = () => {
        if (etape<=1) {
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

             <div className="sticky bg-white h-24 py-2 w-full top-0 z-50">
            <div className='flex mb-2'>
                <div className=" ml-2 w-auto py-1">
                      <span><Menu/> </span>
                    </div>
               <div className="w-auto ml-2  py-1 sm:mr-70" >
                      <Link href="/" >
                        <Image src="/next.svg" alt="olvi vente en ligne" width={100} height={300} priority/>
                      </Link>
                    </div>
                    <div className="w-auto sm:w-1/2 ml-6 mr-2" id="respCompte">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/#">
                      <UserRoundPen className="mx-3.5"/>
                      <p>Compte</p>
                    </Link>
                  </div>
                    <div><Link href="/#">
            {/* <UserCircle/> */}
            <p className="text-amber-300 border-l-2">Besion d&apos;aide?</p>
            </Link></div>
                    </div>
                    </div>



            {/* permet de suivre les etape pour la commande */}
            <p>Etape {etape}/2</p>

            <div className="stepper">
            <div className={etape>= 1 ? "step active" : "step"}>verification </div>
            <div className={etape >= 2 ? "step active" : "step"}>Formulaire de commande</div>
            {/* <div className={etape >= 3 ? "step active" : "step"}>Confirmation</div> */}
            {/* <div className={etape >= 4 ? "step active" : "step"}>Confirmation</div> */}
            </div>
            {/* <div className="lapage"> */}
            <EtapeC/>
            {/* </div> */}
            <button onClick={retour} >Retour</button>  
            <button onClick={suivant} >Suivant</button> 



            </>

    )
}