const express=require('express');
const router= express.Router();
const searchP=require('../models/produit.model');

router.get('/search', async(req, res)=>{

    const { q } = req.query;
    
  // Vérifie si une requête existe
    if (!q) {
    return res.status(400).json({ message: 'Aucune recherche fournie' });
     }

  // Cherche dans la DB
    const produits = await searchP.find({
    nom: { regex: q,options: 'i' } // insensible à la casse
    });

  res.json(produits);
});
module.exports=router;

