"use client"
import { Search } from 'lucide-react'

export const BarreDeRecherche=()=>{
    return(

        <form  className="w-full px-2 my-2" >
            <input type="text" name="" id="" placeholder="Rechercher d'autre produit"
                className="w-[82vw] h-full border-2 border-gray-600 rounded-6px"
            />
            <button className="w-1/9 sticky right-80 top-77 pl-1"
            > <Search/> </button>
        </form>
    )
}