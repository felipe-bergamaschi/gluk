import { Field } from 'formik';

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

export function TextField({ name, label, placeholder, onChange }: TextFieldProps) {
  return (
    <div className="input-group mb-3">
      <div className="form-floating">
        <Field
          type="text"
          className="form-control"
          id={name}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />

        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  )
}