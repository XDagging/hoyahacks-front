import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UploadPage from './components/UploadPage';
import DashboardPage from './components/DashboardPage';

function App() {
 return (
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/signup" element={<SignupPage />} />
       <Route path="/upload" element={<UploadPage />} />
       <Route path="/dashboard" element={<DashboardPage />} />
     </Routes>
   </Router>
 );
}

export default App;