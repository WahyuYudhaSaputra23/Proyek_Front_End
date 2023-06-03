import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Product from './pages/Product';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Product" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;