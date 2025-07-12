import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#fffbe6] text-gray-900 font-sans min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#fffbe6] border-b border-gray-200 px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center relative">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-xl font-bold text-green-900 flex items-center space-x-2">
            <span>🌾</span>
            <span>PaddyKart</span>
          </h1>
          {/* Hamburger menu icon for mobile */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-7 h-7 text-green-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <nav
          className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 items-start md:items-center w-full md:w-auto flex ${menuOpen ? 'flex' : 'hidden'} md:flex bg-[#fffbe6] md:bg-transparent absolute md:static top-full left-0 md:top-auto md:left-auto shadow md:shadow-none z-20 md:z-auto p-6 md:p-0 rounded-b-xl md:rounded-none`}
        >
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/AboutUs" className="hover:text-green-700">About Us</Link>
          <Link to="/ForFarmers" className="hover:text-green-700">For Farmers</Link>
          <Link to="/BulkOrders" className="hover:text-green-700">Bulk Orders</Link>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 mt-2 md:mt-0">Sell Your Paddy</button>
        </nav>
      </header>
      <main className="flex-1">
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-[#fffbe6] border-t border-gray-200 px-6 py-4 text-center text-gray-600 text-sm mt-auto">
        © 2025 PaddyKart. Empowering India’s Farmers.
      </footer>
    </div>
  );
}
