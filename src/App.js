import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from'./components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className='selection:bg-gray-900 selection:text-white'>
    <Router>
    <div>
    <Nav></Nav>
      <Routes>
    
        <Route
        path="/my-portfolio"
        element={<About />}
      />
      <Route
        path="/my-portfolio/portfolio"
        element={<Portfolio />}
      />
      <Route
        path="/my-portfolio/contact"
        element={<Contact />}
      />
      <Route
        path="/my-portfolio/resume"
        element={<Resume />}
      />
    </Routes>
    <Footer />
    </div>
    </Router>
    </main>
  );
}

export default App;
