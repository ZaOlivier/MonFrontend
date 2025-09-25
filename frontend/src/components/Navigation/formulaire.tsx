"use client"
import { Search } from 'lucide-react'

export const BarreDeRecherche=()=>{
    return(

        <form  className="p-1" >
            <input type="text" name="" id="" placeholder="Rechercher d'autre produit"
                className="w-[81vw] text-center border-1 border-gray-800"
            />
            <button className="mx-1 "
            ><Search/></button>
        </form>
    )
}