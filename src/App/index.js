import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'post',
        url: 'http://www.mocky.io/v2/5de6c328370000a21d0925f2',
        headers: { 'Content-Type': 'application/json; charset=UTF-8'}
      }
      const result = await axios(config);
      setUser(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    isCompleteMessage(value, user, messages, setMessages);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if(isPasswordValid(value, user)){
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
      <main className="main">
      <p>Password</p>
        <form className='form' onSubmit={handleSubmit}>
          <input
            className="passwordInput"
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