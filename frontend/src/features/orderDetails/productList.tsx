import { TextField } from "@/components/form/textField"
import { useListProducts } from "@/contexts/products"
import { changeFormatCurrency, formatCurrency, formatCurrencySubmit } from "@/utils/formatCurrency"

export function ProductList() {
  const { products, updateProduct } = useListProducts()

  return (
    <div className="flex-fill overflow-x-auto">
      <div className="accordion accordion-flush" id="accordionExample">
        {products?.map((product) => (
          <div className="accordion-item" key={product.id}>
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

            <div id={product.id} className="accordion-collapse collapse">
              <div className="accordion-body p-0 d-flex gap-3 mt-3">
                <TextField
                  label="Valor unitário"
                  name="price"
                  defaultValue={formatCurrency(product.price)}
                  onChangeMask={changeFormatCurrency}
                  onChange={(e) => {
                    const data = {
                      ...product,
                      price: formatCurrencySubmit(e),
                    }

                    updateProduct(data)
                  }}
                />

                <TextField
                  type="number"
                  label="Quantidade"
                  name="quantity"
                  defaultValue={product.quantity.toString()}
                  onChange={(e) => {
                    const data = {
                      ...product,
                      quantity: Number(e.target.value),
                    }

                    updateProduct(data)
                  }}
                />

                <TextField
                  label="Desconto"
                  name="discount"
                  defaultValue={formatCurrency(product.discount)}
                  onChangeMask={changeFormatCurrency}
                  onChange={(e) => {
                    const data = {
                      ...product,
                      discount: formatCurrencySubmit(e),
                    }

                    updateProduct(data)
                  }}
                />
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