import { ContentTitle } from "@/components/contentTitle";
import { ProductList } from "../productList";

import { FormContainer } from "@/components/form/container";
import { TextField } from "@/components/form/textField";

import { debounce } from "debounce";

export function ProductContent() {

  const debounceSearching = debounce((search: string) => {
    console.log(search);
  }, 1000);

  function handleSearch(search: string) {
    if (search.length < 3) return;

    debounceSearching(search);
  }

  return (
    <div>
      <ContentTitle subtitle="Pesquise pelos produtos e adicione na lista de venda">
        Todos os produtos (7)
      </ContentTitle>

      <FormContainer onSubmit={handleSearch}>
        <TextField
          label="Buscar produtos"
          name="search"
          placeholder="Digite o nome do produto"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </FormContainer>

      <ProductList />
    </div>
  )
}