import CardPromo from "@/components/article/acceuil/cardPromo";
// import CardPromo from "@/components/article/cardPromo";
import SimulationRecherche from "@/components/Navigation/simulationBarreRech";




export default function Home () {

  
  return (
   <>
      <SimulationRecherche/>
      <div><h5 className="bg-white text-blue-600 text-center border-1 w-100%">Expose tes gammes de produit sur Olivi</h5></div>
      {/* <Sac/>
      <Promo/>
      <VetementFemme/> */}
      <CardPromo/>
      <CardPromo/>
      <CardPromo/>
      <CardPromo/>
      <CardPromo/>
      <CardPromo/>
      
   </>
  )
}
// hiu