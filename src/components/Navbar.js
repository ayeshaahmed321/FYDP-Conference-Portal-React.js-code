import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';

const Navbar = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl">My Navbar</h1>
            <div>
                {isAuthenticated ? (
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Logout
                    </button>
                ) : (
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
