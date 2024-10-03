import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const AdminDashboard = () => {
  const { webinars } = useAppContext();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Link to="/admin/schedule" className="p-4 bg-green-600 text-white rounded-lg shadow-lg text-center">Schedule Webinar</Link>
        <Link to="/admin/registrations" className="p-4 bg-blue-600 text-white rounded-lg shadow-lg text-center">Manage Registrations</Link>
        <Link to="/admin/resources" className="p-4 bg-purple-600 text-white rounded-lg shadow-lg text-center">Upload Resources</Link>
      </div>
      <h2 className="text-xl font-bold mb-4">Start Live Sessions</h2>
      <div className="grid grid-cols-2 gap-4">
        {webinars.map((webinar) => (
          <Link
            key={webinar.id}
            to={`/admin/live-session/${webinar.id}`}
            className="p-4 bg-red-600 text-white rounded-lg shadow-lg text-center"
          >
            Start Live Session: {webinar.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;