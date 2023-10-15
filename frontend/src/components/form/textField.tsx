import { useForm } from './container';

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

export function TextField({ name, label, placeholder, onChange }: TextFieldProps) {
  const { formik } = useForm();

  function handleChange(e: any) {
    formik.handleChange(e);
    onChange && onChange(e);
  }

  return (
    <div className="input-group mb-3">
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id={name}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          value={formik.values[name]}
        />

        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  )
}