import { useRef, useState } from "react";

export function AutoComplete() {
  const suggestions = ['Maçã', 'Banana', 'Cereja', 'Damasco', 'Figo', 'Goiaba'];

  const onSelected = (selected: any) => {
    console.log(`Selecionado: ${selected}`);
  };

  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const inputRef = useRef(null);


  const handleInputChange = (e: any) => {
    const input = e.target.value;
    setInputValue(input);

    // Filtrar as sugestões com base no valor de entrada
    const filtered = suggestions.filter((suggestion: any) =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredSuggestions(filtered as any);

    input.length > 0 ? setShowSuggestions(true) : setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    onSelected(suggestion);
  };

  const handleKeyDown = (e: any) => {
    if (showSuggestions) {
      if (e.key === 'ArrowDown' && selectedSuggestionIndex < filteredSuggestions.length - 1) {
        setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
      } else if (e.key === 'ArrowUp' && selectedSuggestionIndex > 0) {
        setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
      } else if (e.key === 'Enter' && selectedSuggestionIndex !== -1) {
        handleSuggestionClick(filteredSuggestions[selectedSuggestionIndex]);
      }
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200); // Delay para permitir que a lista seja clicada
  };

  return (
    <div>
      <div className="input-group mb-3">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"

            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleInputBlur}
            aria-owns={showSuggestions ? 'suggestions-list' : undefined}
            aria-expanded={showSuggestions}
            ref={inputRef}
          />

          <label>Nome do cliente</label>

          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="list-group" id="suggestions-list">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}

                  className={`list-group-item ${index === selectedSuggestionIndex ? 'active' : ''}`}
                  role="option"
                  aria-selected={index === selectedSuggestionIndex}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}