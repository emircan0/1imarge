import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// We'll add these later
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        {/* Wildcard for detailed services for now */}
        <Route path="*" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
