import React, { useState } from 'react';
import { useAppContext } from '../AppContext';

const UploadResources = () => {
  const [resource, setResource] = useState({ title: '', link: '' });
  const { addResource } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addResource(resource);
    setResource({ title: '', link: '' });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Upload Resources</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Resource Title
          </label>
          <input
            type="text"
            id="title"
            value={resource.title}
            onChange={(e) => setResource({ ...resource, title: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block text-gray-700 text-sm font-bold mb-2">
            Resource Link
          </label>
          <input
            type="url"
            id="link"
            value={resource.link}
            onChange={(e) => setResource({ ...resource, link: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Upload Resource
        </button>
      </form>
    </div>
  );
};

export default UploadResources;