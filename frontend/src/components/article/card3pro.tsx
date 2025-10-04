import Link from "next/link";
// import AddToCartButton from "../button/btnAjouterPanier";

export default function Card3pro(){

    return(
        <><br />
            <div className="flex w-full h-48 border-2 border-amber-300">
                <div className="pt-6 grid grid-cols-2  w-full">
                    <div>

                    </div>
                    <div>
                        <section className="text-sm block">Voir d&apos;autre categorie :
                        <Link href="#">Telephone</Link><br />
                        <Link href="#" className="block">Chaussure local</Link>
                        <Link href="#">montre</Link>
                        <Link href="#"></Link>
                        
                        </section>
                    </div>
                </div>
            </div>
        </>
    )

}