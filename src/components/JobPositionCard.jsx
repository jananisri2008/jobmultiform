import React from "react";

const JobPositionCard = ({ job, onSelect, selected }) => {
  return (
    <div className={`job-card ${selected ? "selected" : ""}`} onClick={() => onSelect(job.id)}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p className="rate">{job.rate}</p>
    </div>
  );
};

export default JobPositionCard;