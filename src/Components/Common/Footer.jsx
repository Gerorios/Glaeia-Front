import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-secondary py-4 text-center flex justify-between">
            <p className="text-md mx-3">&copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/geronimo-rios-antenucci-573591285/" className='"text-white hover:underline'>Todos los derechos reservados.</a></p>
            <div><p className='text-md mx-3'>Visitanos en <a href="https://www.instagram.com/paseolasrosas_/" className='text-white hover:underline'>nuestro Instragram</a></p></div>
        </footer>
    );
};

export default Footer;
