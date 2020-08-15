import React, { useEffect, useState } from 'react';

import ValidationMessages from '../ValidationMessages';

import './App.css';
import {
  hasCorrectLimit,
  hasLowerCase,
  hasNumber,
  hasUpperCase,
  passwordValid,
  usedEmailAddress,
} from './helpers';

const App = () => {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState ([
    {
      text: '8-72 Characters',
      isCompleted: false,
    },
    {
      text: '1 Lowercase Character',
      isCompleted: false,
    },
    {
      text: 'Should Not Match Your Email Address',
      isCompleted: false,
    },
    {
      text: '1 Uppercase Character',
      isCompleted: false
    },
    {
      text: '1 Number',
      isCompleted: false
    },
  ]);

  const email = 'uma@gmail.com';

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if(passwordValid(value, email)){
      alert('Congrats, you have submitted your password!');
    } else {
      alert('Your password does not meet the requirements, please try again.');
    }
    e.preventDefault();
  }

  const completeMessage = () => {
    const newMessages = [...messages];
    newMessages[0].isCompleted = hasCorrectLimit(value) ? true : false;
    newMessages[1].isCompleted = hasLowerCase(value) ? true : false;
    newMessages[2].isCompleted = !usedEmailAddress(value, email) && value.length ? true : false;
    newMessages[3].isCompleted = hasUpperCase(value) ? true : false;
    newMessages[4].isCompleted = hasNumber(value) ? true : false;
    setMessages(newMessages);
  };

  useEffect(() => {
    completeMessage();
  }, [value]);

  console.log('value', value);
  return (
    <div className="App">
      <main className="App-main">
      <p>Password:</p>
        <form onSubmit={handleSubmit}>
          <input
            className="App-input"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <button>Show Password</button>
          <input type="submit" value="Submit" />
        </form>
        <ValidationMessages messages={messages} />
        </main>
    </div>
  );
};

export default App;
