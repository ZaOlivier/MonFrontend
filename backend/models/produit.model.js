const { models } = require("mongoose");
const {mongoose} = require('mongoose')

const ProduitsA= new mongoose.Schema({
    nom: {
    type: String,
    required: true,
  },

    prix:String,
    image:String
    
})

module.exports=mongoose.model('ProduitA', ProduitsA);