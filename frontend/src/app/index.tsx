import { OrderDetails } from '@/features/orderDetails'
import { CommonLayout } from '../components/layouts/common'
import { ProductContent } from '@/features/productContent'

export default function Page() {
  return (
    <CommonLayout
      title='Nova venda'
      breadcrumbs={['Cadastro de venda']}
      sidebar={{
        title: 'Detalhes da venda',
        content: <OrderDetails />,
        open: true,
        hideCloseButton: true,
      }}
    >
      <ProductContent />
    </CommonLayout>
  )
}