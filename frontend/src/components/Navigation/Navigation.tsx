import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import { BarreDeRecherche } from "./formulaire";


export const Navigation=()=>{
    return(
    
          <header className="sticky top-0 z-50">
            <section>
              <div 
              className=" border-4 border-green-600  bg-white w-80 h-22
                sm:flex sm:w-auto
                md:w-auto md:border-blue-600 md:border-2">
                <div className="flex">
                <div>
                  <Link href="/produit">
                  <Image src="/next.svg" alt="Prochedevous" width={100} height={100}
                    className=" h-10 pl-10"
                  />
                  </Link>
                </div>
                <div className="pl-40">
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