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

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await loginAdmin(email, password);
        if (success) {
            setIsAdmin(true);
            setShowLoginModal(false);
            navigate('/admin');
            toast.success('Inicio de sesión exitoso')
        } else {
            toast.error('Credenciales inválidas')
        }
    };

    const handleLogout = () => {
        logoutAdmin();
        setIsAdmin(false);
        navigate('/');
    };

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

                <div className="hidden md:flex space-x-4 mx-auto">
                    <Link to="/" className="hover:text-gray-300">Inicio</Link>
                    <Link to="/properties" className="hover:text-gray-300">Locales</Link>
                    <button onClick={handleScrollToContact} className="hover:text-gray-300">Contacto</button>
                    <button onClick={handleScrollToNovedades} className="hover:text-gray-300">Novedades</button>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    {isAdmin ? (
                        <>
                            <button
                                onClick={() => navigate('/admin')}
                                className="hover:text-gray-300 flex items-center space-x-2"
                            >
                                <FaTools className="text-2xl" />
                            </button>
                            <button onClick={handleLogout} className="hover:text-gray-300 flex items-center">
                                <FaSignOutAlt className="text-2xl" />
                            </button>
                        </>
                    ) : (
                        <button onClick={handleAdminClick} className="hover:text-gray-300">
                            <FaUserCog className="text-2xl" />
                        </button>
                    )}
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
                    {isAdmin ? (
                        <>
                            <button
                                onClick={() => { toggleMenu(); navigate('/admin'); }}
                                className="hover:text-gray-300 flex items-center space-x-2"
                            >
                                <FaTools className="text-xl" />
                            </button>
                            <button
                                onClick={() => { toggleMenu(); handleLogout(); }}
                                className="hover:text-gray-300 flex items-center"
                            >
                                <FaSignOutAlt className="text-xl" />
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => { toggleMenu(); setShowLoginModal(true); }}
                            className="hover:text-gray-300"
                        >
                            Iniciar Sesión
                        </button>
                    )}
                </div>
            )}
            {showLoginModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
                    <div className="bg-white p-8 rounded-lg shadow-xl relative w-96">
                        <button
                            onClick={() => setShowLoginModal(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <FaTimes className="text-xl" />
                        </button>
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                            Iniciar Sesión
                        </h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-primary text-white rounded-lg hover:bg-neutral transition duration-300"
                            >
                                Iniciar Sesión
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
