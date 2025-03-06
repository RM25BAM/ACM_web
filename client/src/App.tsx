import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Preloader from './pages/preloader';
import './App.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true); // Track loading state

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} /> // DEFAULT IS TRUE unless set by Usestate as true
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;


