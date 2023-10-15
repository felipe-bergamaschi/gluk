import { useRef, useState, useEffect } from "react";
import { Field } from 'formik';

export interface Option {
  value: string;
  label: string;
}

interface AutoCompleteProps {
  name: string;
  label: string;
  placeholder?: string;
  options: Option[];
  isLoading: boolean;
  onChange: (value: string) => void;
  onSelected: (value: Option) => void;
}

export function AutoComplete({ name, label, placeholder, options, onChange, onSelected, isLoading }: AutoCompleteProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<number>(-1);

  const inputRef = useRef(null);

  function handleInputChange(e: any) {
    const input = e.target.value;
    setInputValue(input);
    onChange(input);

    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredOptions(filtered);

    input.length > 0 ? setShowOptions(true) : setShowOptions(false);
  }

  function filterOptions() {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredOptions(filtered);
  }

  function handleKeyDown(e: any) {
    if (showOptions) {
      if (e.key === 'ArrowDown' && selectedOption < filteredOptions.length - 1) {
        setSelectedOption(selectedOption + 1);
      } else if (e.key === 'ArrowUp' && selectedOption > 0) {
        setSelectedOption(selectedOption - 1);
      } else if (e.key === 'Enter' && selectedOption !== -1) {
        handleSuggestionClick(filteredOptions[selectedOption]);
      }
    }
  }

  const handleInputBlur = () => setShowOptions(false)

  function handleSuggestionClick(suggestion: Option) {
    setInputValue(suggestion.label);
    setShowOptions(false);
    onSelected(suggestion);
  }


  useEffect(() => {
    console.log({ options })
    filterOptions()
  }, [options])

  return (
    <div className="input-group mb-3">
      <div className="form-floating">
        <Field
          id={name}
          ref={inputRef}
          name={name}
          placeholder={placeholder ?? label}

          value={inputValue}
          onChange={handleInputChange}
          className="form-control"

          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}

          aria-owns={showOptions ? 'options-list' : undefined}
          aria-expanded={showOptions}
        />

        <label htmlFor={name}>
          {label}
        </label>

        {showOptions && filteredOptions.length > 0 && (
          <ul className="list-group" id="options-list">
            {isLoading && (
              <li className="list-group-item">Carregando...</li>
            )}

            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(option)}

                className={`list-group-item ${index === selectedOption ? 'active' : ''}`}
                role="option"
                aria-selected={index === selectedOption}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}