// src/components/VerifyCode.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleVerifyCode = (e) => {
    e.preventDefault();
    // Handle code verification logic here
    alert(`Code ${code} verified!`);
    // Redirect to the new password page
    navigate('/reset-password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Verify Code</h2>
        <form onSubmit={handleVerifyCode} className="space-y-6">
          {/* Verification Code Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="code">
              Verification Code
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              placeholder="Enter your verification code"
            />
          </div>

          {/* Verify Code Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Verify Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
