import { StaticImageData } from "next/image";

export interface Produit {
      _id: string;
    nom: string;
    prix: number;
    image: StaticImageData;
    quantite: number;
    __v: number;
    compl: string;
    magasin: string;
    
}

// export interface Produit {
//     _id:string,
//     nom:string,
//     prix:number,
//     image:StaticImageData,
//     description?:string,
//     __v:string
    
// }

// export interface panier {
//     _id:string,
//     nom:string,
//     prix:number,
//     image:string,
//     description?:string,
//     quantite: 1
    
// }

export interface User {
    _id:string,
    nom: string,
    numero: string,
    email: string,
    motDePass: string,
    __v:string
    
    
}

export interface CadreArticle {
    type: string;
    props: string;
    key: string ;
}

export type Message={
    type:string
}

 export interface PanierState {
  etatPanier: (Produit & { quantite: number })[];
  AjouterAuPanier: (item: Produit) => void,
  SupprimerDuPanier: (id: string) => void
 
}

export interface QDeProduit{

   _id:string
}

export interface CommandePasser{
    _id:string,
    nom:string,
    prix:number,
    image:string,
     __v:string
    
    lieuDeLivraison:string,
    modePaiement:string,
    
    infoUserCd:{
        // doit provenir de la collection User
    nom:string,
    prenom:string,
    },
    provenance:{
    ville:string,
    commune:string,
    quartier:string
    },
    produitCommande:{
        _id:string,
        jourMoisAnneeHeure:Date,

        
    }
};


//  export type Props = {
 
//     _id: string;
// };

