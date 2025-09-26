
import { Produit } from '@/types/types';
import {create} from 'zustand';

export const PanierStore= create((set)=>({
    etatPanier: [],
    AjouterAuPanier:(produit:Produit[])=>
    set((state:any)=>({etatPanier: [...state.etatPanier, produit],})),

    SupprimerDuPanier:(id:Produit)=>
    set((state:any)=>({etatPanier: state.etatPanier.filter((p:any)=>p.id!==id)})),

}));


