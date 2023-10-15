interface DatePickerProps {
  name: string;
  label: string;
  onChange: (value: string) => void;
}

export function DatePicker({ name, label, onChange }: DatePickerProps) {
  return (
    <div className="input-group mb-3">
      <div className="form-floating">
        <input
          type="date"
          className="form-control"

          id={name}
          name={name}
          onChange={(e) => onChange(e.target.value)}
        />

        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  )
}