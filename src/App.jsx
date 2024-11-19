import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar.jsx'; // Importa tu Navbar
import Home from './Components/Home';
import LocalesPage from './Components/Locales/LocalesPage.jsx';

import Footer from "./Components/Common/Footer.jsx";
import AdminPanel from "./Components/Admin/AdminPanel.jsx";
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow font-sans text-gray-800">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>Nosotros</div>} />
            <Route path="/properties" element={<LocalesPage />} />
            <Route path="/contact" element={<div>Contacto</div>} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
