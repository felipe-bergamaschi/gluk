import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { products } from "@/services/mock/products";

interface ProductListProps {
  products: typeof products
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="d-flex flex-wrap gap-3">
      {products.map((product) => (
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
              {product.price}
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