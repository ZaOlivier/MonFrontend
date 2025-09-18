const {mongoose}=require("mongoose")


const CommandeModel= new mongoose.Schema({

    lieuDeLivraison:String,
    modePaiement:String,
    
    infoUserCd:{
        // doit provenir de la collection User
    nom:String,
    prenom:String,
    },
    provenance:{
    ville:String,
    commune:String,
    quartier:String
    },
    produitCommande:{
        jourMoisAnneeHeure:Date,

        
    }

})

module.exports=mongoose.model('Commande', CommandeModel);