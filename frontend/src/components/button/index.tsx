interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      className={`btn btn-primary w-100 d-flex align-items-center justify-content-center gap-1 ${disabled && 'disabled'}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}