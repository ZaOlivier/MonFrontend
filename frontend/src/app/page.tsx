import Card3pro from "@/components/article/card3pro";
// import Prod from "@/components/article/cardAcceuil";
import CardPromo from "@/components/article/cardPromo";
import RechercheDeProduit from "@/components/Navigation/barreDeReche";
import SimulationRecherche from "@/components/Navigation/simulationBarreRech";




export default function Home () {

  
  return (
   <>
     <div><h5 className="bg-white text-blue-200 text-center border-1 w-100%">Expose tes gammes de produit sur Olivi</h5></div>
      <SimulationRecherche/>
      <Card3pro/>
      <Card3pro/>
      <Card3pro/>
   </>
  )
}
