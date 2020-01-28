import React, { useEffect } from "react";
import { useState } from "react";
import logo from "./images/cruk-logo.png";
import "./App.css";
import AdminLogin from "./AdminLogin";
import VolunteerLogin from "./VolunteerLogin";
import AdminChooseEvent from "./AdminChooseEvent";

function App() {
  const [events, setEvents] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isEventChosen, setIsEventChosen] = useState(false);
  const [eventChosen, setEventChosen] = useState(null);

  useEffect(() => {
    fetch("https://cruk-user-service.herokuapp.com/event/list", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        setEvents(myJson.events);
      });
  }, []);
  return (
    <div className="appRoot">
      <img src={logo} className="logo" alt="logo" />
      {isAdminLoggedIn ? (
        isEventChosen ? (
          <VolunteerLogin event={eventChosen} />
        ) : (
          <AdminChooseEvent
            setIsEventChosen={setIsEventChosen}
            setEventChosen={setEventChosen}
            events={events}
          />
        )
      ) : (
        <AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />
      )}
    </div>
  );
}

export default App;
