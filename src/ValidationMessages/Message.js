import React from "react";

const Message = ({ message }) =>{
  const isDecorated = message.isCompleted ? "line-through" : "";
 return (
  <li style={{textDecoration: isDecorated}}>
    {message.text}
  </li>
 );
};

export default Message;
