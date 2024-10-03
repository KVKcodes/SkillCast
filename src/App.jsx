import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppContext } from './AppContext';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import HomePage from './components/Home';
import LiveSession from './components/LiveSession';
import Login from './components/Login';
import ManageRegistrations from './components/ManageRegistrations';
import MyWebinars from './components/MyWebinars';
import Navbar from './components/Navbar';
import PostEventResources from './components/PostEventResources';
import RegistrationForm from './components/RegistrationForm';
import ScheduleForm from './components/ScheduleForm';
import ScheduleWebinar from './components/ScheduleWebinar';
import UploadResources from './components/UploadResources';
import WebinarDetailsPage from './components/WebinarDetails';
import Webinars from './components/Webinars';

function App() {
  const { currentUser } = useAppContext();

  return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          <Routes>
            <Route path="/" element={currentUser ? <HomePage /> : <Login />} />
            <Route path="/webinar/:id" element={<WebinarDetailsPage />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/register/:id" element={<RegistrationForm />} />
            <Route path="/resources" element={<PostEventResources />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/schedule" element={<ScheduleForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-webinars" element={<MyWebinars />} />
            <Route path="/admin/schedule" element={<ScheduleWebinar />} />
            <Route path="/admin/registrations" element={<ManageRegistrations />} />
            <Route path="/admin/resources" element={<UploadResources />} />
            <Route path="/admin/live-session/:id" element={<LiveSession />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;