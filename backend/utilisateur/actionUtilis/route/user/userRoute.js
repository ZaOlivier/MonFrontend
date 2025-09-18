// le module express
const express = require('express')
// nous permet de cree des routes
const router = express.Router();
// importation du modele user(collection)
const User=require('../../../utilisModel/userModele');


// requette get pour afficher les utilisateurs
router.get('/users', async (req, res)=>{
    try{
        const users= await User.find();
        res.json(users)
    }catch(err){
        res.json(Error)
    }
});

// requette pour envoyer des donnes vers nos db
// req= requette reçu depuis le frontend "req.body"
// methode pour enregistre les donnes reçus "".save"
// la repose envoyer au frontend si l'operation fonctionne "res.send"
// en cas d'erreur "catch"

router.post('/user', async (req, res)=>{
    try{   
        const Newuser= new User(req.body);
        await Newuser.save();
        res.send('succes')
    }catch(err){
        res.json(Error)('dommage')
    }
});

module.exports=router;

