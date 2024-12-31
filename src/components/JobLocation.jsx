import React, { useState } from 'react';
import '../styles/JobLocation.css';
import Suggestion from './Suggestion';

const JobLocation = ({ formData, nextStep, handleForm }) => {
  const { locations } = formData;
  const [location, setLocation] = useState(locations || '');
  //error message
  const[errorMessage,setErrorMessage]=useState('');

  const handleNext = () => {
    if (location) {
      handleForm({ locations: location });
      nextStep();
    } else {
      setErrorMessage('Please choose the location.');
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
    setErrorMessage('');
  };

  const handleSuggestionClick = (suggestions) => {
    setLocation(suggestions);
    setErrorMessage('');
  };

  return (
    <div className="location-step">
      <div className="step-indicator">
        <span className="step active">1 Job location</span>
        <span className="step">2 Job position</span>
        <span className="step">3 Personal details</span>
      </div>
      
      <div className="form-group">
        <div className='input-container'>
          <input
            type="text"
            id="locations"
            placeholder="Location: city, area..."
            value={location}
            onChange={handleInputChange}
          />
        </div>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </div>
      <div className="suggestion-title">
        <span className="step">SUGGESTIONS</span>
      </div>
      <Suggestion onSuggestionClick={handleSuggestionClick} />
      <button className="button-next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default JobLocation;
