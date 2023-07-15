import { create } from 'zustand';

export const useBeerStore = create((set) => ({
  page: 1,
  allItems: undefined,
  saveAllItems: (items) => set(() => ({ allItems: items })),
  selectedItems: [],
  setSelectedItems: (newItems) => set({ selectedItems: newItems }),
  onSelectedDelete: (newAllItems) =>
    set((state) => ({
      allItems: newAllItems,
      selectedItems: [],
      page: newAllItems.length === 0 ? state.page + 1 : state.page,
    })),
}));
