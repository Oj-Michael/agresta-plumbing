import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PlumbingServices from './pages/PlumbingServices';
import Renovation from './pages/Renovation';
import Contact from './pages/Contact';

// Import components
import Header from './components/common/Header';
import Footer from './components/layout/Footer';

// Import hooks
import { useAnimations } from './hooks/useAnimations';

// Import styles
import './styles/main.scss';

function App() {
  // Initialize animations at app level
  useAnimations();

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/plumbing-services" element={<PlumbingServices />} />
              <Route path="/renovation" element={<Renovation />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
