import React from "react";

const Message = ({ message }) =>{
  const isDecorated = message.isCompleted ? "line-through" : "";
 return (
  <li>
    <span style={{textDecoration: isDecorated}}>
      {message.text}
    </span>
  </li>
 );
};

export default Message;
