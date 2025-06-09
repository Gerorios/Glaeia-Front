import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCog, FaSignOutAlt, FaTools } from 'react-icons/fa';
import { loginAdmin, isAuthenticated, logoutAdmin } from "../Services/authService";
import logo from "../../assets/Logo/logo2.png";
import { toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setIsAdmin(isAuthenticated());
    }, []);

    const handleAdminClick = () => {
        if (isAdmin) {
            navigate('/admin');
        } else {
            setShowLoginModal(true);
        }
    };

    const handleScrollToSection = (sectionId) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const handleScrollToContact = () => handleScrollToSection('contact-section');
    const handleScrollToNovedades = () => handleScrollToSection('novedades');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primary text-secondary relative">
            <div className="container mx-auto flex justify-between items-center px-4 h-20">
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-36 object-contain rounded-full" 
                    />
                </Link>

                <div className="hidden md:flex space-x-4 ml-auto">
                    <Link to="/" className="hover:text-gray-300">Inicio</Link>
                    <Link to="/properties" className="hover:text-gray-300">Locales</Link>
                    <button onClick={handleScrollToContact} className="hover:text-gray-300">Contacto</button>
                    <button onClick={handleScrollToNovedades} className="hover:text-gray-300">Novedades</button>
                </div>
                <div className="md:hidden mx-4">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-primary text-white flex flex-col items-center space-y-4 py-4 px-4 z-50">
                    <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>Inicio</Link>
                    <Link to="/properties" className="hover:text-gray-300" onClick={toggleMenu}>Locales</Link>
                    <button onClick={handleScrollToContact} className="hover:text-gray-300">Contacto</button>
                    <button onClick={handleScrollToNovedades} className="hover:text-gray-300">Novedades</button>
                
                </div>
            )}
        </nav>
    );
};

export default Navbar;
