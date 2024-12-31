import React, { useState } from 'react'
import JobLocation from './JobLocation'
import JobPosition from './JobPosition';
import PersonalDetail from './PersonalDetail';
// import Success from './Success';
function MultiForms() {
    const[step,setStep]=useState(1);
    const[formData,setFormData]=useState({
        locations:"",
        jobPosition:null,
        personalDetail:"",
    });

    const nextStep=()=>
      {setStep(step+1)};
    const prevStep=()=>
      {setStep(step-1)};

    const handleForm=(newData)=>{
        setFormData({...formData,...newData});
    }
  return (
    <div className='multi-form'>
      {step ===1 &&(<JobLocation formData={formData} handleForm={handleForm} nextStep={nextStep}/>)}
      {step ===2 &&(<JobPosition formData={formData} handleForm={handleForm} nextStep={nextStep} prevStep={prevStep}/>)}
      {step ===3 &&(<PersonalDetail formData={formData} handleForm={handleForm} nextStep={nextStep} prevStep={prevStep}/>)}
      {/* {step ===4 &&(<Success formData={formData} handleForm={handleForm} prevStep={prevStep}/>)} */}
    </div>
  )
}
export default MultiForms;