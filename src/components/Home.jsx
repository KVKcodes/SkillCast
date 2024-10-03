import React from 'react';
import { useAppContext } from '../AppContext';
import WebinarCard from './WebinarCard';
import { FaGraduationCap, FaUsers, FaLaptop } from 'react-icons/fa';

const HomePage = () => {
  const { webinars } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-xl mb-12">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Welcome to SkillCast
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Elevate your skills with our expert-led webinars. Learn, grow, and connect with professionals worldwide.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a href="#upcoming-webinars" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
              Explore Webinars
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Our Features</h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <FaGraduationCap className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">Expert-led Sessions</dt>
                <dd className="mt-2 text-base text-gray-500">Learn from industry professionals and thought leaders in various fields.</dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <FaUsers className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">Interactive Learning</dt>
                <dd className="mt-2 text-base text-gray-500">Engage in real-time Q&A sessions and discussions with speakers and peers.</dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <FaLaptop className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">On-demand Access</dt>
                <dd className="mt-2 text-base text-gray-500">Access recorded sessions and resources anytime, anywhere.</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* Upcoming Webinars Section */}
      <div id="upcoming-webinars" className="py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Upcoming Webinars</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Call to Action */}
      <div className="bg-indigo-700 rounded-lg shadow-xl">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to boost your skills?</span>
            <span className="block">Start learning today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join our community of learners and take your career to the next level.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;