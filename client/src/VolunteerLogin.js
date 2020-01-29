import React from "react";
import { useState } from "react";
import "./VolunteerLogin.css";

function VolunteerLogin({ event }) {
  const [emailText, setEmailText] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formValidationErrors, setFormValidationErrors] = useState([]);
  const registerVolunteer = () => {
    // do API stuff here
    console.log(emailText);
    console.log(name);
    console.log(isChecked);
    const formIsValid = validateForm();
    setIsFormValid(formIsValid);
    // if (!isFormValid) {
    //   console.log("form not valid");
    //   console.log(formValidationErrors);
    //   return null;
    // }
    fetch("/api/check-in", {
      // mode: "cors",
      // headers: {
      //   "Access-Control-Allow-Origin": "*"
      // },
      method: "POST",
      body: JSON.stringify({ title: event, email: emailText }),
      contentType: "application/json"
    })
      .then(response => {
        console.log(response);
        setEmailText("");
        setName("");
        setIsChecked(false);
        return response.json();
      })
      .then(myJson => {});
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

  const validateForm = () => {
    const emailValid = emailText.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!emailValid) {
      setFormValidationErrors(formValidationErrors.push("Invalid email"));
    }
    const nameValid = name.length >= 1 && /^[a-zA-Z]+$/.test(name);
    if (!nameValid) {
      setFormValidationErrors(
        formValidationErrors.push(
          "Invalid name, your name can only contain letters"
        )
      );
    }
    const outcome = !nameValid || !emailValid ? false : true;

    console.log(outcome);
    return !nameValid || !emailValid ? false : true;
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
