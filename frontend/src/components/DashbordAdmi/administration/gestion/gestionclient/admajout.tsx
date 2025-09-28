
import axios from "axios";
import React, { useState } from "react";
import '../../../styleadm/admajoutclt.css'


export const AdmAjout=()=>{
    const[nom, setNom]=useState('');
    const[numero, setNumero]=useState('');
    const[motDePass, setMotDePass]=useState('');
    const[email, setEmail]=useState('');
    const[message, setMessage]=useState('');
   
    const RoleAjout=(async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const res= await
            axios.post('https://olivi.onrender.com/administration/user_create',{
                nom,
                numero,
                email,
                motDePass,
            })
            setMessage(res.data);
            
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
            // color:"black"
        }}>voulez-vous ajoute un utilisateur?</p>
        <h3 style={{
            // color:"white",
            marginLeft:"200px",
            marginBottom:"20px",
            color:"red"
            
        }}>{message} </h3>
    
        <form onSubmit={RoleAjout} >
            <input type="text" 
                value={nom}
                placeholder="son nom"
                onChange={(e) =>
                setNom(e.target.value)}
            />
            <input type="tel" 
                value={numero}
                placeholder="son numero"
                pattern="[0-9]{10}"
                title="Entrez un numéro valide à 10 chiffres"
                onChange={(e) =>
                setNumero(e.target.value)}
            />
            <input type="email" 
                value={email}
                placeholder="son gmail"
                onChange={(e) =>
                setEmail(e.target.value)}
            />
            <input type="passWord" 
                value={motDePass}
                placeholder="mot de passe"
                onChange={(e) =>
                setMotDePass(e.target.value)}
            />
            <br />
            <button type="submit">L&apos;ajouter</button>
        </form>
        
       
        </div>
    )
}