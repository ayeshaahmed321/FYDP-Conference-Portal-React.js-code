import React from 'react';
import Navbar from './components/Navbar'; // Updated import path
import Footer from './components/Footer'; // Updated import path

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to ConferaFlow</h1>
        <p className="text-lg mb-6">Manage conferences easily and efficiently.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg">Request a demo</button>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg">Contact sales</button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
