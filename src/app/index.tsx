import './index.css'

import { useGetAxiosAxios } from '../query'
import { CommonLayout } from '../components/layouts/common'

export default function Page() {
  const { data, isLoading, isError, refetch } = useGetAxiosAxios()

  if (isLoading) {
    return <h1>loading...</h1>
  }

  if (isError) {
    return <h1>error...</h1>
  }

  return (
    <CommonLayout>
      <h1> Repo: {data.name}</h1>

      <p className="read-the-docs">
        {data.description}
      </p>

      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>

      <br />
      <br />


      <br />

      <button onClick={() => refetch()}>refetch</button>

      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
    </CommonLayout>
  )
}