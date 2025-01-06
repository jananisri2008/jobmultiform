import React from "react";
import "../styles/Stepper.css";

const Stepper = ({ currentStep, setStep }) => {
  const steps = ["Job Location", "Job Position", "Personal Details"];

  return (
    <div className="steppers">
      <div className="stepper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep === index + 1 ? "active" : ""}`}
            onClick={() => setStep(index + 1)}
          >
            <div className={`circle ${currentStep >= index + 1 ? "completed" : ""}`}>
              {currentStep > index + 1 ? "✔" : index + 1}
            </div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
