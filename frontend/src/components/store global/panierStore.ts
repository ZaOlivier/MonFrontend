
import {create} from 'zustand';

export const PanierStore= create((set)=>({
    etatPanier: [],
    AjouterAuPanier:(produit:any)=>
    set((state:any)=>({etatPanier: [...state.etatPanier, produit],})),

    SupprimerDuPanier:(id:any)=>
    set((state:any)=>({etatPanier: state.etatPanier.filter((p:any)=>p.id!==id)})),

}));


