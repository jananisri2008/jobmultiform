import React, { useState, useEffect } from 'react';
import '../styles/PersonalDetail.css';

function PersonalDetail({ formData, handleForm, nextStep, prevStep, currentStage }) {
  const { personalDetail, joblocation, jobPosition } = formData;
  const [personal, setPersonal] = useState(personalDetail || ''); // Personal details (name)
  const [phone, setPhone] = useState(''); // Phone number
  const [joblocationInput, setLocationInput] = useState(joblocation || ''); // Job location
  const [jobPositionInput, setJobPositionInput] = useState(jobPosition || ''); // Job position
  const [errorMessage, setErrorMessage] = useState(''); // Error message for validation
  const[nameError,setNameError]=useState('');//Error message for name
  const[phnoError,setPhnoError]=useState('');//Error message for phno
  const[file,setFile]=useState(null);//file state
  const[fileError,setFileError]=useState('');//Error message for file
  // Update locationInput and jobPositionInput when the values from formData change
  useEffect(() => {
    setLocationInput(joblocation); 
    setJobPositionInput(jobPosition);
  }, [joblocation, jobPosition]);

  //validation for name 
  const validateName=()=>{
    if(!personal.trim()){
      setNameError('Name is Required');
      return false;
    } else{
      setNameError('');
      return true;
    }
  };
  //validate for phno
  const validatePhno=()=>{
    const phnoPattern=/^[0-9]{10}$/;//limit 10 digit for phno
    if(!phone.match(phnoPattern)){
      setPhnoError('Phno number will be allow only 10 digits');
      return false;
    } else{
      setPhnoError('');
      return true;
    }
  };
  //validate for file upload
  const validateFile=(selectedFile)=>{
    if(selectedFile){
      if(selectedFile.size> 25 * 1024 *1024 ){
        setFileError('File size less than 25MB');
        return false;
      } else{
        setFileError('');
        return true;
      }
    }
    return true;
  };
  //file handle
  const handleFileChange=(e)=>{
    const selectedFile=e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
    if(validateFile(selectedFile)){
      setFile(selectedFile);
    }
  };

  //drag and drop
  const handleDragDrop=(e)=>{
    e.preventDefault();//default file
  };

  const handleDrop=(e)=>{
    e.preventDefault();//drop the file
    handleFileChange(e);//processes the file
  };
  const handleNext = () => {
    //validate name and phno and file 
    const isNameValidation=validateName();
    const isPhnoValidation=validatePhno();
    const isFileValidation=validateFile(file);
    // Validate if all fields are filled
    if (isNameValidation && isPhnoValidation && joblocationInput && jobPositionInput && isFileValidation) { // Only validate job position
      handleForm({
        personalDetail: personal, 
        joblocation: joblocationInput, 
        jobPosition: jobPositionInput,
        file:file,
       });
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
          onBlur={validateName}//validate name
       />
        {/* display error name validation */}
        {nameError && <div className='error-message'>{nameError}</div>}
        {/* Phone Number */}
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Update phone number
          onBlur={validatePhno}//validate phno
        />
        {/* display error phno validation */}
        {phnoError && <div className='error-message'>{phnoError}</div>}

        {/* Conditionally render Location input based on currentStage */}
        {currentStage !== 3 && (
          <input
            type="text"
            placeholder="Location"
            value={joblocationInput} // Pre-filled with location
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

      {/* File upload */}
      <div
        className='file-upload'
        onDragOver={handleDragDrop}//drag over 
        onDrop={handleDrop}//drop file
      >
      {/* <input
        type='file'
        accept='image/*,application/pdf'
        onChange={handleFileChange}
      /> */}
      <p>Certification (optional)</p>
      <div className='file-upload-area' onClick={()=>document.querySelector ('input[type="file"]').click()}>
        
        <p>Click to upload or drag and drop</p>
      </div>
      </div>
      {/* display the error for file upload */}
      {fileError && <div className='error-message'>{fileError}</div>}

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
