import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LoginPage } from './pages/Login';
import React from 'react';

export  function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<LoginPage /> }/>
          <Route  path="/home" element={<Home />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}