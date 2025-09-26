export interface Produit {
    _id:string,
    nom:string,
    prix:number,
    image:string,
    description?:string
}

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