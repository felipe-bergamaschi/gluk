interface SelectProps {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
}

export function Select({ name, label, options, onChange }: SelectProps) {
  return (
    <div className="form-floating mb-3">
      <select
        id={name}
        name={name}
        className="form-select"
        onChange={(e) => onChange(e.target.value)}
      >
        <option selected disabled>Selecione uma opção</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>

      <label htmlFor={name}>{label}</label>
    </div>
  )
}