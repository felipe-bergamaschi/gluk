import { useListProducts } from "@/contexts/products"

export function ProductList() {
  const { products } = useListProducts()

  return (
    <div className="flex-fill overflow-x-auto">
      <div className="accordion accordion-flush" id="accordionExample">
        {products?.map((product) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed px-3 py-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${product.id}`}
                aria-expanded="false"
                aria-controls={product.id}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    marginRight: 8,
                  }}
                >
                  <img
                    src={product.images[0].url}
                    className="rounded"
                    style={{
                      width: 64,
                    }}
                  />

                </div>

                <div>
                  <h6 className="m-0">
                    {product.name}
                  </h6>

                  <small className="text-muted">
                    Quantidade: 123
                  </small>
                </div>

              </button>
            </h2>

            <div id={product.id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Dados do produto
              </div>
            </div>
          </div>
        )) ?? (
            <div className="d-flex justify-content-center align-items-center">
              <p className="m-0">Nenhum produto adicionado</p>
            </div>
          )}
      </div>
    </div>
  )
}