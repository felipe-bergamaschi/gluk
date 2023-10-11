import { useGetAxiosAxios } from '../query'
import { CommonLayout } from '../components/layouts/common'

export default function Page() {
  const { data, isLoading, isError } = useGetAxiosAxios()

  if (isLoading) {
    return <h1>loading...</h1>
  }

  if (isError) {
    return <h1>error...</h1>
  }

  return (
    <CommonLayout
      title='Nova venda'
      breadcrumbs={['Nova venda']}
    >
      <p className="read-the-docs">
        {data.description}
      </p>

      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </CommonLayout>
  )
}