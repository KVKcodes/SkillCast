import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const RegistrationForm = () => {
  const { currentUser, getRegisteredEvents, setRegisteredEvents } = useAppContext();
  const navigate = useNavigate();
  const { webinarId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      const registeredEvents = getRegisteredEvents();
      if (!registeredEvents.includes(webinarId)) {
        const updatedEvents = [...registeredEvents, webinarId];
        setRegisteredEvents(updatedEvents);
        console.log('Registered for webinar:', webinarId);
      }
      navigate('/my-webinars');
    } else {
      navigate('/login');
    }
  };

  if (!currentUser) {
    return <p>Please log in to register for this webinar.</p>;
  }

  return (
    <form className="bg-white p-6 shadow-md rounded-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Register for Webinar</h2>
      <p>You will be registered with the following information:</p>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">Register</button>
    </form>
  );
};

export default RegistrationForm;