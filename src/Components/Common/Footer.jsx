import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-secondary py-4 text-center flex justify-between items-center">
            <p className="text-md mx-3">
                &copy; {new Date().getFullYear()}{" "}
                <a
                    href="https://www.linkedin.com/in/geronimo-rios-antenucci-573591285/"
                    className="text-white hover:underline"
                    target="_blank" rel="noopener noreferrer"
                >
                    Todos los derechos reservados.
                </a>
            </p>
            <div className="mx-3">
                {/* Texto completo en pantallas grandes */}
                <p className="hidden md:block text-md">
                    Visitanos en{" "}
                    <a
                        href="https://www.instagram.com/paseolasrosas_/"
                        className="text-white hover:underline"
                        target="_blank" rel="noopener noreferrer"
                    >
                        nuestro Instagram
                    </a>
                </p>
                {/* Solo logo en pantallas pequeñas */}
                <a
                    href="https://www.instagram.com/paseolasrosas_/"
                    className="md:hidden inline-block text-white text-2xl hover:text-secondary"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;