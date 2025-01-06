import React, { useState } from 'react';
import '../styles/JobLocation.css';
import Suggestion from './Suggestion';

const JobLocation = ({ formData, nextStep, handleForm }) => {
  const [location, setLocation] = useState(formData.locations || '');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    setErrorMessage('');
  };

  return (
    <div className="location-step">
  
      <div className="form-group">
        <input
          type="text"
          placeholder="Location: city, area..."
          value={location}
          onChange={handleInputChange}
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
      <h6 className='sub-title'>SUGGESTIONS</h6>
      <Suggestion onSuggestionClick={handleSuggestionClick} />
      <div className='buttons'>
      <button className='btn-next' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default JobLocation;
