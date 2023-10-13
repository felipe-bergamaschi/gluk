import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { useListProducts } from "@/contexts/products";
import { ProductsControllerGetResponse, ProductsControllerGetResponseItem } from "@/query";
import { formatCurrency } from "@/utils/formatCurrency";
import toast from "react-hot-toast";

interface ProductListProps {
  data: ProductsControllerGetResponse | undefined;
  isLoading: boolean;
}

export function ProductList({ data, isLoading }: ProductListProps) {
  const { products, handleSetProducts } = useListProducts()

  function handleProductAdd(product: ProductsControllerGetResponseItem) {
    toast.success('Produto adicionado com sucesso')
    handleSetProducts(product)
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (data?.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <p className="text-secondary">
          Nenhum produto encontrado
        </p>
      </div>
    )
  }

  return (
    <div className="d-flex flex-wrap gap-3">
      {data?.map((product) => {
        const checkProduct = products?.find((item) => item.id === product.id)

        return (
          <div
            key={product.id}
            className="border rounded w-100"
            style={{
              maxWidth: 244
            }}
          >
            <div className="w-100 bg-body-tertiary d-flex justify-content-center">
              <img
                src={product.images[0].url}
                alt={product.name}
                style={{ width: 170 }}
                className="img-thumbnail border-0 bg-transparent"
              />
            </div>

            <div className="p-3">
              <p className="h6 text-secondary">
                {product.name}
              </p>

              <p className="h4">
                {formatCurrency(product.price)}
              </p>

              <Button
                onClick={() => handleProductAdd(product)}
                disabled={Boolean(checkProduct)}
              >
                <Icon name="plus" />

                <span>
                  Adicionar
                </span>
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}