// ON IMPORTE notre serveur via ça route
const app=require('./app')
// on declare un port et cacher uri
const port=5000;
// il nous permet de lancer notre serveur
app.listen(port, ()=>
console.log(`notre serveur demare sur le port ${port}`)
);