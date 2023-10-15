interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'danger';
}

export function Button({ children, onClick, disabled, type = 'button', color = 'primary' }: ButtonProps) {
  const getColor = {
    primary: 'btn-primary',
    danger: 'btn-danger',
  }

  return (
    <button
      className={`btn ${getColor[color as keyof typeof getColor]} w-100 d-flex align-items-center justify-content-center gap-1 ${disabled && 'disabled'}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}