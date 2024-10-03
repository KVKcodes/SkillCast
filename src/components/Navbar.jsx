import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Navbar = () => {
  const { currentUser, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white py-2 px-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">SkillCast</Link>
        <div className="space-x-4 text-sm">
          <Link to="/webinars" className="hover:text-blue-200 transition-colors">Webinars</Link>
          {currentUser ? (
            <>
              <Link to="/my-webinars" className="hover:text-blue-200 transition-colors">My Webinars</Link>
              <button onClick={handleLogout} className="hover:text-blue-200 transition-colors">{currentUser.name}</button>
              <Link to="/admin" className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded transition-colors">Admin</Link>
            </>
          ) : (
            <button onClick={handleLoginClick} className="hover:text-blue-200 transition-colors">Login</button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;