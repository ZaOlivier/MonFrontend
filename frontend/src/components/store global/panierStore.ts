

import { PanierState, Produit} from '@/types/types';
import { useState } from 'react';
import {create} from 'zustand';


export const PanierStore = create<PanierState>((set, get) => ({
  etatPanier: [],
  AjouterAuPanier: (produit) => {
    const currentPanier = get().etatPanier;
    const exist = currentPanier.find((p) => p._id === produit._id);

    if (exist) {
      set({
        etatPanier: currentPanier.map((p) =>
          p._id === produit._id ? { ...p, quantite: p.quantite + 1 } : p
        )
      });
    } else {
      set({ etatPanier: [...currentPanier, { ...produit, quantite: 1 }] });
    }
  },
  
    SupprimerDuPanier:(_id)=>
    set((state)=>({etatPanier: state.etatPanier.filter((p)=>p._id!==_id)})),

}));


// export const PanierStore= create<PanierState>((set, get)=>({
//     etatPanier: [],
//     AjouterAuPanier:(produit)=>
//     set((state)=>({etatPanier: [...state.etatPanier, produit],})),

//     SupprimerDuPanier:(_id)=>
//     set((state)=>({etatPanier: state.etatPanier.filter((p)=>p._id!==_id)})),
    
// }));


