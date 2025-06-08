import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ApplicationForm from './components/ApplicationForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/application" element={<ApplicationForm />} />
      </Routes>
    </div>
  );
}

export default App;