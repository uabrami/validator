import React, { useEffect, useState } from "react";
import axios from "axios";

import ShowPassword from "./ShowPassword";
import ValidationMessages from "../ValidationMessages";
import ConfirmationMessage from "./ConfirmationMessage";
import { initialStateMessages } from "./initialState";
import { isPasswordValid, isCompleteMessage } from "./helpers";
import "./styles.css";

const App = () => {
  const [confMessage, setConfMessage] = useState("");
  const [fadeState, setfadeState] = useState("fade-out");
  const [messages, setMessages] = useState(initialStateMessages);
  const [showText, setShowText] = useState(false);
  const [user, setUser] = useState("");
  const [value, setValue] = useState("");
  const FADE_DURATION = 2500;

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
    if (isPasswordValid(value, user)) {
      setConfMessage("Congrats, you have successfully submited your password!");
      setfadeState("fade-in");
    } else {
      setConfMessage(
        "Your password does not meet the requirements, please try again."
      );
      setfadeState("fade-in");
    }
    setTimeout(() => {
      setfadeState("fade-out");
    }, FADE_DURATION);
  };

  const handleToggle = () => setShowText(!showText);
  return (
    <div className="App">
      <main className="main">
        <div className="labelConfMessageDiv">
          <p>Password</p>
          <div
            className={`fade-wrapper ${fadeState}`}
            style={{ transitionDuration: `${FADE_DURATION}ms` }}
          >
            <ConfirmationMessage
              isValid={isPasswordValid(value, user)}
              message={confMessage}
            />
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
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
