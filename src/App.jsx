import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// We'll add these later
import CustomCursor from './components/CustomCursor';

const About = () => <div style={{padding: '120px 20px', minHeight: '60vh'}}><h1>Hakkımızda</h1><p>Yapım aşamasında...</p></div>;
const Services = () => <div style={{padding: '120px 20px', minHeight: '60vh'}}><h1>Hizmetler</h1><p>Yapım aşamasında...</p></div>;

function App() {
  return (
    <Router>
      <CustomCursor />
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
