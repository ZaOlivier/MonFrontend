const { models } = require("mongoose");
const {mongoose} = require('mongoose')

const ProduitsA= new mongoose.Schema({
    nom:String,
    prix:String,
    
})

module.exports=mongoose.model('ProduitA', ProduitsA);