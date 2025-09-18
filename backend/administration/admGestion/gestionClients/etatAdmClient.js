const express=require('express');
const router= express.Router();
const AdmUser=require('../../../utilisateur/utilisModel/userModele');

// si l'adm essaie de voir la liste de tout les utilisateurs
router.get('/admclient', async(req, res)=>{
    try{
        const admclient= await AdmUser.find();
        res.json(admclient)
    }catch(err){
        res.send(Error)
    }
})
// pour ajouter
router.post('/admclient', async(req, res)=>{
    try{
        const admclient= new AdmUser(req.body);
        await admclient.save();
        res.json("vous venez d'ajouter un user")
        
        // res.send(admclient)
    }catch(err){
        res.send(Error)
    }
})

// pour supprimer

// router.delete('/admclient/:id', async(req, res)=>{
//     try{ 
//         const admclient=await 
//     AdmUser.findByIdDelete(req.params.id)
//     res.send(`${admclient}, utilisateur supprimer`)
//     }catch(err){
//         res.send("echoué")
//     }
// })


module.exports=router;


