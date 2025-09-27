export interface Produit {
    _id:string,
    nom:string,
    prix:number,
    image:string,
    description?:string,
    
}

// export interface panier {
//     _id:string,
//     nom:string,
//     prix:number,
//     image:string,
//     description?:string,
//     quantite: 1
    
// }

export interface User {
    nom: string,
    numero: string,
    email: string,
    motDePass: string,
    
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