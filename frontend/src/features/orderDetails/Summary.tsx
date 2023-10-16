import { useListProducts } from "@/contexts/products"
import { formatCurrency } from "@/utils/formatCurrency"
import Decimal from "decimal.js"

export function Summary() {
  const { products } = useListProducts()

  const amount = products?.reduce((acc, product) => acc + product.quantity, 0)
  const subtotal = products?.reduce((acc, product) => acc + (product.price * product.quantity), 0) || 0
  const discount = products?.reduce((acc, product) => acc + product.discount, 0) || 0

  const total = new Decimal(subtotal).minus(discount).toNumber()

  const summary = [
    {
      label: 'Itens',
      value: `${amount ?? 0} itens`
    },
    {
      label: 'Sub Total',
      value: formatCurrency(subtotal)
    },
    {
      label: 'Desconto',
      value: formatCurrency(discount)
    },
    {
      label: 'Total',
      value: formatCurrency(total)
    },
  ]

  return (
    <div className="mb-3">
      <div className="bg-body-secondary rounded p-3">
        <ul className="m-0">
          {summary.map((item, index) => (
            <li
              key={index}
              className={`m-0 d-flex align-items-center justify-content-between ${item.label === 'Total' && 'border-top mt-2 pt-2'}`}
            >
              <span>{item.label}</span>

              <span className={`fw-bold ${item.label === 'Total' && 'h5'}`}>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}