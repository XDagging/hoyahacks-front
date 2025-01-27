import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import demoOne from "../assets/demoOne.mp4"
import demoTwo from "../assets/demoTwo.mp4"
import demoThree from "../assets/demoThree.png"

const HomePage = () => {
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
                  <li><Link to="/upload">Upload Candidates</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            {/* <img src="/logo.png" alt="HiCruit" className="h-8 mr-2" /> */}
            HiCruit
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

      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-200 font-1">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold mb-8">Welcome to HiCruit</h1>
            <div className="text-4xl font-semibold text-primary mb-8">
              <Typewriter
                options={{
                  strings: [
                    'Streamline your hiring process',
                    'AI-powered candidate screening',
                    'Automated interview calls',
                    'Smart candidate ranking'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
            {!isLoggedIn && (
              <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>
            )}
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-32">
          {/* First Demo Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 font-2">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Post Your Job Requirements</h2>
              <p className="text-lg mb-4">Create detailed job listings with specific requirements, skills, and criteria. Our AI understands exactly what you're looking for in your ideal candidate.</p>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Average Time Saved</div>
                  <div className="stat-value">58%</div>
                  <div className="stat-desc">Compared to traditional hiring</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-fit h-fit">
              <div className="mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                  <div className="input">https://hicruit.us</div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  {/* Replace with demo video */}
                  
                  <video playsInline autoPlay controls muted loop  controlsList="nofullscreen" className="rounded-box h-full w-full">
                                    <source src={demoOne} type="video/mp4"></source>
                </video>        
                  {/* <div className="w-full h-64 bg-base-100 flex items-center justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                    Demo Video: Job Posting Interface
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Second Demo Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 font-2">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Upload Candidates with Ease</h2>
              <p className="text-lg mb-4">Import your candidate pool via CSV or add them manually. Our system processes resumes and candidate information automatically.</p>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Processing Speed</div>
                  <div className="stat-value">99+</div>
                  <div className="stat-desc">Candidates per minute</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                  <div className="input">https://hicruit.us</div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  {/* Replace with demo video */}
                  <video playsInline autoPlay controls muted loop  controlsList="nofullscreen" className="rounded-box h-full w-full">
                                    <source src={demoTwo} type="video/mp4"></source>
                </video>        
                  
                  {/* <div className="w-full h-64 bg-base-100 flex items-center justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                    Demo Video: CSV Upload Interface
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Third Demo Section */}
          <div className="flex flex-col lg:flex-row items-center gap-80 font-2">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">AI-Powered Screening Calls</h2>
              <p className="text-lg mb-4">Our AI conducts initial screening calls with candidates, asking relevant questions based on your requirements and analyzing responses in real-time.</p>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Interview Completion</div>
                  <div className="stat-value">62%</div>
                  <div className="stat-desc">Success rate</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="mockup-phone border-primary">
                <div className="camera"></div> 
                <div className="display">
                  <div className="phone-2 artboard artboard-demo">
                    {/* Replace with demo video */}
                    <img className='object-cover w-full h-full' src={demoThree} />
                    
                    {/* <div className="w-full h-64 bg-base-100 flex items-center justify-center">
                      <span className="loading loading-spinner loading-lg"></span>
                      Demo Video: AI Call Interface
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4 py-16 bg-base-100 font-1">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose HiCruit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <h2 className="card-title">Time Efficient</h2>
              <p>Reduce hiring time by 80% with automated screening and interviews</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <h2 className="card-title">Cost Effective</h2>
              <p>Save on recruitment costs with our automated AI solution</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <h2 className="card-title">Unbiased Screening</h2>
              <p>Ensure fair evaluation with AI-powered assessment</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <h2 className="card-title">Data Driven</h2>
              <p>Make informed decisions with detailed analytics and insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 bg-base-300">
        <div className="flex justify-start items-center gap-2">
          {/* <img src="/logo.png" alt="HiCruit" className="h-8" /> */}
          <p className="font-bold text-lg">HiCruit</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;