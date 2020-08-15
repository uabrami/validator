import React, { useState } from 'react';
import './App.css';

import ValidationMessages from './ValidationMessages';

const App = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    alert('Congrats, you have submitted your password!');
    e.preventDefault();
  }
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
        <ValidationMessages />
        </main>
    </div>
  );
};

export default App;
