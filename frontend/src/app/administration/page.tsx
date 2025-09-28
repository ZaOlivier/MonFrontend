"use client"

import { AdmAjout } from "@/components/DashbordAdmi/administration/gestion/gestionclient/admajout";
import { AdmVoir } from "@/components/DashbordAdmi/administration/gestion/gestionclient/admvoir";
import { AdmVoirCd } from "@/components/DashbordAdmi/administration/gestion/gestioncommande/admvoirCd";
import { AdmAjoutproduit } from "@/components/DashbordAdmi/administration/gestion/gestionproduit/admajoutprod";
import { AdmVoirprod } from "@/components/DashbordAdmi/administration/gestion/gestionproduit/admvoirProd";
import { MessBienvAdm } from "@/components/DashbordAdmi/componentsadm/bienvadm";
import { useState } from "react";



export default function AdmAcceuil(){
    const[page, setPage]=useState('home')
    const Pagemono=()=>{
    switch (page) {
        case 'home':
            return<MessBienvAdm/>
            break;
        case 'mes':
            return<AdmAjout/>
            break;
        case 'voir':
        return<AdmVoir/>
        case 'es':
            return<AdmAjoutproduit/>
        case 'est':
            return<AdmVoirprod/>
        case 'admvoir':
            return<AdmVoirCd/>
        default:
            return<MessBienvAdm/>
            break;
    }
    }
    return(
        <>
        <div className='secadmacceuil'>
           <header style={{
                height:"10vh",
                width:"100%",
                background:"white",
                paddingLeft:"400px",
                paddingTop:"10px",
                // border:"2px solid blue",
                position:"fixed"
                }}>
                <h1>ADMINISTRATION</h1>
            </header>
            <div style={{
                display:'flex',
                // border:"2px solid rgba(199, 14, 146, 1)",
                height:"100%",
                width:"100%",
                paddingTop:"70px"

            }}>
            <section style={{
                height:"100vh",
                background:"red"
            }}>
                <nav className='admacceuil'>

                    <header style={{
                        height:"4vh",
                        background:"blue",
                        padding:"0 15px",
                        color:"white"
                    }}>Gestion</header>
                    <section style={{
                        // height:"100vh",
                        background:"red",
                        color:"white"
                    }}>Clients</section>
                    <button onClick={()=>setPage('mes')}>Ajouter</button>
                    <button onClick={()=>setPage('voir')}>Voir</button>
                    <section style={{
                        // height:"100vh",
                        background:"red",
                        color:"white"
                    }}>Produits</section>
                    <button onClick={()=>setPage('es')}>Ajouter</button>
                    <button onClick={()=>setPage('est')}>Voir tout</button>
                    {/* <button onClick={()=>setPage('est')}>produits/fsses</button> */}
                     <section style={{
                        // height:"100vh",
                        background:"red",
                        color:"white"
                    }}>Commandes</section>
                    <button onClick={()=>setPage('admvoir')} style={{
                        // height:"100vh",
                        background:"green",
                        color:"white",
                        
                        
                    }}>tout les commande</button>
                    {/* <button onClick={()=>setPage('est')} style={{
                        // height:"100vh",
                        background:"green",
                        color:"white"
                    }}>commades par util</button>
                    <button onClick={()=>setPage('est')} style={{
                        // height:"100vh",
                        background:"green",
                        color:"white"
                    }}>detail prod/cd</button>
                    <button onClick={()=>setPage('est')} style={{
                        // height:"100vh",
                        background:"green",
                        color:"white"
                    }}>fsses prod/cd</button>
                    <section style={{
                        // height:"100vh",
                        background:"red",
                        color:"white"
                    }}>Fournisseurs</section>
                    <button onClick={()=>setPage('es')} style={{
                        // height:"100vh",
                        // background:"green",
                        // color:"white"
                    }}>Listes des fsses</button> */}
                    
          
                </nav>
            </section>
            <section className='pageEnVu'>
                {/* {console.log(setPage)} */}
                <Pagemono/>
            </section>
            </div>
        </div>
        </>
    )
}
