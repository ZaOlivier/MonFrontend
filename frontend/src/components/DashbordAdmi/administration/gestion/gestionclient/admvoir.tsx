import { User } from "@/types/types";
import axios from "axios";
import { useState } from "react";

export const AdmVoir=()=>{
    const[admvoir, setAdmvoir]=useState([]);
    const[id, setId]=useState('');

    const Rolecontroler=(async(e:any)=>{
        e.preventDefault();
        try{
            const res= await
            axios.get('https://olivi.onrender.com/administration/user_voir')
            console.log(res.data);
            // (res.data)
            setAdmvoir(res.data)
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
        <div style={{display:"block"}}>
            {/* <section > */}
                {/* <form style={{height:"10px", width:"8px"}}>
                    <input type="serch" name="" id="" d/>
                    <button>rechercher</button>
                </form> */}
         <button onClick={Rolecontroler} style={{
                border:" 2px solid rgb(255, 218, 55)",
                borderRadius:"3px",
                background:"rgb(255, 218, 55)",
                margin:"10px"
            }}>voir les users</button>
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
            // display:"block",
            // width:"40vw",
            maxHeight:"50vh",
            width:"auto",
            overflow:"scroll",
            // overflowX:"hidden"
            }}>
    
           <table style={{width:"69vw"}}>
            <thead style={{
                border:" 2px solid red",
                background:"rgb(255, 218, 55)"
            }}>
                <tr className="border-2">
                <th className="border-2">id</th>
                <th className="border-2">nom</th>
                <th className="border-2">numero</th>
                <th className="border-2">gmail</th>
                <th className="border-2">mot de pass</th>
                <th className="border-2">version</th>
                {/* <th>action adm</th> */}
                </tr>
            </thead>
            <tbody style={{
                // background:"rgba(146, 145, 145, 1)",
                color:"white",  
                }}
                >
                {admvoir.map((user:User, index)=>(
                <tr key={index} 
                className=" border-b-2 border-b-gray-95"
                >
                <td className="w-1/4">{user._id}</td>
                <td className="bg-blue-300">{user.nom}</td>
                <td className="w-1/7">{user.numero}</td>
                <td className="bg-blue-300 w-1/4">{user.email}</td>
                <td style={{
                    background:"rgba(254, 24, 24, 1)",
                    color:"rgba(0, 0, 0, 1)"
                }}
                className="w-1/7"
                >{user.motDePass}</td>
                <td>{user.__v}</td>
               
                </tr>
                ))}
            </tbody>
            
           </table>
           
            
        </div>
         </div>
    )
}