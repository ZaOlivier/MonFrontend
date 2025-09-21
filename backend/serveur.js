// ON IMPORTE notre serveur via ça route
const app=require('./app')
// on declare un port et cacher uri
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
require('dotenv').config();




// pour la connexion de mam db mongo
// pour cacher mon uri (mes identifaint de connexion de ma db)
mongoose.connect(process.env.MONGO_URI)
// mongoose.connect("mongodb+srv://zaouliolivier01:MjOLyIm2tsziRPov1@clusterO.wosgqqy.mongodb.net/commerce?retryWrites=true&w=majority")
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
.then(() => console.log('Connecté à MongoDB Atlas'))
.catch(err => console.error('Erreur de connexion à MongoDB Atlas :', err));
// il nous permet de lancer notre serveur
app.listen(PORT, ()=>
console.log(`notre serveur demare sur le port ${PORT}`)
);