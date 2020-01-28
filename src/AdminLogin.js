import React from "react";
import "./AdminLogin.css";

function AdminLogin({ setIsAdminLoggedIn }) {
  const loginAdmin = () => {
    setIsAdminLoggedIn(true);
  };
  return (
    <div className="adminLoginWrapper">
      <div className="inputFields">
        <div className="title">Organiser Login</div>
        <input type="email" placeholder="Email" className="textInput" />
        <input type="password" placeholder="Password" className="textInput" />
        <button className="login-button" onClick={loginAdmin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
