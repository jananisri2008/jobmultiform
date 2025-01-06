import React, { useState } from 'react';
import '../styles/Success.css';
import successImage from '../assets/Thumb.jpg'; // Import image from the assets folder

function Success({ formData }) {
  const [imageSrc, setImageSrc] = useState(successImage); // Set default image to imported one

  return (
    <div className='final-stage'>
      <h2>Success!</h2>
      <div className="success-message">
        <div className="form-summary">
          {/* Optional summary display */}
          {/* <h3>Summary:</h3>
          <p><strong>Location:</strong> {formData.locations}</p>
          <p><strong>Job Position:</strong> {formData.jobPosition}</p>
          <p><strong>Name:</strong> {formData.personalDetail}</p> */}
        </div>
        {/* Display the image from assets */}
        <div className="image-container">
          <img src={imageSrc} alt="Thumb" className="uploaded-image" />
        </div>
        <p>We've received your application!</p>
        <p>We will process it and reach out to you in a days.</p>

      </div>
    </div>
  );
}

export default Success;
