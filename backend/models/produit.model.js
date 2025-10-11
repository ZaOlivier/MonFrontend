const { models } = require("mongoose");
const {mongoose} = require('mongoose')

const ProduitsA= new mongoose.Schema({
    nom: {
    type: String,
    required: true,
  },

    prix:String,
    image:String,

    categorie:{
      type: String, //les different Categories
      required: true,
    }
    
})

module.exports=mongoose.model('ProduitA', ProduitsA);