import React, { useState, useEffect } from 'react';
import './ManageEvents.css';
const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    // Fetch events data from an API or database
    // Example:
    // const fetchedEvents = fetchEvents();
    // setEvents(fetchedEvents);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddEvent = () => {
    // Validate input fields
    if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.description) {
      alert('Please fill in all the fields');
      return;
    }

    // Create a new event object with unique ID
    const newEventWithId = {
      id: Date.now(),
      ...newEvent,
    };

    // Add the new event to the events array
    setEvents((prevEvents) => [...prevEvents, newEventWithId]);

    // Clear the input fields
    setNewEvent({
      title: '',
      date: '',
      location: '',
      description: '',
    });
  };

  const handleDeleteEvent = (eventId) => {
    // Filter out the event with the specified ID
    const updatedEvents = events.filter((event) => event.id !== eventId);

    // Update the events array
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h2>Manage Events</h2>

      <h3>Add New Event</h3>
      <input type="text" name="title" placeholder="Title" value={newEvent.title} onChange={handleInputChange} />
      <input type="text" name="date" placeholder="Date" value={newEvent.date} onChange={handleInputChange} />
      <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Description" value={newEvent.description} onChange={handleInputChange} />
      <button onClick={handleAddEvent}>Add Event</button>

      <h3>Events List</h3>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h4>{event.title}</h4>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default ManageEvents;
