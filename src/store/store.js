import { create } from 'zustand';

export const useBeerStore = create((set) => ({
  allItems: undefined,
  saveAllItems: (items) => set(() => ({ allItems: items })),
  //   removeAllBears: () => set({ bears: 0 }),
}));
