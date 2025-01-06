import React, { useState } from 'react';
import '../styles/JobPositions.css';

const jobPositions = [
  { id: 1, title: '360 Operator', description: 'Operate and maintain excavator.', rate: 'from £30/hr' },
  { id: 2, title: 'Site Manager', description: 'Manage project plans.', rate: 'from £32/hr' },
  { id: 3, title: 'Project Manager', description: 'Manage construction projects.', rate: 'from £42/hr' },
  { id: 4, title: 'Steel Fixer', description: 'Install steel reinforcement bars.', rate: 'from £22/hr' }
];

const JobPosition = ({ formData, handleForm, nextStep, prevStep }) => {
  const [selectedJob, setSelectedJob] = useState(formData.jobPosition || ''); // Track the selected job
  const [errorMessage, setErrorMessage] = useState(''); // Error message state

  const handleSelectJob = (job) => {
    setSelectedJob(job.title); // Set the selected job title in the state
    setErrorMessage(''); // Clear any previous error messages
    handleForm({ jobPosition: job.title }); // Pass the selected job back to the parent component
  };

  const handleNext = () => {
    if (selectedJob) {
      nextStep(); // Move to the next step if a job is selected
    } else {
      setErrorMessage('Please select a job position'); // Show error message if no job is selected
    }
  };

  return (
    <div className="job-selector">
      <div className="form-group">
        <input
          type="text"
          placeholder="Select Job Position"
          value={selectedJob} // The textbox will show the selected job title
          readOnly
        />
      </div>
      <div className="job-list">
        {jobPositions.map((job) => (
          <div
            key={job.id}
            // className={`job-card ${selectedJob === job.title ? 'selected' : ''}`}
            className='job-radio'>
              <label className='job-radio-label'>
                <input
                type='radio'
                name='jobPosition'
                value={job.title}
                checked={selectedJob===job.title}
                onChange={()=>handleSelectJob(job)}
                />
                <span className='job-title'>{job.title}</span>
              </label>
            {/* <h3>{job.title}</h3> */}
            <p>{job.description}</p>
            <p className="rate">{job.rate}</p>
          </div>
        ))}
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="buttons">
        <button className='btn-prev' onClick={prevStep}>Back</button>
        <button className='btn-next' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default JobPosition;
