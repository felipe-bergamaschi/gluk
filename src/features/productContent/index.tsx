import { ContentTitle } from "@/components/contentTitle";
import { ProductList } from "../productList";
import { AutoComplete } from "@/components/form/input/autocomplete";
import { products } from "@/services/mock/products";


export function ProductContent() {
  return (
    <div>
      <div className="">
        <ContentTitle subtitle="Pesquise pelos produtos e adicione na lista de venda">
          Todos os produtos (7)
        </ContentTitle>

        <AutoComplete />

        <ProductList products={products} />
      </div>
    </div>
  )
}