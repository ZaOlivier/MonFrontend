// pour cacher mon uri (mes identifaint de connexion de ma db)
// on importe mongoose pour pouvoir se connecter et interragie avec mongo altas

// pour cacher mon uri (mes identifaint de connexion de ma db)

// pour eviter les histoire de cors
const cors = require('cors');
// le module express
const express=require('express');
// instance de notre serveur(application)
const app=express();
// importe la route des Users
// const Users=require('./routes/user.route');
const Users=require('./controllers/user.controller');
// importe la route des Utilisateur
// const Admclient=require('./administration/admGestion/gestionClients/etatAdmClient');
// route des produits
// const AdmProduit=require("./administration/admGestion/gestionProduits/etatAdmProduit")
const SacR=require('./controllers/produit.detail.controller')
// const CdDesUtilis=require("./utilisateur/actionUtilis/route/commande/commandeRoute")
const Produit=require('./controllers/produit.controller')
const Search=require('./controllers/search.produit.controller')



// 

app.use(cors({ origin: ["https://olivi.vercel.app", "http://localhost:3000"],
    credentials: true

}));




// permet de lire le fichiers json reçu
app.use(express.json());

// les route ou encore les API qui vont nous permettre de faire des requetes via frontend
// 1- utilis:user
app.use('/Use', Users)
app.use('/produit', Produit)
app.use('/produit', Search)
// app.use('/ma', SacR)
// 
// app.use('/cd', CdDesUtilis)
// 2- adm:admclient
// app.use('/administration', Admclient)
// 2- adm:admproduit
// app.use('/administration', AdmProduit)
// app.use('/produit', AdmProduit)
// 
// app.use('/Administration', CdDesUtilis)

// 
// on export l'app
module.exports=app;