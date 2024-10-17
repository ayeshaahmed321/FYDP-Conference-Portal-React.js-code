import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './context/Auth';
import logo from './logo.svg';
import './App.css';

// Main App component
const App = () => {
    return (
        <AuthProvider>
            <div className="App">
                <Navbar />
                {/* Remove or comment out the header section */}
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header> */}
                <main className="p-4">
                    <p>Main Content Area</p>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
};

export default App;
