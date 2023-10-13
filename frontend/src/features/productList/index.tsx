import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { useProducts } from "@/query";
import { formatCurrency } from "@/utils/formatCurrency";

export function ProductList() {
  const { data, isLoading } = useProducts()

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="d-flex flex-wrap gap-3">
      {data?.map((product) => (
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

            <Button>
              <Icon name="plus" />

              <span>
                Adicionar
              </span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}