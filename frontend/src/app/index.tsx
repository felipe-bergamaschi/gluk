import { Order } from '@/features/orderDetails'
import { CommonLayout } from '../components/layouts/common'
import { formatCurrency } from '@/utils/formatCurrency'
import Decimal from 'decimal.js'
import { format } from 'timeago.js';
import { formatDate } from '@/utils/formateDate';
import { Button } from '@/components/button';
import { useNavigate } from 'react-router';
import { Icon } from '@/components/icon';

export default function Page() {
  const dataLocal = localStorage.getItem('GLUK:orders') ?? '{}'
  const data: Order[] = JSON.parse(dataLocal)

  const navigation = useNavigate()

  function getStatus(status: string) {
    switch (status) {
      case '1':
        return 'Aberta'
      case '2':
        return 'Concluída'
      case '3':
        return 'Cancelada'
      default:
        return 'Não encontrada'
    }
  }

  function NewOrder() {
    return (
      <Button onClick={() => navigation('new-order')}>
        <Icon name='plus' />
        Nova venda
      </Button>
    )
  }

  return (
    <CommonLayout
      title='Todas as vendas'
      breadcrumbs={['Lista de vendas']}
      actions={<NewOrder />}
    >
      <div className="bd-example">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cliente</th>
              <th scope="col">Qtd. produtos</th>
              <th scope="col">Valor total</th>
              <th scope="col">Desconto</th>
              <th scope="col">Status</th>
              <th scope="col">Data</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? data.map((order, index) => {
              const amount = order.products?.reduce((acc, product) => acc + product.quantity, 0)
              const subtotal = order.products?.reduce((acc, product) => acc + (product.price * product.quantity), 0) || 0
              const discount = order.products?.reduce((acc, product) => acc + product.discount, 0) || 0

              const total = new Decimal(subtotal).minus(discount).toNumber()

              return (
                <tr key={Math.random()}>
                  <th scope="row">{index + 1}</th>
                  <td>{order.client.name}</td>
                  <td>{amount}</td>
                  <td>{formatCurrency(total ?? 0)}</td>
                  <td>{formatCurrency(discount ?? 0)}</td>
                  <td>{getStatus(order.status)}</td>
                  <td>{format(formatDate(order.date, order.time), 'pt_BR')}</td>
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