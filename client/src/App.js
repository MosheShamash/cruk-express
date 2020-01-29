import React, { useEffect } from "react";
import { useState } from "react";
import logo from "./images/cruk-logo.png";
import "./App.css";
import AdminLogin from "./AdminLogin";
import VolunteerLogin from "./VolunteerLogin";
import AdminChooseEvent from "./AdminChooseEvent";
// const events = [
//   "aslfkhaslfkansflkashdfljk",
//   "asldjhaskjdhaskjdahsd",
//   "aslfkhaslfkansflkashdfljk",
//   "asldjhaskjdhaskjdahsd",
//   "aslfkhaslfkansflkashdfljk",
//   "asldjhaskjdhaskjdahsd"
// ];
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
  fetch("/getStuff", {
    method: "POST",
    body: JSON.stringify({ info: "12345" }),
    contentType: "application/json"
  }).then(res => console.log(res.json()));
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
