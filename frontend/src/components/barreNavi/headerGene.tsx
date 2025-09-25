import { BaniereHeader } from "../baniere/baniereInfos";
import { Navigation } from "../Navigation/Navigation";

export default function HeaderGene(){
    return(
        <>
            <BaniereHeader/>
            <div><h5 className="bg-gray-400 text-white text-center border-2 w-full">Expose tes gammes de produit sur IDDA</h5></div>
            <Navigation/>
        </>
    )
}