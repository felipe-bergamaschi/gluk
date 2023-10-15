import { useState } from 'react';
import { useForm } from './container';

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  type?: string;
  onChange?: (e: any) => void;
  onChangeMask?: (value: string) => void;
}

export function TextField({ name, label, placeholder, onChange, defaultValue, onChangeMask, type }: TextFieldProps) {
  const { formik } = useForm();

  const [value, setValue] = useState(defaultValue ?? formik.values[name]);

  function handleChange(e: any) {
    formik.handleChange(e);

    const formattedValue = onChangeMask && onChangeMask(e.target.value);

    setValue(formattedValue ?? e.target.value);

    onChange && onChange(formattedValue ?? e);
  }

  return (
    <div className="input-group mb-3">
      <div className="form-floating">
        <input
          type={type ?? "text"}
          className="form-control"
          id={name}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          value={value}
        />

        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  )
}