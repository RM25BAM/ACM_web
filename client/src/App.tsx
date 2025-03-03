import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Preloader from './pages/preloader'; // Import the Preloader component
import './App.css';
import CustomCursor from './components/customCursor';
const App: React.FC = () => {
  const [loading, setLoading] = useState(false); // Track loading state

  return (
    <>
      <CustomCursor />
      <BrowserRouter>
        {loading ? (
          <Preloader onComplete={() => setLoading(false)} /> // Show Preloader first
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;



