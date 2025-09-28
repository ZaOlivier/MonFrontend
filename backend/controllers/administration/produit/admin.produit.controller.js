const express=require('express');
const router= express.Router();
const admini=require('../../../models/produit.model');

router.get('/produits_read', async(req, res)=>{
    
    try{

        const adminiReadProduit= await admini.find();
        res.json(adminiReadProduit)

    }catch(err){
        res.send(Error)
    }

})

router.post('/produit_create', async (req, res)=>{

    try{   

        const adminiCreateProduit= new admini(req.body);
        await adminiCreateProduit.save();
        res.send('succes')

    }catch(err){
        res.json(Error)('dommage')
    }

});

router.delete('/produit_delete/:id', async(req, res)=>{

    try{ 

        const adminiDeleteProduit=await 
        AdmUser.findByIdDelete(req.params.id)
        res.send(`${adminiDeleteProduit}, produit supprimer`)
        
    }catch(err){
        res.send("echoué")
    }

})

module.exports=router;