import { ProductsControllerGetResponseItem } from '@/query';
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';

import { createContext as createContextSelector, useContextSelector } from 'use-context-selector';

interface IProduct extends ProductsControllerGetResponseItem {
  quantity: number;
  discount: number;
}

type ContextData = {
  products: IProduct[] | null;
  handleSetProducts: (data: ProductsControllerGetResponseItem) => void;
  updateProduct: (data: IProduct) => void;
  deleteProduct: (id: string) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export const Context = createContextSelector({} as ContextData);

export function Provider(props: ProviderProps) {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  const handleSetProducts = useCallback((data: ProductsControllerGetResponseItem) => {
    const product: IProduct = {
      ...data,
      quantity: 1,
      discount: 0,
    };

    setProducts((prev) => (prev ? [product, ...prev] : [product]))
  }, []);

  const updateProduct = useCallback((data: IProduct) => {
    setProducts((prev) => {
      if (!prev) return prev;

      const index = prev.findIndex((product) => product.id === data.id);

      if (index === -1) return prev;

      prev[index] = data;

      return [...prev];
    });
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => {
      if (!prev) return prev;

      const index = prev.findIndex((product) => product.id === id);

      if (index === -1) return prev;

      prev.splice(index, 1);

      return [...prev];
    });
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        handleSetProducts,
        updateProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useListProducts() {
  const products = useContextSelector(Context, (context) => context.products);
  const handleSetProducts = useContextSelector(Context, (context) => context.handleSetProducts);
  const updateProduct = useContextSelector(Context, (context) => context.updateProduct);
  const deleteProduct = useContextSelector(Context, (context) => context.deleteProduct);

  return {
    products,
    handleSetProducts,
    updateProduct,
    deleteProduct,
  };
}
