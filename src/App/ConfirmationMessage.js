import React from "react";
import "./styles.css";

const ConfirmationMessage = ({ isValid, message }) =>{
  const isValid = isValid ? '#61B329' : '#DC143C';
 return (
    <p style={{color: isValid}}>{message}</p>
);
 }

export default ConfirmationMessage;