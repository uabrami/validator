import React, { useEffect, useState } from "react";
import axios from "axios";

import ShowPassword from "./ShowPassword";
import ValidationMessages from "../ValidationMessages";
import ConfirmationMessage from "./ConfirmationMessage";
import { initialStateMessages } from "./initialState";
import { isPasswordValid, isCompleteMessage } from "./helpers";
import CONFIRMATION_MESSAGES from "./constants";
import "./styles.css";

const { isNotValidMessage, isValidMessage } = CONFIRMATION_MESSAGES;

const App = () => {
  const [confMessage, setConfMessage] = useState("");
  const [fadeState, setfadeState] = useState("fade-out");
  const [messages, setMessages] = useState(initialStateMessages);
  const [showText, setShowText] = useState(false);
  const [user, setUser] = useState("");
  const [value, setValue] = useState("");

  const fadeDuration = 1500;
  const isValid = isPasswordValid(value, user);
  const messageDuration = 2500;

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: "post",
        url: "http://www.mocky.io/v2/5de6c328370000a21d0925f2",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      };
      const result = await axios(config);
      setUser(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    isCompleteMessage(value, user, messages, setMessages);
    // eslint-disable-next-line
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setConfMessage(isValidMessage);
      setfadeState("fade-in");
    } else {
      setConfMessage(isNotValidMessage);
      setfadeState("fade-in");
    }
    setTimeout(() => {
      setfadeState("fade-out");
    }, messageDuration);
  };

  const handleToggle = () => setShowText(!showText);
  return (
    <div className="app">
      <main>
        <div className="messageWrapper">
          <p>Password</p>
          <div
            className={`fade-wrapper ${fadeState}`}
            style={{ transitionDuration: `${fadeDuration}ms` }}
          >
            <ConfirmationMessage isValid={isValid} message={confMessage} />
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            aria-label="input password"
            className="passwordInput"
            type={showText ? "text" : "password"}
            value={value}
            onChange={handleChange}
          />
          <ShowPassword
            aria-label="show password text"
            handleToggle={handleToggle}
          />
          <input aria-label="submit password" type="submit" value="Submit" />
        </form>
        <ValidationMessages
          aria-label="password requirements"
          messages={messages}
        />
      </main>
    </div>
  );
};

export default App;
