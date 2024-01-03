import { create } from "zustand";

interface cartTrigger {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCartTrigger = create<cartTrigger>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
