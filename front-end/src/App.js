import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Landing from './pages/Landing';
import ALLproducts from './Components/ALLproducts';
import Footer from './Components/Footer';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#0B0F19] text-slate-100 font-sans selection:bg-primary/30 selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<Home />} /> 
          <Route path="/product/:id" element={<Product />} />
          <Route path="/allCollection" element={<ALLproducts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
