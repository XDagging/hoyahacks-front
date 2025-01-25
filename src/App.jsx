import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/index'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/upload" element={<div>Upload</div>} />
      </Routes>
    </Router>
  )
}

export default App;
