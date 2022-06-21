// @ts-nocheck
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { Product } from '../data/types';

interface CartStore {
  total: number;
  addedProducts: Product[];
  addToCart: (pd: Product) => void;
  removeFromCart: (id: string) => void;
}

const useStore = create<CartStore>(
  persist(
    (set, get) => ({
      total: 0,
      addedProducts: [],
      addToCart: pd => {
        set(store => {
          if (store.addedProducts.length === 0) {
            const product = { ...pd, total: 1 };
            return {
              addedProducts: [product],
              total: store.total + 1,
            };
          }

          const index = store.addedProducts.findIndex(
            product => product._id === pd._id,
          );

          const products: Product[] = [...store.addedProducts];

          store.addedProducts.forEach(product => {
            if (product._id === pd._id && index !== -1) {
              products[index].total = (product.total ?? 0) + 1;
              console.log('sdsdds', { products });
            }
          });

          if (index === -1) {
            products.push({ ...pd, total: (pd.total ?? 0) + 1 });
          }

          return {
            addedProducts: [...products],
            total: store.total + 1,
          };
        });
      },
      removeFromCart: id => {
        const store = get();

        const product = store.addedProducts.find(pd => pd._id === id) ?? {};

        const filteredProducts = store.addedProducts.filter(
          pd => pd._id !== id,
        );

        if (product.total > 1) {
          product.total = product.total - 1;
          filteredProducts.push(product);
        }

        set({ addedProducts: filteredProducts, total: store.total - 1 });
      },
    }),
    {
      name: 'cart-storage', // for persisting => unique-name
    },
  ),
);

export default useStore;
