import React from "react";
import "./styles.css";

const Message = ({ message }) =>{
  const isDecorated = message.isCompleted ? "line-through" : "";
 return (
  <li style={{textDecoration: isDecorated}}>
    {message.text}
  </li>
 );
};

const ValidationMessages = ({messages}) => (
  <div className="Container">
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
);


export default ValidationMessages;
