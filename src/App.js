import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
    <Router>
    <div>
    <Nav></Nav>
      <Routes>
    
        <Route
        path="/my-portfolio"
        element={<About />}
      />
      <Route
        path="/portfolio"
        element={<Portfolio />}
      />
    
    </Routes>
    </div>
    </Router>
    </main>
  );
}

export default App;
