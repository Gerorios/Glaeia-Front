import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const whatsappNumber = "3815638116"; 

  return (
    <section className="py-8 bg-primary px-4 sm:px-8" id="contact-section">
      <h2 className="text-3xl sm:text-3xl  text-center mb-6 text-secondary font-title">Contáctanos</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl text-center text-secondary font-title">¡Estamos para ayudarte!</h3>
          <p className="text-gray-400 text-center text-xl font-semibold">
            Ponte en contacto con nosotros por cualquiera de los medios proporcionados.
          </p>
        </div>

        <div className="text-base sm:text-lg text-gray-900 space-y-6 flex flex-col items-center w-full">
          <div className="flex items-start space-x-3 w-full">
            <FaMapMarkerAlt className="text-secondary text-2xl flex-shrink-0 mt-1" />
            <p className="text-left break-words text-sm sm:text-base w-full">
              Juan M de Rosas y Ruta 315, con acceso directo por ruta 315
            </p>
          </div>
          <div className="flex items-center space-x-3 w-full">
            <FaPhoneAlt className="text-secondary text-2xl flex-shrink-0" />
            <a
              href={`https://wa.me/54${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline text-sm sm:text-base break-words"
            >
              381-563-811-6
            </a>
          </div>
          <div className="flex items-start space-x-3 w-full">
            <FaEnvelope className="text-secondary text-2xl flex-shrink-0 mt-1" />
            <a
              href="mailto:Pcr-administracion@paseocomerciallasrosas.com.ar"
              className=" hover:underline text-left text-sm sm:text-base break-words w-full"
            >
              Pcr-administracion@paseocomerciallasrosas.com.ar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;