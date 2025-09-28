import { Produit } from "@/types/types";
import axios from "axios";
import { useState } from "react";

export const AdmVoirprod=()=>{
    const[admvoirpod, setAdmvoirprod]=useState([]);
    const[id, setId]=useState('');

    const Rolecontrolerprod=(async(e:any)=>{
        e.preventDefault();
        try{
            const res= await
            axios.get('https://olivi.onrender.com/administration/produits_read')
            console.log(res.data);
            // (res.data)
            setAdmvoirprod(res.data)
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
         <button onClick={Rolecontrolerprod} style={{
                border:" 2px solid rgb(255, 218, 55)",
                borderRadius:"3px",
                background:"rgb(255, 218, 55)",
                // margin:"10px"
            }}>voir les produit actuelle</button>
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
            maxHeight:"50vh",
            width:"auto",
            overflow:"scroll",
            }}>
    
           <table style={{width:"69vw"}}>
            <thead style={{
                border:" 2px solid red",
                background:"rgb(255, 218, 55)"
            }}>
                <tr>
                <th>id</th>
                <th>nom</th>
                <th>prix</th>
                <th>image url</th>
                <th>action adm</th>
                </tr>
            </thead>
            <tbody style={{
                background:"rgba(146, 145, 145, 1)",
                color:"white",  
                }}>
                {admvoirpod.map((prod:Produit, index)=>(
                <tr key={index}
                className=" border-b-2 border-b-gray-95"
                >
                <td>{prod._id}</td>
                <td className="bg-white text-black">{prod.nom}</td>
                <td style={{
                    background:"rgba(255, 173, 31, 1)",
                    color:"rgba(0, 0, 0, 1)"
                }}>{prod.prix}</td>
                <td style={{
                    background:"rgba(7, 226, 255, 1)",
                    color:"rgba(0, 0, 0, 1)"
                }}><img src={prod.image} alt={prod.nom} width={50}/></td>
                <td>{prod.__v}</td>
               
                </tr>
                ))}
            </tbody>
            
           </table>
           
            
        </div>
         </div>
    )
}