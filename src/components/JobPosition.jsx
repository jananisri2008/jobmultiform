import React, { useState } from 'react';
import '../styles/JobPositions.css';

const JobPosition = ({ formData, handleFormDataChange, nextStep, prevStep }) => {
  const { jobPosition } = formData;
  const [selectJobId, setSelectJobId] = useState(jobPosition || '');

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
  
  const handleSelect = (id) => {
    setSelectJobId(id);
    handleFormDataChange({ jobPosition: id });
  };

  const JobPositionCard = ({ job, onSelect, selected }) => (
    <div
      className={`job-card ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(job.id)}
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
            selected={job.id === selectJobId}
          />
        ))}
      </div>
      <div className="buttons">
        <button className="button-prev" onClick={prevStep}>Back</button>
        <button className="button-next" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default JobPosition;
