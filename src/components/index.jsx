import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {isLoggedIn && (
                <>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/upload">Upload Candidates</Link></li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="/logo.png" alt="HireBettr" className="h-8 mr-2" />
            AI Recruiter
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {isLoggedIn && (
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/upload">Upload Candidates</Link></li>
            </ul>
          )}
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
      </div>
    )
    }

export default Home;