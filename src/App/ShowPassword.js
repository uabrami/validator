import React from "react";
import "./styles.css";

const ShowPassword = ({ handleToggle }) => (
  <div className="showPasswordContainer">
    <input
      className="checkbox"
      type="checkbox"
      onClick={handleToggle}
    />
    <span className="checkboxTitle">Show</span>
  </div>
);

export default ShowPassword;