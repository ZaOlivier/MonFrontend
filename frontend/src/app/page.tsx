// import CardPromo from "@/components/article/acceuil/cardPromo";
// import CardPromo from "@/components/article/cardPromo";
import VetementFemme from "@/components/article/acceuil/CardFvetement";
// import CardPromo from "@/homme DB/present/cardPromo";
import Sac from "@/components/article/acceuil/CardSac";
import Telephone from "@/components/article/acceuil/CardTelephone";
import Promo from "@/components/article/acceuil/promo";
import SimulationRecherche from "@/components/Navigation/simulationBarreRech";
import Image from "next/image";
// import Prot from "@/homme DB/present/pro";




export default function Home () {

  
  return (
   <>
      <div>
      {/* <Image src="https://res.cloudinary.com/dmkfweibr/image/upload/w_320,h_56/v1760183472/bani_uiyoza.gif" alt="olivi" width={400} height={10} priority className="h-8"/> */}
      </div>
      <SimulationRecherche/>
      <div><h5 className="bg-white text-blue-600 text-center border-1 w-100%">Expose tes gammes de produit sur Olivi</h5></div>
      
      <Sac/>
      {/* <Telephone/> */}
      <Promo/>
      <VetementFemme/>
      {/* <CardPromo/>
      <Prot/> */}
      
   </>
  )
}
