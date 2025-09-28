const express=require('express');
const router= express.Router();
const UserCommande=require('../models/commande.model');


router.post('/nouvelleCommande', async (req, res)=>{

    try{   

        const nouvelleCommande= new UserCommande(req.body);
        await nouvelleCommande.save();
        res.send('Votre commande a été bien enregistrer et prise en compte')

    }catch(err){
        res.json(Error)('Commande échoué viellez verifier vos information')
    }

});

module.exports=router;