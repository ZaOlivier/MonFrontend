// importer mongoose nous permet d'interagir avec nos db
const {mongoose } = require('mongoose');

// ici on definier un shema via un ".shema"
const userShema= new mongoose.Schema({
    nom: String,
    numero: String,
    email: String,
    motDePass: String,
    ville:String,

});

// ici à meme temps qu'on importe nos shema on crée à meme temps un modele "collection de nos db"
module.exports=mongoose.model('User', userShema);