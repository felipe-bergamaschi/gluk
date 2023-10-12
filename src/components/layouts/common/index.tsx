import { Body, BodyProps } from "./body";
import { Header } from "./header"
import { RightSidebar } from "./rightSidebar";
import { Sidebar } from "./sidebar"

interface CommonLayoutProps extends BodyProps {
  // children: React.ReactNode
}

export function CommonLayout({ children, title, breadcrumbs }: CommonLayoutProps) {
  return (
    <div className="w-100 h-100 overflow-hidden d-flex">
      <Sidebar />

      <div className="flex-fill d-flex flex-column">
        <Header />

        <div className="bg-body flex-fill d-flex overflow-hidden">
          <Body title={title} breadcrumbs={breadcrumbs}>
            {children}
          </Body>

          <RightSidebar />
        </div>
      </div>
    </div>
  )
}