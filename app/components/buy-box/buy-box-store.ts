import { create } from 'zustand';

interface BuyBoxStoreState {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export const useBuyBoxStore = create<BuyBoxStoreState>((set) => ({
  quantity: 1,
  setQuantity: (quantity) => set(() => ({ quantity })),
}));
