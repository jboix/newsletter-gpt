// NewsletterSubscription.js
import {useState} from 'react';
import CaptchaComponent from './CaptchaComponent'; // Make sure the path is correct based on your file structure

/**
 * Calculates the age in years based on the given birthday.
 *
 * @param {string} birthday - The person's birthday in a format parseable by the Date constructor
 * (e.g., "YYYY-MM-DD").
 * @returns {number} The person's age calculated from the birthday to the current date.
 */
export const calculateAge = (birthday) => {
  const birthdayDate = new Date(birthday);
  const ageDifMs = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const NewsletterSubscription = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const captchaSolution = "15"; // The solution to the CAPTCHA question

  const validateForm = () => {
    if (!name) {
      alert('Name is required');
      return false;
    }

    if (!birthday) {
      alert('Birthday is required');
      return false;
    } else {
      const age = calculateAge(birthday);
      if (age < 18) {
        alert('You must be over 18 years old');
        return false;
      }
    }

    if (!email) {
      alert('Email is required');
      return false;
    }

    if (captchaInput !== captchaSolution) {
      alert('CAPTCHA answer is incorrect, please try again.');
      return false;
    }

    return true;
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Form is valid, proceed with submission...');
      // Implement the submission logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <label>Birthday:</label>
        <input type="date" name="birthday" value={birthday}
               onChange={(e) => setBirthday(e.target.value)}/>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <CaptchaComponent captchaInput={captchaInput} setCaptchaInput={setCaptchaInput}/>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterSubscription;
