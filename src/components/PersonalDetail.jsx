import React, { useState } from 'react';
import '../styles/PersonalDetail.css';

function PersonalDetail({ formData, handleForm, nextStep, prevStep }) {
  const { personalDetail,location,jobPosition } = formData;
  //separate state
  const [personal, setPersonal] = useState(personalDetail || ''); 
  const [phone, setPhone] = useState(''); 
  const [locationInput, setLocationInput] = useState(location || ''); 
  const [jobPositionInput, setJobPositionInput] = useState(jobPosition || ''); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleNext = () => {
    if (personal && phone && locationInput && jobPositionInput) { 
        // Check 
      handleForm({ personalDetail: personal, location:locationInput, jobPosition:jobPositionInput }); 
      nextStep();
    } else {
      setErrorMessage('Please fill all the fields');
    }
  };

  const handleInputChange = (e) => {
    setPersonal(e.target.value);
    setErrorMessage(''); 
  };

  return (
    <div className='personal-detail'>
      <div className="step-indicator">
        <span className="step">1 Job location</span>
        <span className="step">2 Job position</span>
        <span className="step active">3 Personal details</span>
      </div>

      <div className='form-group'>
      <div className='input-container'>
          <input
            type='text'
            id='location'
            placeholder='Location:'
            value={locationInput}
            // onChange={handleInputChange}
            onChange={(e)=>handleInputChange(e,setLocationInput)}
          />
        </div>
        <div className='input-container'>
          <input
            type='text'
            id='jobPosition'
            placeholder='Roles:'
            value={jobPositionInput}
            // onChange={handleInputChange}
            onChange={(e)=>handleInputChange(e,setJobPositionInput)}
          />
        </div>
        <div className='input-container'>
          <input
            type='text'
            id='personalDetail'
            placeholder='Name:'
            value={personal}
            // onChange={handleInputChange}
            onChange={(e)=>handleInputChange(e,setPersonal)}
          />
        </div>

        <div className='input-container'>
          <input
            type='text'
            id='phone'
            placeholder='Phone:'
            value={phone}
            onChange={(e)=>handleInputChange(e,setPhone)}
          />
        </div>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </div>

      <div className="buttons">
        <button className="btn-prev" onClick={prevStep}>Back</button>
        <button className="btn-next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default PersonalDetail;
