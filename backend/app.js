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

// importe la route des Utilisateur
// const Admclient=require('./administration/admGestion/gestionClients/etatAdmClient');
// route des produits
// const AdmProduit=require("./administration/admGestion/gestionProduits/etatAdmProduit")
const EtatUser=require('./controllers/administration/user/admin.user.controller')
const EtatProduit=require('./controllers/administration/produit/admin.produit.controller')
const CommandePasse=require('./controllers/administration/commande/admin.commande.controller')
// const CdDesUtilis=require("./utilisateur/actionUtilis/route/commande/commandeRoute")
const Users=require('./controllers/user.controller');
const Produit=require('./controllers/produit.controller')
const Search=require('./controllers/search.produit.controller')
const Commande=require('./controllers/commande.controller')




// 

app.use(cors({ origin: ["https://olivi.vercel.app", "http://localhost:3000"],
    credentials: true

}));




// permet de lire le fichiers json reçu
app.use(express.json());


// Route utilisateur/client
app.use('/use', Users)
app.use('/produit', Produit)
app.use('/produit', Search)
app.use('/commande', Commande)

// pRoute administration
app.use('/administration', EtatProduit)
app.use('/administration', CommandePasse)
app.use('/administration', EtatUser)


module.exports=app;