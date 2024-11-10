import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
