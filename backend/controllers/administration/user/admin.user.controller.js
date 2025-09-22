const express=require('express');
const router= express.Router();
const Admini=require('../models/user.model');

router.get('/user_voir', async(req, res)=>{
    
    try{

        const adminiUserRead= await Admini.find();
        res.json(adminiUserRead)

    }catch(err){
        res.send(Error)
    }

})

router.post('/user_create', async (req, res)=>{

    try{   

        const adminiUserCreate= new Admini(req.body);
        await adminiUserCreate.save();
        res.send('succes')

    }catch(err){
        res.json(Error)('dommage')
    }

});

router.delete('/user_elete/:id', async(req, res)=>{

    try{ 

        const adminiUserDelete=await 
        AdmUser.findByIdDelete(req.params.id)
        res.send(`${adminiUserDelete}, utilisateur supprimer`)
        
    }catch(err){
        res.send("echoué")
    }

})

module.exports=router;