import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SimulationRecherche(){

    return(
        
        <div className='flex sticky bg-white h-14 py-2 w-full top-0 z-50'>
               <div className="w-auto ml-2 mr-12  py-1 sm:mr-70" >
                      <Link href="/" >
                        <Image src="/next.svg" alt="olvi vente en ligne" width={100} height={300} priority/>
                      </Link>
                    </div>
        {/* <form className="mx-1" > */}
            {/* <input type="search" placeholder="Rechercher d'autre produit..."
                className="w-full h-[5vh] text-center 
                rounded-2xl bg-gray-200"
                      
            /> */}
            <Link href="/recherche">
            <button type="submit" className="mx-1 absolute right-2 top-3">
                <Search/>
            </button>
            </Link>
            <Link href="#">
            <p className="text-amber-300">Besion d'aide?</p>
            </Link>
        {/* </form> */}
        </div>
        
    )
}