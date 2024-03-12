import React from 'react';

const CaptchaComponent = ({ captchaInput, setCaptchaInput }) => {
  const handleChange = (event) => {
    setCaptchaInput(event.target.value);
  };

  return (
    <div>
      <label>CAPTCHA: What is 10 + 5?</label>
      <input
        type="text"
        name="captchaInput"
        value={captchaInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default CaptchaComponent;
