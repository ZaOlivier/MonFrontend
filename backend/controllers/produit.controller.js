const express=require('express');
const router= express.Router();
const produit=require('../models/produit.model');

router.get('/article', async(req, res)=>{

    try{

        const Produit= await produit.find();
        res.json(Produit)

    }catch(err){
        res.send(Error)
    }

})

router.get('/categorie/:categorie', async (req, res) => {
    try{
  const Categories = await produit.find({ categorie: req.params.categorie });
  res.json(Categories)
    }catch(err){
        res.status(404).send(Error)
    }
});

router.post('/create', async(req, res)=>{

    try{

        const produitCreate= new produit(req.body);
        await produitCreate.save();
        res.json("vous venez d'ajouter un produits")

    }catch(err){
        res.send(Error)
    }

})

router.delete('/delete/:id', async(req, res)=>{

    try{ 

        const produitDelete=await 
        AdmUser.findByIdDelete(req.params.id)
        res.send(`${produitDelete}, utilisateur supprimer`)
        
    }catch(err){
        res.send("echoué")
    }

})

module.exports=router;