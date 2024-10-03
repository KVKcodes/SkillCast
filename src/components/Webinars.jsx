import React from 'react';
import { useAppContext } from '../AppContext';
import WebinarCard from './WebinarCard';

const Webinars = () => {
  const { webinars } = useAppContext();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Webinars</h1>
      <div className="grid grid-cols-3 gap-4">
        {webinars.map((webinar) => (
          <WebinarCard
            key={webinar.id}
            id={webinar.id}
            title={webinar.title}
            date={webinar.date}
            description={webinar.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Webinars;