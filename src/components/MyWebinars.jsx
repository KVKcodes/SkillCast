import React from 'react';
import { useAppContext } from '../AppContext';
import WebinarCard from './WebinarCard';

const MyWebinars = () => {
  const { currentUser, webinars } = useAppContext();

  if (!currentUser) {
    return <div>Please log in to view your webinars</div>;
  }

  const userWebinars = webinars.filter(webinar => webinar.attendees && webinar.attendees.includes(currentUser.id));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Webinars</h1>
      {userWebinars.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {userWebinars.map((webinar) => (
            <WebinarCard
              key={webinar.id}
              id={webinar.id}
              title={webinar.title}
              date={webinar.date}
              description={webinar.description}
            />
          ))}
        </div>
      ) : (
        <p>You haven't registered for any webinars yet.</p>
      )}
    </div>
  );
};

export default MyWebinars;