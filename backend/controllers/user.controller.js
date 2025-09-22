const express=require('express');
const router= express.Router();
const user=require('../models/user.model');

router.get('/read', async(req, res)=>{
    
    try{

        const User= await user.find();
        res.json(User)

    }catch(err){
        res.send(Error)
    }

})

router.post('/create', async (req, res)=>{

    try{   

        const UserCreate= new user(req.body);
        await UserCreate.save();
        res.send('succes')

    }catch(err){
        res.json(Error)('dommage')
    }

});

router.delete('/delete/:id', async(req, res)=>{

    try{ 

        const UserDelete=await 
        AdmUser.findByIdDelete(req.params.id)
        res.send(`${UserDelete}, utilisateur supprimer`)
        
    }catch(err){
        res.send("echoué")
    }

})

module.exports=router;