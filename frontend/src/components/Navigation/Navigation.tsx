import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { Menu } from 'lucide-react';
import Image from "next/image";
import RechercheDeProduit from "./barreDeReche";


export const Navigation=()=>{
    return(
    
          <header className="sticky top-0 z-50 w-full bg-white h-auto py-3">
            <section className="block md:hidden">
              <div 
              className="
                sm:block sm:w-auto
                md:w-auto md:border-blue-600  md:border-2">
                <div className="flex px-3 mb-3 w-full">
                    <div>
                      <span><Menu/> </span>
                    </div>
                    <div className="w-1/3  ml-2 mr-16" >
                      <Link href="/produit" >
                        <Image src="/next.svg" alt="olvi vente en ligne" width={100} height={300} priority/>
                      </Link>
                    </div>
                    <section className="flex w-1/3 pl-10">
                    <div className="w-1/7 pr-9">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/panier">
                      <UserRoundPen/>
                    </Link>
                  </div>
                <div className="w-1/7 ">
                    {/* <Link href="/commande">
                      
                    </Link> */}
                    <Link href="/panier">
                      <ShoppingCart/>
                    </Link>
                  </div>
                  </section>
                </div>
                  <RechercheDeProduit/>
                </div>
            </section>
            </header>
        
    )
}