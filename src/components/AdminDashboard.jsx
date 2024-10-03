import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link to="/admin/schedule" className="p-4 bg-green-600 text-white rounded-lg shadow-lg">Schedule Webinar</Link>
        <Link to="/admin/registrations" className="p-4 bg-blue-600 text-white rounded-lg shadow-lg">Manage Registrations</Link>
        <Link to="/admin/resources" className="p-4 bg-purple-600 text-white rounded-lg shadow-lg">Upload Resources</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
