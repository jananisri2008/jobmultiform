import React from 'react'
import '../styles/Suggestion.css';
const suggestions=['Chennai','Trichy','Karur','Thanjavur','Salem'];
 function Suggestion ({onSuggestionClick}) {
  return (
    <div className="suggestion-container">
        {suggestions.map((suggestions,index)=>(
            <button
                key={index}
                className='suggestions'
                onClick={()=>onSuggestionClick(suggestions)}>{suggestions}</button>
        ))}   
        </div>     
  );
};
export default Suggestion;
