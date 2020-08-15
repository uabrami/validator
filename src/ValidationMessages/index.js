import React from "react";
import "./styles.css";

const Message = ({ message }) => <li>{message.text}</li>;

const ValidationMessages = ({messages}) => (
  <div className="Container">
    <div className="row">
      <div className="column">
        <ul>
          {messages.map((message, i) => (
            <Message
              key={i}
              message={message}
            />
          ))}
        </ul>
      </div>
    </div>
  </div>
);


export default ValidationMessages;
