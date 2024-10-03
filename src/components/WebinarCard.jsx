import React from 'react';
import { Link } from 'react-router-dom';

const WebinarCard = ({ id, title, date, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{date}</p>
      <p className="text-gray-800 mt-2">{description}</p>
      <Link to={`/webinar/${id}`} className="text-blue-500 mt-4 block">Learn More</Link>
    </div>
  );
};

export default WebinarCard;