import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const { registerForWebinar, currentUser } = useAppContext();
  const navigate = useNavigate();
  const { webinarId } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = currentUser ? { ...currentUser, ...formData } : formData;
    registerForWebinar(webinarId, userData);
    navigate('/my-webinars');
  };

  return (
    <form className="bg-white p-6 shadow-md rounded-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Register for Webinar</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full border px-4 py-2 rounded-md"
          onChange={handleChange}
          required
          defaultValue={currentUser ? currentUser.name : ''}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border px-4 py-2 rounded-md"
          onChange={handleChange}
          required
          defaultValue={currentUser ? currentUser.email : ''}
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Register</button>
    </form>
  );
};

export default RegistrationForm;