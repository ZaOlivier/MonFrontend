const express=require('express');
const router= express.Router();
const DetailP=require('../models/produit.detail.model');

router.get('/read', async(req, res)=>{

    try{

        const Sac= await DetailP.find();
        res.json(Sac)

    }catch(err){
        res.send(Error)
    }

})