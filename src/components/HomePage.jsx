import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import demoOne from "../assets/demoOne.mp4"
import demoTwo from "../assets/demoTwo.mp4"
import demoThree from "../assets/demoThree.png"
import Footer from "./Footer"
import Navbar from "./Navbar"

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-200 font-1">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold mb-8">Simplify your recruiting process</h1>
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
                <div className="flex flex-row gap-2 w-fit mx-auto">
                <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/works" className="btn btn-lg btn-ghost">Learn more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
</Link>
                </div>
              
          </div>
        </div>
      </div>

      {/* Features/How it works */}
      <div className='p-10'>
        <p className='text-center font-1 text-xl mb-8 text-primary'>Features</p>
        <div className='grid grid-cols-2 gap-2 p-2 rounded-box'>
          <div className='p-3'>
            <div className='badge badge-primary font-1'>Gamechanger</div>
            <p className='font-1 text-5xl my-2 text-base-content'><span className="landing-gradiant">AI-Powered</span> voice screenings</p>

            <p className='font-1 text-lg text-base-content'>We understand how time consuming and frustruating live screenings are. Let's change that...</p>
            <div className='bg-base-300  mt-3 rounded-box p-3 font-1'>
              <p className='font-1 text-lg font-semibold'>Hicruit Automatically:</p>
              <ul className=''>
                <li className='flex flex-row gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
Asks questions to the candidate</li>
                <li className='flex flex-row gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
Analyze candidate based on predefined criteria</li>
                <li className='flex flex-row gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
Saves you hours</li>
              </ul>
            </div>
            <button className='btn font-1 mt-2 btn-lg btn-primary btn-outline !text-normal'>Try it for yourself<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
</svg>
</button>
          </div>
          <div>
            <img src="https://framerusercontent.com/images/Ilavd5UZHEYKyEqxSrcQvLwU4g.png?scale-down-to=1024" className='w-full h-full object-cover' />
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
      <div className="mx-auto px-4 py-16 bg-base-100 font-1">
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
      <Footer />
    </div>
  );
};

export default HomePage;