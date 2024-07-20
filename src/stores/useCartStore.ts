import { create } from 'zustand';

import type { CartItem } from './types';

interface CartStore {
  cart: CartItem[];
  count: number;
  addItem: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    count: 0,
    addItem: (productId, quantity = 1) =>
      set(({ cart }) => {
        const newCart = cart
          .filter((cartItem) => cartItem.id !== productId)
          .concat({ ...mockCartItem, id: productId, quantity });

        return {
          cart: newCart,
          count: getCount(newCart),
        };
      }),
    removeItem: (productId) => set(({ cart }) => ({ cart: cart.filter((cartItem) => cartItem.id !== productId) })),
    clearCart: () => set({ cart: [] }),
  };
});

const getCount = (cart: CartItem[]) => cart.reduce((acc, cartItem) => cartItem.quantity + acc, 0);

const mockCartItem: CartItem = {
  id: '1',
  quantity: 1,
  company: {
    logo: 'Apple',
    name: 'Apple Inc.',
  },
  title: 'iPhone 13',
  description: "The iPhone 13 is Apple's latest flagship smartphone.",
  price: {
    currency: 'USD',
    value: 699.99,
    discount: 0,
  },
  images: [
    {
      thumb:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=95&.v=1631470172000',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=95&.v=1631470172000',
    },
  ],
  stock: 100,
};
