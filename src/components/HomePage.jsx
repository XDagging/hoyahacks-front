import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';


const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="/logo.png" alt="HireBettr" className="h-8 mr-2" />
            HireBettr
          </Link>
        </div>
        
        <div className="navbar-end gap-2">
          {isLoggedIn ? (
            <>
              <Link 
                to="/dashboard" 
                className="btn btn-ghost btn-sm hover:bg-base-200"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-5 h-5 mr-1"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" 
                  />
                </svg>
                Dashboard
              </Link>
              <Link 
                to="/upload" 
                className="btn btn-outline btn-sm hover:bg-base-200"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-5 h-5 mr-1"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                  />
                </svg>
                Upload Candidates
              </Link>
              <button 
                onClick={() => setIsLoggedIn(false)} 
                className="btn btn-primary btn-sm"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-5 h-5 mr-1"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" 
                  />
                </svg>
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-ghost btn-lg">Login</Link>
              <Link to="/signup" className="btn btn-primary btn-lg">Sign Up</Link>
            </div>
          )}
        </div>
      </div>


      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold mb-8">Welcome to HireBettr</h1>
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
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Post Your Job Requirements</h2>
              <p className="text-lg mb-4">Create detailed job listings with specific requirements, skills, and criteria. Our AI understands exactly what you're looking for in your ideal candidate.</p>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Average Time Saved</div>
                  <div className="stat-value">??%</div>
                  <div className="stat-desc">Compared to traditional hiring</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                  <div className="input">https://daisyui.com</div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  {/* Replace with demo video */}
                  <div className="w-full h-64 bg-base-100 flex items-center justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                    Demo Video: Job Posting Interface
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Demo Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Upload Candidates with Ease</h2>
              <p className="text-lg mb-4">Import your candidate pool via CSV or add them manually. Our system processes resumes and candidate information automatically.</p>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Processing Speed</div>
                  <div className="stat-value">??+</div>
                  <div className="stat-desc">Candidates per minute</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                  <div className="input">https://daisyui.com</div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  {/* Replace with demo video */}
                  <div className="w-full h-64 bg-base-100 flex items-center justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                    Demo Video: CSV Upload Interface
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Demo Section */}
          <div className="flex flex-col lg:flex-row items-center gap-80">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">AI-Powered Screening Calls</h2>
              <p className="text-lg mb-4">Our AI conducts initial screening calls with candidates, asking relevant questions based on your requirements and analyzing responses in real-time.</p>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Interview Completion</div>
                  <div className="stat-value">??%</div>
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
                    <div className="w-full h-64 bg-base-100 flex items-center justify-center">
                      <span className="loading loading-spinner loading-lg"></span>
                      Demo Video: AI Call Interface
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4 py-16 bg-base-100">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose HireBettr?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <h2 className="card-title">Time Efficient</h2>
              <p>Reduce hiring time by ??% with automated screening and interviews</p>
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
          <img src="/logo.png" alt="HireBettr" className="h-8" />
          <p className="font-bold text-lg">HireBettr</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;