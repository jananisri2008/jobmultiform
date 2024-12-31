import React, { useState } from 'react';
import '../styles/JobPositions.css';

const JobPosition = ({ formData, handleFormDataChange, nextStep, prevStep }) => {
  const { jobPosition } = formData;
  // const [selectJobId, setSelectJobId] = useState(jobPosition || '');
  const[selectJobTitle, setSelectJobTitle]=useState(jobPosition || '');
  const[errorMessage,setErrorMessage]=useState('');

  const jobPositions = [
    {
      id: 1,
      title: '360 Operator',
      description: 'Operate and maintain 360 excavator for construction projects.',
      rate: 'from £30 per hour',
    },
    {
      id: 2,
      title: 'Site Manager',
      description: 'Manage project plans, budgets, and schedules throughout project lifecycle.',
      rate: 'from £32 per hour',
    },
    {
      id: 3,
      title: 'Project Manager',
      description: 'Manage construction projects & ensure adherence to plans.',
      rate: 'from £42 per hour',
    },
    {
      id: 4,
      title: 'Steel Fixer',
      description: 'Install steel reinforcement bars in concrete structures.',
      rate: 'from £22 per hour',
    },
  ];
  
  const handleSelect = (id,title) => {
    // setSelectJobId(id);
    setSelectJobTitle(title);
    setErrorMessage('');
    // handleFormDataChange({ jobPosition: id });
    handleFormDataChange({jobPosition:title});
  };

  const handleNext=()=>{
    // if(!selectJobId){
    if(!selectJobTitle){
      setErrorMessage('Please select a job position');
    } else{
      nextStep();
    }
  };

  const handleInputChange=(e)=>{
    // setSelectJobId(e.target.value);
    setSelectJobTitle(e.target.value);
    setErrorMessage('');
  };

  const JobPositionCard = ({ job, onSelect, selected }) => (
    <div
      className={`job-card ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(job.id,job.title)}
    >
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p className="rate">{job.rate}</p>
    </div>
  );

  return (
    <div className="job-selector">
       <div className="step-indicator">
        <span className="step">1 Job location</span>
        <span className="step active">2 Job position</span>
        <span className="step">3 Personal details</span>
      </div>

      <div className='form-group'>
        <div className='input-container'>
          <input
          type='text'
          id='positions'
          placeholder='Roles: job title, position'
          // value={selectJobId}
          value={selectJobTitle}
          onChange={handleInputChange}/>
        </div>
      </div>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}

      {/* <h2>Select a Job Position</h2> */}
      <div className="suggestion-title">
        <span className="step">SUGGESTIONS</span>
      </div>
      <div className="job-list">
        {jobPositions.map((job) => (
          <JobPositionCard
            key={job.id}
            job={job}
            onSelect={handleSelect}
            // selected={job.id === selectJobId}
            selected={job.title===selectJobTitle}
          />
        ))}
      </div>

           <div className="buttons">
        <button className="btn-prev" onClick={prevStep}>Back</button>
        <button className="btn-next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default JobPosition;

