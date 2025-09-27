
import { PanierState} from '@/types/types';
import {create} from 'zustand';

export const PanierStore= create<PanierState>((set)=>({
    etatPanier: [],
    AjouterAuPanier:(produit)=>
    set((state)=>({etatPanier: [...state.etatPanier, produit],})),

    SupprimerDuPanier:(_id)=>
    set((state)=>({etatPanier: state.etatPanier.filter((p)=>p._id!==_id)})),

}));


