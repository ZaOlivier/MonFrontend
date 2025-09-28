const express=require('express');
const router= express.Router();
const admini=require('../../../models/commande.model');

router.get('/commandeRead', async(req, res)=>{
    
    try{

        const adminiReadCommande= await admini.find();
        res.json(adminiReadCommande)

    }catch(err){
        res.send(Error)
    }

})

router.post('/commande_create', async (req, res)=>{

    try{   

        const adminiCreateCommande= new admini(req.body);
        await adminiCreateCommande.save();
        res.send('succes')

    }catch(err){
        res.json(Error)('dommage')
    }

});

router.delete('/commande_delete/:id', async(req, res)=>{

    try{ 

        const adminiDeleteCommande=await 
        AdmUser.findByIdDelete(req.params.id)
        res.send(`${adminiDeleteCommande}, commande supprimer`)
        
    }catch(err){
        res.send("echoué")
    }

})

module.exports=router;