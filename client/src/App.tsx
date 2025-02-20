import React from 'react';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/* navbar sitcky + home(tiles) + latest tech news + upd */