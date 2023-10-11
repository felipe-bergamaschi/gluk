import { Header } from "./header"
import { Sidebar } from "./sidebar"

interface CommonLayoutProps {
  children: React.ReactNode
}

export function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div className="w-100 h-100 overflow-hidden d-flex">
      <Sidebar />

      <div className="flex-fill d-flex flex-column">
        <Header />

        <div className="bg-body flex-fill d-flex flex-column p-3">
          {children}
        </div>
      </div>
    </div>
  )
}