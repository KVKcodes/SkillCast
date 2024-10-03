import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import HomePage from './components/Home';
import Login from './components/Login';
import MyWebinars from './components/MyWebinars';
import Navbar from './components/Navbar';
import PostEventResources from './components/PostEventResources';
import RegistrationForm from './components/RegistrationForm';
import ScheduleForm from './components/ScheduleForm';
import WebinarDetailsPage from './components/WebinarDetails';
import Webinars from './components/Webinars';

function App() {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/webinar/:id" element={<WebinarDetailsPage />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/register/:id" element={<RegistrationForm />} />
            <Route path="/resources" element={<PostEventResources />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/schedule" element={<ScheduleForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-webinars" element={<MyWebinars />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;