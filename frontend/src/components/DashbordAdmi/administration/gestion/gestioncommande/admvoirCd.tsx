import { CommandePasser, Produit } from "@/types/types";
import axios from "axios";
import { useState } from "react";

export const AdmVoirCd=()=>{
    const[admVoirCd, setAdmVoirCd]=useState([]);
    const[id, setId]=useState('');

    const RolecontrolerCd=(async(e:any)=>{
        e.preventDefault();
        try{
            const res= await
            axios.get('http://localhost:5000/administration/commandeRead')
            console.log(res.data);
            // (res.data)
            setAdmVoirCd(res.data)
        }catch(err){
            console.error((err));
        }

    })
    // const Rolesupprimer=(async(e)=>{
    //     e.preventDefault();
    //     try{
    //         const res=await
    //         axios.delete(`http://localhost:5000/administration/admclient/$(id)`)
    //         console.log(res.data);
    //     }catch(err){
    //         console.error((err));
    //     }
    // })
    return(
        <div style={{display:"block"

        }}>
            {/* <section > */}
                {/* <form style={{height:"10px", width:"8px"}}>
                    <input type="serch" name="" id="" d/>
                    <button>rechercher</button>
                </form> */}
         <button onClick={RolecontrolerCd} style={{
                border:" 2px solid rgb(255, 218, 55)",
                borderRadius:"3px",
                background:"rgb(255, 218, 55)",
                // margin:"10px"
            }}>voir les commande</button>
             {/* <section >
                    <form onSubmit={Rolesupprimer} style={{
                        width:"auto",
                        height:"100%"
                    }}>
                       
                        <input type="text" 
        value={id}
        placeholder="id d'util"
        onChange={(e) =>
            setId(e.target.value)}

        />
                            
                        <button type="submit">action</button>
                    </form>
                </section>
            </section> */}
       
        <div style={{
            display:"block",
            // width:"40vw",
            maxHeight:"50vh",
            width:"55vw",
            overflow:"scroll",
            // overflowX:"hidden"
            }}>
    
           <table style={{border:" 2px solid white",}}>
            <thead style={{
                border:" 2px solid red",
                background:"rgb(255, 218, 55)"
            }}>
                <tr>
                <th>id</th>
                <th>Utilisateurs/clients</th>
                <th>prix</th>
                <th>image url</th>
                <th>action adm</th>
                </tr>
            </thead>
            <tbody style={{
                background:"rgba(146, 145, 145, 1)",
                color:"white",  
                }}>
                {admVoirCd.map((prod:CommandePasser, index)=>(
                <tr key={index}>
                <td>{prod._id}</td>
                <td>{prod.nom}</td>
                <td style={{
                    background:"rgba(255, 173, 31, 1)",
                    color:"rgba(0, 0, 0, 1)"
                }}>{prod.prix}</td>
                <td style={{
                    background:"rgba(7, 226, 255, 1)",
                    color:"rgba(0, 0, 0, 1)"
                }}><img src={prod.image} alt={prod.nom} /></td>
                <td>{prod.__v}</td>
               
                </tr>
                ))}
            </tbody>
            
           </table>
           
            
        </div>
         </div>
    )
}