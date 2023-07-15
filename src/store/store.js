import { create } from 'zustand';

export const useBeerStore = create((set) => ({
  allItems: undefined,
  saveAllItems: (items) => set(() => ({ allItems: items })),
  selectedItems: [],
  setSelectedItems: (newItems) => set({ selectedItems: newItems }),
  onSelectedDelete: (newAllItems) =>
    set({ allItems: newAllItems, selectedItems: [] }),
}));
