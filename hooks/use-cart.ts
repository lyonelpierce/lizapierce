import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { Variant } from "@prisma/client";
import { CartItem } from "@/types/ProductVariants";

interface CartStore {
  items: CartItem[];
  addItem: (data: CartItem) => void;
  removeItem: (data: string) => void;
  removeAll: () => void;
}

interface CartTrigger {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCartTrigger = create<CartTrigger>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CartItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item is already in cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
        useCartTrigger.getState().onOpen();
      },
      removeItem: (data: string) => {
        set({
          items: [...get().items.filter((item) => item.id !== data)],
        });
        toast.success("Item removed from cart.");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
