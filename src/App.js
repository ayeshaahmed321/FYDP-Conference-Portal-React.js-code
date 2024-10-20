// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateAccount from './components/CreateAccount';
import PasswordReset from './components/PasswordReset'; // Import PasswordReset component
import VerifyCode from './components/VerifyCode'; // Import VerifyCode component
import ResetPassword from './components/ResetPassword'; // Import ResetPassword component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/reset-password" element={<PasswordReset />} /> {/* Password reset request */}
          <Route path="/verify-code" element={<VerifyCode />} /> {/* Code verification */}
          <Route path="/reset-password" element={<ResetPassword />} /> {/* Password reset */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
