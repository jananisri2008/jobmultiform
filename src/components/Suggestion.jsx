import React from 'react';
import '../styles/Suggestion.css';

const suggestions = ['Chennai', 'Trichy', 'Karur', 'Thanjavur', 'Salem'];

function Suggestion({ onSuggestionClick }) {
  return (
    <div className="suggestion-container">
      {suggestions.map((suggestion, index) => (
        <button  className='suggestions' key={index} onClick={() => onSuggestionClick(suggestion)}>
          {suggestion}
        </button>
      ))}
    </div>
  );
}

export default Suggestion;
