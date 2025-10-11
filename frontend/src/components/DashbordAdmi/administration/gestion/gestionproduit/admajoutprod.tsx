import axios from "axios";
import React, { useState } from "react";
import '../../../styleadm/admajoutclt.css'


export const AdmAjoutproduit=()=>{
    const[nom, setNom]=useState('');
    const[prix, setPrix]=useState('');
    const[image, setImage]=useState('');
    const[message, setMessage]=useState('');
    const[categorie, setCategorie]=useState("")
    
    
    //  const[image, setDEs]=useState('');
   
    const RoleAjoutprod=(async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(categorie);
        try{
            const res= await
            axios.post('https://olivi.onrender.com/administration/produit_create',{
                nom,
                prix,
                image,
                categorie
                // image,
            })
            setInterval(() => {
                setMessage(res.data)
            }, 200);
            
        //    console.log(res.data);
        }catch(err){
            console.error((err))
        }
    })
    return(
        <div className="admclient">
        <p style={{color:"white",
            marginBottom:"10px",
            padding:"10px",
            marginLeft:"180px",
            // marginRight:"150px",
            
            
        }}>voulez-vous ajoute un produit?</p>
        <h3 style={{
            // color:"white",
            marginLeft:"200px",
            marginBottom:"20px",
            color:"red"
            
        }}>{message} </h3>
    
        <form onSubmit={RoleAjoutprod} >
             <input type="text" 
                value={categorie}
                placeholder="Categorie?"
                onChange={(e) =>
                setCategorie(e.target.value)}
                required
            />
            <input type="text" 
                value={nom}
                placeholder="nom du produit"
                onChange={(e) =>
                setNom(e.target.value)}
            />
            <input type="number" 
                value={prix}
                placeholder="prix"
                // pattern=""
                // title="Entrez un numéro valide à 10 chiffres"
                onChange={(e) =>
                setPrix(e.target.value)}
            />
             <input type="text" 
                value={image}
                placeholder="url image"
                onChange={(e) =>
                setImage(e.target.value)}
            />
           
            <br />
            <button type="submit">L&apos;ajouter</button>
        </form>
        
       
        </div>
    )
}