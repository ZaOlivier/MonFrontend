const express=require('express');
const router= express.Router();
const SacDos=require('../models/produit.detail.model');

router.get('/read', async(req, res)=>{

    try{

        const Sac= await SacDos.find();
        res.json(Sac)

    }catch(err){
        res.send(Error)
    }

})