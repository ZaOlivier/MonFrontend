const express=require('express');
const router= express.Router();
const searchP=require('../models/produit.model');

router.get('/search', async(req, res)=>{

   try {
   const query = req.query.q;


   const produits = await searchP.find({
  nom: { $regex: query,$options: 'i' }
});


    res.json(produits);
  } catch (error) {
    console.error("Erreur dans /produit/search :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});


module.exports=router;


