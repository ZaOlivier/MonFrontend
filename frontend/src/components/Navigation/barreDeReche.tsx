"use client"

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RechercheDeProduit(){
    const[query, setQuery]=useState('')
    const router= useRouter()

    const handleClick=(e: React.FormEvent)=>{
        e.preventDefault()
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`)
        }
    }

    return(
        <form onSubmit={handleClick}  className="mx-1" >
            <input type="text" name="" id="" placeholder="Rechercher d'autre produit..."
                autoComplete="search"
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                className="w-full h-[5vh] text-center border-1 border-gray-800
                rounded-2xl "
                      
            />
            <button type="submit" className="mx-1 absolute right-70 top-13">
                <Search/>
            </button>
        </form>

    )

}