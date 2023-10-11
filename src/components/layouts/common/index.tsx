import { Header } from "./header"
import { Sidebar } from "./sidebar"

interface CommonLayoutProps {
  title: string;
  breadcrumbs?: string[];
  children: React.ReactNode
}

export function CommonLayout({ children, title, breadcrumbs }: CommonLayoutProps) {
  return (
    <div className="w-100 h-100 overflow-hidden d-flex">
      <Sidebar />

      <div className="flex-fill d-flex flex-column">
        <Header />

        <div className="bg-body flex-fill d-flex flex-column p-3">
          <h2> {title} </h2>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item">{title}</li>

              {breadcrumbs?.map((breadcrumb, index) => (
                <li key={index} className="breadcrumb-item">
                  {breadcrumb}
                </li>
              ))}
            </ol>
          </nav>

          {children}
        </div>
      </div>
    </div>
  )
}