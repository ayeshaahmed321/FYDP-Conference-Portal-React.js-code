// src/components/PasswordReset.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetRequest = (e) => {
    e.preventDefault();
    // Handle sending verification code logic here
    alert(`Verification code sent to ${email}`);
    // Redirect to verification code page
    navigate('/verify-code');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleResetRequest} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Send Reset Link Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Send Verification Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
