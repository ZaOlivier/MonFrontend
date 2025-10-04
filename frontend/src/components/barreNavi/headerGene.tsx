import { BaniereHeader } from "../baniere/baniereInfos";
import { Navigation } from "../Navigation/Navigation";

export default function HeaderGene(){
    return(
        < div className="border-2">
            {/* <BaniereHeader/> */}
            <div className="border-2"><h5 className="bg-white text-blue-400 text-center border-2 w-full">Expose tes gammes de produit sur Olivi</h5></div>
            <Navigation/>
        </div>
    )
}