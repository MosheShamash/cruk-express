import React from "react";
import { useState } from "react";
import "./VolunteerLogin.css";

function VolunteerLogin({ event }) {
  const [emailText, setEmailText] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const registerVolunteer = () => {
    // do API stuff here
    console.log(emailText);
    console.log(name);
    console.log(isChecked);
    setEmailText("");
    setName("");
    setIsChecked(false);
    return null;
  };
  const handleChange = (e, type) => {
    switch (type) {
      case "email":
        setEmailText(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "check":
        setIsChecked(e.target.checked);
        break;
      default:
        break;
    }
  };
  return (
    <div className="volunteerLoginWrapper">
      <div className="title">{event}</div>
      <input
        type="email"
        placeholder="Email"
        className="textInput"
        value={emailText}
        onChange={e => handleChange(e, "email")}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => handleChange(e, "name")}
        className="textInput"
      />
      <div className="checkBoxContainer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={e => handleChange(e, "check")}
          className="checkBoxData"
        />
        Confirm whether you are happy to receive emails from us regarding future
        events
      </div>
      <input
        className="login-button"
        type="submit"
        onClick={registerVolunteer}
        value="Check In"
      />
    </div>
  );
}

export default VolunteerLogin;
