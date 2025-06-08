import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-secondary py-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/geronimo-rios-antenucci-573591285/" className='"text-black hover:underline'>Todos los derechos reservados.</a></p>
        </footer>
    );
};

export default Footer;
