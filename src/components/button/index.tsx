interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-1"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}