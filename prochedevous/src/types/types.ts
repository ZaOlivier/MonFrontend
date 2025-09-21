export interface Produit {
    id:string,
    nom:string,
    prix:number,
    image:string,
    description?:string
}

export interface User {
    nom: String,
    numero: String,
    email: String,
    motDePass: String,
    
}

export interface CadreArticle {
    type: string;
    props: string;
    key: string ;
}