import React, { useState } from 'react';

export default function Contact() {
  const [userName, setUserName] = useState('');
  const [userEmail, seUserEmail] = useState('');
  const [userText, setUserText] = useState('');
  const nameRegex = /^[a-zA-Zа]+([-'][a-zA-Zа]+)?$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'userName') {
      return setUserName(value);
    }
    if (name === 'userEmail') {
      return seUserEmail(value);
    }
    if (name === 'userText') {
      return setUserText(value);
    }

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    
    if (!nameRegex.test(userName)) {
      alert('The name  cannot be empty and can contain only letters of the English alphabet.');
      flag = false;
    }
    if (!emailRegex.test(userEmail)) {
      alert('Email is incorrect');
      flag = false;
    }
    if (userText.length === 0 || userText.length > 2000) {
      alert('The message cannot be empty and contain more than 2000 characters.');
      flag = false;
    }

    if (flag) {
      alert('Your message has been sent!');
    }

    setUserName('');
    seUserEmail('');
    setUserText('');
  };

  return (
    <div className='wrapper'>
      <div className='container-contact'>
        <h2 className='title'>Contact</h2>

      <form className="contact-form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />

        <input
          value={userEmail}
          name="userEmail"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />

        <textarea
          value={userText}
          name="userText"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

      </div>
    </div>
  );
}
