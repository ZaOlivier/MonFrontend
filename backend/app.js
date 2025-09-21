// pour cacher mon uri (mes identifaint de connexion de ma db)
const dotenv = require('dotenv');
// on importe mongoose pour pouvoir se connecter et interragie avec mongo altas
const mongoose = require('mongoose');
const port=process.env.PORT;
// pour cacher mon uri (mes identifaint de connexion de ma db)
const uri = process.env.MONGO_URI;
// pour eviter les histoire de cors
const cors = require('cors');
// le module express
const express=require('express');
// instance de notre serveur(application)
const app=express();
// importe la route des Users
const Users=require('./utilisateur/actionUtilis/route/user/userRoute');
// importe la route des Utilisateur
const Admclient=require('./administration/admGestion/gestionClients/etatAdmClient');
// route des produits
const AdmProduit=require("./administration/admGestion/gestionProduits/etatAdmProduit")
// 
const CdDesUtilis=require("./utilisateur/actionUtilis/route/commande/commandeRoute")



// 
app.use(cors());
// pour la connexion de mam db mongo
// pour cacher mon uri (mes identifaint de connexion de ma db)
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
// mongoose.connect("mongodb+srv://zaouliolivier01:MjOLyIm2tsziRPov1@clusterO.wosgqqy.mongodb.net/commerce?retryWrites=true&w=majority")
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
.then(() => console.log('Connecté à MongoDB Atlas'))
.catch(err => console.error('Erreur de connexion à MongoDB Atlas :', err));



// permet de lire le fichiers json reçu
app.use(express.json());

// les route ou encore les API qui vont nous permettre de faire des requetes via frontend
// 1- utilis:user
app.use('/api', Users)
// 
app.use('/cd', CdDesUtilis)
// 2- adm:admclient
app.use('/administration', Admclient)
// 2- adm:admproduit
app.use('/administration', AdmProduit)
app.use('/produit', AdmProduit)
// 
app.use('/Administration', CdDesUtilis)

// 
// on export l'app
module.exports=app;