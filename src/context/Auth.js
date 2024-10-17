import React, { createContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
