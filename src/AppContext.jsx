import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const registerForWebinar = (webinarId, userData) => {
        setWebinars(webinars.map(w => {
            if (w.id === webinarId) {
            return { ...w, attendees: [...(w.attendees || []), userData] };
            }
            return w;
        }));
    };

    const [webinars, setWebinars] = useState([
        { id: '1', title: 'Introduction to React', date: '2024-05-15', time: '14:00', description: 'Learn the basics of React' },
        { id: '2', title: 'Advanced JavaScript Techniques', date: '2024-06-01', time: '15:30', description: 'Explore advanced JS concepts' },
      ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'KVK Siddartha', email: 'kvksiddartha@gmail.com', password: 'password123' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password456' },
    { id: 3, name: 'Rithwik', email: 'rithwik@gmail.com', password: 'asdfghjkl' },
  ]);

  const [currentUser, setCurrentUser] = useState(null);

  const addWebinar = (webinar) => {
    setWebinars([...webinars, { ...webinar, id: webinars.length + 1 }]);
  };

  const updateWebinar = (id, updatedWebinar) => {
    setWebinars(webinars.map(w => w.id === id ? { ...w, ...updatedWebinar } : w));
  };

  const deleteWebinar = (id) => {
    setWebinars(webinars.filter(w => w.id !== id));
  };

  const registerUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AppContext.Provider value={{
      webinars,
      addWebinar,
      updateWebinar,
      deleteWebinar,
      users,
      registerUser,
      currentUser,
      login,
      logout,
      registerForWebinar,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);