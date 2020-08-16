import React from "react";
import "./styles.css";

const ConfirmationMessage = ({ isValid, message }) =>{
  const isValidColor = isValid ? '#61B329' : '#DC143C';
 return (
    <p
      className='confirmationMessage'
      style={{color: isValidColor}}
    >
      {message}
    </p>
);
 }

export default ConfirmationMessage;