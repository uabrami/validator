import React from "react";

import Message from './Message';

import "./styles.css";

const ValidationMessages = ({messages}) => (
  <div className="messagesContainer">
    <ul>
      {messages.map((message, i) => (
        <Message
          key={i}
          message={message}
        />
      ))}
    </ul>
  </div>
);


export default ValidationMessages;
