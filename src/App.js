import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AdminLogin from "./AdminLogin";
import VolunteerLogin from "./VolunteerLogin";

function App() {
  const [isVolunteerLogin, setIsVolunteerLogin] = useState(false);
  return (
    <div className="appRoot">
      <img src={logo} className="App-logo" alt="logo" />
      {isVolunteerLogin ? (
        <VolunteerLogin />
      ) : (
        <AdminLogin setIsVolunteerLogin={setIsVolunteerLogin} />
      )}
    </div>
  );
}

export default App;
