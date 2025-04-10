import { create } from 'zustand';

interface ProductMediaGalleryState {
  activeSlideIdx: number;
  setActiveSlideIdx: (index: number) => void;
}

export const useProductMediaGalleryStore = create<ProductMediaGalleryState>((set) => ({
  activeSlideIdx: 0,
  setActiveSlideIdx: (activeSlideIdx: number) => set(() => ({ activeSlideIdx })),
}));
