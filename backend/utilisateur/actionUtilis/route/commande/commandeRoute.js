// le module express
const express =require('express')
// nous permet de cree des routes
const router = express.Router();
// importation du modele user(collection)
const Cd= require('../../../utilisModel/cdModel');


// requette get pour afficher les commandes

router.get('/voir_commande', async (req, res)=>{
    try{
        const cdPasser= await Cd.find();
        res.json(cdPasser)
    }catch(err){
        res.json(Error)
    }
});


// requette pour envoyer des donnes vers nos db
// req= requette reçu depuis le frontend "req.body"
// methode pour enregistre les donnes reçus "".save"
// la repose envoyer au frontend si l'operation fonctionne "res.send"
// en cas d'erreur "catch"

router.post('/ajouter_Une_commande', async (req, res)=>{
    try{   
        const NewCd= new Cd(req.body);
        await NewCd.save();
        res.send('commande valider')
    }catch(err){
        res.json(Error)('dommage')
    }
});

module.exports=router;