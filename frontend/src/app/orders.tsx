import { Order } from '@/features/orderDetails'
import { CommonLayout } from '../components/layouts/common'
import { formatCurrency } from '@/utils/formatCurrency'

export default function Page() {
  const dataLocal = localStorage.getItem('GLUK:orders') ?? '{}'
  const data: Order[] = JSON.parse(dataLocal)

  return (
    <CommonLayout
      title='Todas as vendas'
      breadcrumbs={['Lista de vendas']}
    >
      <div className="bd-example">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cliente</th>
              <th scope="col">Qtd. produtos</th>
              <th scope="col">Valor total</th>
              <th scope="col">Data</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? data.map((order, index) => {
              const amount = order.products?.reduce((acc, product) => {
                return acc + product.quantity
              }, 0)

              const total = order.products?.reduce((acc, product) => {
                return acc + product.price * product.quantity
              }, 0)

              return (
                <tr key={Math.random()}>
                  <th scope="row">{index + 1}</th>
                  <td>{order.client.name}</td>
                  <td>{amount}</td>
                  <td>{formatCurrency(total ?? 0)}</td>
                  <td>{order.date}</td>
                </tr>
              )
            }) : (
              <tr>
                <td colSpan={5} className="text-center">Nenhuma venda encontrada</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </CommonLayout>
  )
}