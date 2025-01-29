import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import FormError from './FormError'
import callApi from "../CallApi"


const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState("");



  const processSubmit = () => {


    let errorMessage = "";


    const cleanedData = {}
    for (let i=0; i<Object.keys(formData).length; i++) {
      
      cleanedData[Object.keys(formData)[i]] = formData[Object.keys(formData)[i]].trim();
    }

    console.log(cleanedData)
    if (cleanedData.name.length === 0) {
      errorMessage = "Enter your name"
    } else if ((cleanedData.email.length<4) || (cleanedData.email.indexOf("@") === -1) ||(cleanedData.email.indexOf(".") === -1)) {
      errorMessage = "Enter your email"
    } else if ((cleanedData.password.length < 5)) {
      errorMessage = "Your password must be 5 characters long"
    } else if ((cleanedData.password !== cleanedData.confirmPassword)) {
      errorMessage = "Your confirm and regular password aren't the same"
    }


    if (errorMessage === "") {
      callApi("/signup", "POST", cleanedData).then((res) => {
        if (res.message === "logged in") {
          window.location.replace("/dashboard")
        } else if (res.message === "user created") {
          window.location.replace("/dashboard")
        } else if (res.message === "account exists") {
          window.location.replace("/dashboard") 
        } else if (res.code === "err") {
          setErrorMessage("Something went wrong"+"![]"+ Math.random())
        }
      })
      
    } else {
      setErrorMessage(errorMessage+"![]"+ Math.random())
      return;

      


    }






    // callApi("/signup","POST", ).then((res) => {
    //   if (res.message === "insufficient credits") {
    //       setStatusMessage({message: "Insufficient credits to start this campaign", type: "err"})
    //   } else if (res.message === 'not logged in') {
    //       setStatusMessage({message: "Not logged in", type: "err"})
    //       window.location.replace("/login")
    //   } else if (res.code === "err") {
    //       setStatusMessage({message: "Something went wrong", type: "err"})
    //   } else if (res.code === "ok") {
    //       setStatusMessage({message: "All went well", type:"ok"})
    //       setCampaign({
    //           target: "homesellers",
    //           credits: 0,
    //           aiThreshold: 50,
    //           address: "",
    //       })
    //       setNewCampaign(true)
    //   } else {
    //       setStatusMessage({message: "Something went wrong", type: "err"})
    //   }
    
    // })
  }






  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-base-200 flex-col">
      <div className="navbar  font-1 bg-base-100 shadow-lg">
        <div className="flex-none">
          <button onClick={() => navigate(-1)} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {/* <img src="/logo.png" alt="HiCruit" className="h-8 mr-2" /> */}
          HiCruit
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4 relative">
        <FormError error={errorMessage} />
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center w-full mb-6">Create Account</h2>
            
            <div className="space-y-4">
              <FormInput
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                name="name"
              />

              <FormInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                name="email"
              />

              <FormInput
                label="Password"
                type="password"
                placeholder="Choose a password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                name="password"
                helperText="Must be at least 8 characters"
              />

              <FormInput
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                name="confirmPassword"
              />

              <button 
                type="submit" 
                onClick={() => processSubmit()}
                className={`btn btn-primary w-full mt-6 ${loading ? 'loading' : ''}`}
                disabled={loading}
                
              >
                {loading ? 'Creating account...' : 'Create Account'}
                
              </button>

              <div className="divider">OR</div>

              <button 
                type="button"
                className="btn btn-outline w-full"
                onClick={() => {/* Add Google OAuth */}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                  <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="text-center mt-6">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;