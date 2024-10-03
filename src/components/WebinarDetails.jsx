import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import RegistrationForm from './RegistrationForm';

const WebinarDetails = ({ title, description, date, time, presenter }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-2">Date: {date}</p>
      <p className="text-gray-600 mb-2">Time: {time}</p>
      <p className="text-gray-600 mb-4">Presenter: {presenter}</p>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

const WebinarDetailsPage = () => {
  const { id } = useParams();
  const { webinars } = useAppContext();
  const webinar = webinars.find(w => w.id === id);

  if (!webinar) {
    return <div>Webinar not found</div>;
  }

  return (
    <div className="container mx-auto">
      <WebinarDetails
        title={webinar.title}
        description={webinar.description}
        date={webinar.date}
        time={webinar.time}
        presenter={webinar.presenter || 'TBA'}
      />
      <div className="mt-8">
        <RegistrationForm webinarId={webinar.id} />
      </div>
    </div>
  );
};

export default WebinarDetailsPage;