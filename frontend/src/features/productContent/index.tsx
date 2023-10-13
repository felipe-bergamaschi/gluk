import { ContentTitle } from "@/components/contentTitle";
import { ProductList } from "../productList";

import { FormContainer } from "@/components/form/container";
import { TextField } from "@/components/form/textField";

import { useFindProducts, useProducts } from '../../query'

import { debounce } from "debounce";
import { useState } from "react";

export function ProductContent() {
  const { data: products, isLoading: loadingProducts } = useProducts()
  const { data: findProducts, mutateAsync, isLoading: loadingFindProducts } = useFindProducts()

  const [useSearching, setUseSearching] = useState(false);

  const productsList = useSearching ? findProducts : products;

  const debounceSearching = debounce(async (search: string) => {
    if (search.length < 3) {
      setUseSearching(false);
      return;
    }

    setUseSearching(true);
    mutateAsync({
      data: {
        search
      }
    })
  }, 500);

  function handleSearch(search: string) {
    debounceSearching(search);
  }

  return (
    <div>
      <ContentTitle subtitle="Pesquise pelos produtos e adicione na lista de venda">
        Todos os produtos {`(${productsList?.length ?? 0})`}
      </ContentTitle>

      <FormContainer onSubmit={handleSearch}>
        <TextField
          label="Buscar produtos"
          name="search"
          placeholder="Digite o nome do produto"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </FormContainer>

      <ProductList
        data={productsList}
        isLoading={loadingProducts || loadingFindProducts}
      />
    </div>
  )
}