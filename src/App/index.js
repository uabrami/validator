import React, { useEffect, useState } from 'react';

import ValidationMessages from '../ValidationMessages';
import ShowPassword from './ShowPassword';

import './styles.css';
import { isPasswordValid, isCompleteMessage } from './helpers';

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
  const [showText, setShowText] = useState(false);
  const email = 'uma@gmail.com';

  useEffect(() => {
    isCompleteMessage(value, email, messages, setMessages);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if(isPasswordValid(value, email)){
      alert('Congrats, you have submitted your password!');
    } else {
      alert('Your password does not meet the requirements, please try again.');
    }
    e.preventDefault();
  }

  const handleToggle = () => setShowText(!showText);
  console.log('value', value);
  return (
    <div className="App">
      <main className="App-main">
      <p>Password:</p>
        <form className='form' onSubmit={handleSubmit}>
          <input
            className="App-input"
            type={showText ? "text" : "password"}
            value={value}
            onChange={handleChange}
          />
          <ShowPassword handleToggle={handleToggle} />
          <input type="submit" value="Submit" />
        </form>
        <ValidationMessages messages={messages} />
        </main>
    </div>
  );
};

export default App;


          // {/* <input type="checkbox" onClick={() => setShowText(!showText)} /> */}