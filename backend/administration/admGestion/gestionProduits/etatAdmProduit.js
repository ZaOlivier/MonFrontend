const express=require('express');
const router= express.Router();
const AdmProduit= require('../../admModel/produitsModel/produitsIrie')

// si l'adm essaie de voir la liste de tout les utilisateurs
router.get('/admproduit', async(req, res)=>{
    try{
        const admproduit= await AdmProduit.find();
        res.json(admproduit)
    }catch(err){
        res.send(Error)
    }
})
router.get('/affiche-client-produit', async(req, res)=>{
    try{
        const admproduit= await AdmProduit.find();
        res.send(admproduit)
    }catch(err){
        res.send(Error)
    }
})
// pour ajouter
router.post('/admproduit', async(req, res)=>{
    try{
        const admproduit= new AdmProduit(req.body);
        await admproduit.save();
        res.json("vous venez d'ajouter un produits")
        
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