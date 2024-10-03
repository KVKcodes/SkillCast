import React from 'react';

const PostEventResources = ({ resources }) => {
  return (
    <div className="post-event-resources">
      <h2>Post-Event Resources</h2>
      <p>Thank you for attending! Below are the resources from the event:</p>
      
      <ul>
        {resources && resources.length > 0 ? (
          resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))
        ) : (
          <li>No resources available at the moment. Please check back later.</li>
        )}
      </ul>
    </div>
  );
};

export default PostEventResources;