import React from 'react';
import { useAppContext } from '../AppContext';

const ManageRegistrations = () => {
  const { webinars } = useAppContext();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Registrations</h2>
      {webinars.map((webinar) => (
        <div key={webinar.id} className="mb-4 p-4 border rounded">
          <h3 className="text-xl font-bold">{webinar.title}</h3>
          <p>Date: {webinar.date}</p>
          <p>Registrations: {webinar.attendees ? webinar.attendees.length : 0}</p>
        </div>
      ))}
    </div>
  );
};

export default ManageRegistrations;