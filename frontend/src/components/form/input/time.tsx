interface DateTimeProps {
  name: string;
  label: string;
  onChange: (value: string) => void;
}

export function DateTime({ name, label, onChange }: DateTimeProps) {
  return (
    <div className="input-group mb-3">
      <div className="form-floating">
        <input
          type="time"
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