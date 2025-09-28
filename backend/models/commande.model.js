const {mongoose}=require("mongoose")

// oo
const CommandeModel= new mongoose.Schema({
  
    modePaiement:String,
    
    infoUserCd:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // ← Référence à la collection User
        required: true

    },
    provenance:{
        lieuDeLivraison:{
        type:String, 
        require:true
    },
        ville:String,
        commune:String,
        quartier:String
    },

    produitCommande:[{
     type: mongoose.Schema.Types.ObjectId,
     ref: "ProduitA",
     required: true
   }],

    prixTotal: {
        type: Number,
        required: true,
    },  

    dateCommande: {
    type: Date,
    default: Date.now
  }


}, { timestamps: true })

module.exports=mongoose.model('Commande', CommandeModel);