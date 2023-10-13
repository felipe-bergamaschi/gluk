import { ProductsControllerGetResponseItem } from '@/query';
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';

import { createContext as createContextSelector, useContextSelector } from 'use-context-selector';

type ContextData = {
  products: ProductsControllerGetResponseItem[] | null;
  handleSetProducts: (data: ProductsControllerGetResponseItem) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export const Context = createContextSelector({} as ContextData);

export function Provider(props: ProviderProps) {
  const [products, setProducts] = useState<ProductsControllerGetResponseItem[] | null>(null);

  const handleSetProducts = useCallback((data: ProductsControllerGetResponseItem) => {
    setProducts((prev) => (prev ? [data, ...prev] : [data]))
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        handleSetProducts
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useListProducts() {
  const products = useContextSelector(Context, (context) => context.products);
  const handleSetProducts = useContextSelector(Context, (context) => context.handleSetProducts);

  return {
    products,
    handleSetProducts
  };
}
