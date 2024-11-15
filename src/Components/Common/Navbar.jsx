import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCog } from 'react-icons/fa';
import { isAuthenticated, loginAdmin, logoutAdmin } from "../Services/authService";

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
      setShowLoginModal(true); // Muestra el modal de inicio de sesión si no está autenticado
    }
  };

  // Nueva función para desplazar hacia la sección de contacto
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await loginAdmin(email, password);
    if (success) {
      setIsAdmin(true);
      setShowLoginModal(false);
      navigate('/admin');
    } else {
      alert('Credenciales inválidas');
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
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">Logo</Link>
        </h1>

        <div className="hidden md:flex space-x-4 mx-auto">
          <Link to="/" className="hover:text-gray-300">Inicio</Link>
          <Link to="/properties" className="hover:text-gray-300">Locales</Link>
          <button onClick={handleScrollToContact} className="hover:text-gray-300">Contacto</button>
        </div>

        <div className="hidden md:flex">
          {isAdmin ? (
            <button onClick={handleLogout} className="hover:text-gray-300">
              Cerrar Sesión
            </button>
          ) : (
            <button onClick={handleAdminClick} className="hover:text-gray-300">
              <FaUserCog className="text-2xl" />
            </button>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Modal de Login */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
          <div className="bg-gray-300 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <button type="submit" className="w-full p-2 bg-gray-900 text-white rounded">Iniciar Sesión</button>
              <button onClick={() => setShowLoginModal(false)} className="w-full p-2 mt-2 bg-gray-900 text-white rounded">Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
