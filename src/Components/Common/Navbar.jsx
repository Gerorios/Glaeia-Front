import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setIsOpen(false); // Cierra el menú en pantallas pequeñas
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">Paseo Comercial Las Rosas</h1>
        
        {/* Botón de hamburguesa para pantallas medianas y pequeñas */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Enlaces de navegación para pantallas grandes */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Inicio</Link>
          <Link to="/properties" className="hover:text-gray-300">Locales</Link>
          <button onClick={handleContactClick} className="hover:text-gray-300">Contacto</button>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link to="/" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700">Inicio</Link>
          <Link to="/properties" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700">Locales</Link>
          <button onClick={handleContactClick} className="block py-2 px-4 text-left hover:bg-gray-700 w-full">Contacto</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
