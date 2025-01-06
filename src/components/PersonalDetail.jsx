import React, { useState, useEffect } from 'react';
import '../styles/PersonalDetail.css';

function PersonalDetail({ formData, handleForm, nextStep, prevStep, currentStage }) {
  const { personalDetail, location, jobPosition } = formData;
  const [personal, setPersonal] = useState(personalDetail || ''); // Personal details (name)
  const [phone, setPhone] = useState(''); // Phone number
  const [locationInput, setLocationInput] = useState(location || ''); // Job location
  const [jobPositionInput, setJobPositionInput] = useState(jobPosition || ''); // Job position
  const [errorMessage, setErrorMessage] = useState(''); // Error message for validation

  // Update locationInput and jobPositionInput when the values from formData change
  useEffect(() => {
    setLocationInput(location); 
    setJobPositionInput(jobPosition);
  }, [location, jobPosition]);

  const handleNext = () => {
    // Validate if all fields are filled
    if (personal && phone && jobPositionInput) { // Only validate job position
      handleForm({ personalDetail: personal, location: locationInput, jobPosition: jobPositionInput });
      nextStep(); // Go to the next step
    } else {
      setErrorMessage('Please fill all the fields'); // Show error if validation fails
    }
  };

  return (
    <div className="personal-detail">
      <div className="input-group">
        {/* Personal Details (Name) */}
        <input
          type="text"
          placeholder="Name"
          value={personal}
          onChange={(e) => setPersonal(e.target.value)} // Update personal details
        />
        
        {/* Phone Number */}
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Update phone number
        />

        {/* Conditionally render Location input based on currentStage */}
        {currentStage !== 3 && (
          <input
            type="text"
            placeholder="Location"
            value={locationInput} // Pre-filled with location
            onChange={(e) => setLocationInput(e.target.value)} // Update location
          />
        )}

        {/* Job Position Input (Always visible) */}
        <input
          type="text"
          placeholder="Job Position"
          value={jobPositionInput} // Pre-filled with job position
          onChange={(e) => setJobPositionInput(e.target.value)} // Update job position
        />
      </div>

      {/* Display error message if fields are incomplete */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}


      {/* Navigation buttons */}
      <div className="buttons">
        <button  className='btn-prev' onClick={prevStep}>Back</button> {/* Previous button to go back */}
        <button className='btn-next' onClick={handleNext}>Next</button> {/* Next button to proceed */}
      </div>
    </div>
  );
}

export default PersonalDetail;
