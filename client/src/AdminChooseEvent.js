import React from "react";
import "./AdminChooseEvent.css";

function AdminChooseEvent({ events, setIsEventChosen, setEventChosen }) {
  const renderEvents = () =>
    events.map((eventName, i) => (
      <div key={i} className="event" onClick={() => clickEvent(eventName)}>
        {eventName}
      </div>
    ));

  const clickEvent = eventName => {
    setIsEventChosen(true);
    setEventChosen(eventName);
  };
  return <div className="eventsWrapper">{renderEvents()}</div>;
}

export default AdminChooseEvent;
