import { create } from 'zustand'
import React from 'react'



interface StoreState {
  sectionsRef: React.RefObject<HTMLButtonElement>[];
  selectedComponentIndex: number | null;
}

interface StoreActions {
  setSectionsRef: (index: number, ref: React.RefObject<HTMLButtonElement>) => void;
  setSelectedComponentIndex: (index: number | null) => void;
}

// Combine state and actions into a single type
type Store = StoreState & StoreActions;


// Define your store
const useStore = create<Store>((set) => ({
  selectedComponentIndex:0,
  setSelectedComponentIndex: (index) => set({ selectedComponentIndex: index }),




  sectionsRef: Array.from({ length: 4 }).map(() => React.createRef()),
  setSectionsRef: (index, ref) => set((state) => {
    const newRefs = [...state.sectionsRef];
    newRefs[index] = ref;
    return { sectionsRef: newRefs };
  }),
}));

export default useStore;
