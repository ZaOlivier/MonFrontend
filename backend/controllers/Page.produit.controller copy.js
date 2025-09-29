const express=require('express');
const router= express.Router();
const produit=require('../models/produit.model');

router.get('/article/:id', async(req, res)=>{

    try{

        const Produit=await produit.findById(req.params.id);
        if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
        res.json(Produit)

    }catch(err){
        res.send(Error)
    }
    

})

router.post('/create/:id', async(req, res)=>{

    try{

        const produitCreate= new produit(req.body);
        await produitCreate.save();
        res.json("vous venez d'ajouter un produits")

    }catch(err){
        res.send(Error)
    }

})
module.exports=router;