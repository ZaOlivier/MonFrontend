import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import { BarreDeRecherche } from "./formulaire";
import { UserRoundPen } from 'lucide-react';


export const Navigation=()=>{
    return(
    
          <header className="sticky top-2 z-50 w-full bg-white h-[15vh]">
            <section className="py-3 my-1">
              <div 
              // border-green-600
              className="
                sm:block sm:w-auto
                md:w-auto md:border-blue-600 md:border-2">
                <div className="flex w-full mx-3">
                <div className="w-1/1 content-center ml-1" >
                  <Link href="/produit" >
                  <Image src="/next.svg" alt="Olivi" width={100} height={100}
                    className=""
                  />
                  </Link>
                </div>
                <div className="w-1/7 mr-2 ">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/panier">
                      <UserRoundPen/>
                    </Link>
                  </div>
                <div className="w-1/7 mr-4">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/panier">
                      <ShoppingCart/>
                    </Link>
                  </div>
                </div>
                  <BarreDeRecherche/>
                </div>
            </section>
            </header>
        
    )
}