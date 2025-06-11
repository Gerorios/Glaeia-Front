import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../assets/Logo/logo2.png";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (sectionId) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        } else {
            const section = document.getElementById(sectionId);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const handleScrollToContact = () => handleScrollToSection('contact-section');
    const handleScrollToNovedades = () => handleScrollToSection('novedades');
    const handleScrollToInicio = () => handleScrollToSection('inicio');
    const handleScrollToLocales = () => handleScrollToSection('Sect-locales');
    const handleScrollToUbic = () => handleScrollToSection('Ubicacion')
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${
            scrolled ? 'bg-primary shadow-md' : 'bg-transparent'
        } text-secondary`}>
            <div className="container mx-auto flex justify-between items-center px-4 h-20">
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-36 object-contain rounded-full"
                    />
                </Link>

                <div className="hidden md:flex space-x-4 ml-auto">
                    <Link to="/" className="hover:text-gray-300" onClick={handleScrollToInicio}>Inicio</Link>
                    <Link className="hover:text-gray-300" onClick={handleScrollToLocales}>Locales</Link>
                    <button onClick={handleScrollToContact} className="hover:text-gray-300">Contacto</button>
                    <button onClick={handleScrollToNovedades} className="hover:text-gray-300">Novedades</button>
                    <button onClick={handleScrollToUbic} className="hover:text-gray-300">Encontranos</button>
                </div>

                <div className="md:hidden mx-4">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

{isOpen && (
  <div
    className="absolute right-4 top-20 w-52 bg-white text-black rounded-md shadow-lg border border-gray-200 z-50 animate-slideDown"
  >
    <Link
      to="/"
      onClick={handleScrollToInicio}
      className="block px-4 py-3 text-sm hover:bg-gray-100"
    >
      Inicio
    </Link>
    <Link
      onClick={handleScrollToLocales}
      className="block px-4 py-3 text-sm hover:bg-gray-100"
    >
      Locales
    </Link>
    <button
      onClick={handleScrollToContact}
      className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100"
    >
      Contacto
    </button>
    <button
      onClick={handleScrollToNovedades}
      className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100"
    >
      Novedades
    </button>
    <button onClick={handleScrollToUbic} className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100">Encontranos</button>
  </div>
)}

        </nav>
    );
};

export default Navbar;
