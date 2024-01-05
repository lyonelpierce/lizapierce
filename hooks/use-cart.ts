import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { CartProduct } from "@/types/ProductWithVariants";

interface CartStore {
  items: CartProduct[];
  addItem: (data: CartProduct) => void;
  removeItem: (id: string) => void;
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
      addItem: (data: CartProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) =>
            // item.id === data.id &&
            item.gem === data.gem &&
            item.material === data.material &&
            item.size === data.size &&
            item.slug === data.slug &&
            item.karat === data.karat
        );

        if (existingItem) {
          return toast("Item is already in cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
        useCartTrigger.getState().onOpen();
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
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
