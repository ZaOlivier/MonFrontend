"use client"

import { Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import "../../styles/responsiveCss.css"

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
        <div className='fixed bg-white h-14 py-2 w-full' id='respPageRecherche'>
        <form onSubmit={handleClick}  className="mx-1"  >
            <input type="search" name="" placeholder="Recherche sur Olivi" 
                id='respPageRechercheInput'
                autoComplete="search"
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                className="w-62 h-[5vh] text-center border-1 border-gray-300
                rounded-2xl mr-2"
                      
            />
            <button type="submit" className="mx-1 absolute right-70 top-3" id='respPageRechercheBottom'>
                <Search/>
            </button>
            <Link href="/">
            <span className='text-amber-300'>Annule</span>
            </Link>
        </form>
        </div>

    )

}