import React, { useState, useEffect } from "react";
import "./Events.css";
import axios from "axios";
import {CircularProgress,Box} from "@mui/material";
import Footer from "../../components/Footer/Footer.jsx";





const Events = () => {
  const [loading, setLoading] = useState(true);

  const [events, setEvents] = useState([

  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event === selectedEvent ? null : event);
  };

  const getData = async () => {
    try {
      setLoading(true);
      let res = await axios.get("https://finalproject-app-api.onrender.com/event");
      console.log(res.data.message);
      setEvents(res.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Function to render the list of events
  const renderEvents = () => {
    if (events.length === 0) {
      return <p className="events-list__no-events">No events available.</p>;
    }



    return events.map((event) => (
      <div
        key={event.id}
        className={`events-list__event ${
          selectedEvent === event ? "events-list__event--selected" : ""
        }`}
        onClick={() => handleEventClick(event)}
      >
        <h3 className="event-title">{event.title}</h3>
        <p className="event-date">Date: {event.date}</p>
        <p className="event-location">Location: {event.location}</p>
        {selectedEvent === event && (
          <>
            <p className="event-description">{event.description}</p>
            <div className="event-Details">
              <p className="event-Details__title">Details:</p>
              <ul className="event-Details__list">
                {event.Details.map((attendee) => (
                  <li key={attendee} className="event-Details__item">
                    {attendee}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <>
      {loading ? (
        <Box sx={{width: "100%", height: "60vh", display: "grid", placeItems: "center"}}>
         
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div className="bgEvents"></div>
          <section className="events-section">
            <div className="containerevents">
              <h2 className="events-title">Upcoming Events</h2>
              <div className="events-list">{renderEvents()}</div>
            </div>
          </section>
          {/* <ManageEvents/> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default Events;
