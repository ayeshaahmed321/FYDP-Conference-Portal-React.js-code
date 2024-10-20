// components/Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isConferencesOpen, setIsConferencesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">ConferaFlow</div>
        <div className="space-x-4">
          {/* Services Dropdown */}
          <div className="relative inline-block">
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="text-white">
              Services ▼
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg py-2">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Conference Management</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Registration</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Publishing</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Smart CFP</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Smart Slide</a>
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div className="relative inline-block">
            <button onClick={() => setIsAboutUsOpen(!isAboutUsOpen)} className="text-white">
              About Us ▼
            </button>
            {isAboutUsOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg py-2">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Mission</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Team</a>
              </div>
            )}
          </div>

          {/* For Conferences Dropdown */}
          <div className="relative inline-block">
            <button onClick={() => setIsConferencesOpen(!isConferencesOpen)} className="text-white">
              For Conferences ▼
            </button>
            {isConferencesOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg py-2">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Submission Guidelines</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Review Process</a>
              </div>
            )}
          </div>

          {/* Contact Dropdown */}
          <div className="relative inline-block">
            <button onClick={() => setIsContactOpen(!isContactOpen)} className="text-white">
              Contact ▼
            </button>
            {isContactOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg py-2">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Email Us</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Support</a>
              </div>
            )}
          </div>

          {/* Login Button */}
          <button onClick={handleLoginClick} className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
