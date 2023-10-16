export interface BodyProps {
  title: string;
  breadcrumbs?: string[];
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export function Body({ children, title, breadcrumbs, actions }: BodyProps) {
  return (
    <div className="container d-flex flex-column p-3 overflow-x-auto">
      <div className="d-flex align-items-center justify-content-between">
        <div>
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
        </div>

        <div>
          {actions}
        </div>
      </div>

      {children}
    </div>
  )
}