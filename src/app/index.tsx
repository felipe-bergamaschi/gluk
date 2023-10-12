import { CommonLayout } from '../components/layouts/common'
import { ProductContent } from '@/features/productContent'

export default function Page() {
  return (
    <CommonLayout
      title='Nova venda'
      breadcrumbs={['Cadastro de venda']}
    >
      <ProductContent />
    </CommonLayout>
  )
}