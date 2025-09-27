
import { Produit } from '@/types/types';
import {create} from 'zustand';

export const PanierStore= create((set)=>({
    etatPanier: [],
    AjouterAuPanier:(produit:Produit[])=>
    set((state:Produit)=>({etatPanier: [...state.etatPanier, produit],})),

    SupprimerDuPanier:(_id:Produit)=>
    set((state:Produit)=>({etatPanier: state.etatPanier.filter((p:any)=>p._id!==_id)})),

}));


