interface ContentTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export function ContentTitle({ subtitle, children }: ContentTitleProps) {
  return (
    <div className="mb-3">
      <h3>{children}</h3>

      {subtitle && (
        <p className="m-0">{subtitle}</p>
      )}
    </div>
  )
}