import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const whatsappNumber = "3815638116"; // Número de WhatsApp sin espacios ni guiones

  return (
    <section className="py-8 bg-white px-4 sm:px-8" id="contact-section">
      <h2 className="text-3xl sm:text-3xl font-bold text-center mb-6 text-primary">Contáctanos</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {/* Placeholder para contenido futuro */}
          <h3 className="text-2xl font-semibold text-center text-primary">¡Estamos para ayudarte!</h3>
          <p className="text-gray-400 text-center text-xl font-semibold">
            Ponte en contacto con nosotros por cualquiera de los medios proporcionados.
          </p>
        </div>

        <div className="text-base sm:text-lg text-gray-900 space-y-6 flex flex-col items-center">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-neutral text-2xl flex-shrink-0" />
            <p className="text-center">Juan M de Rosas y Ruta 315, con acceso directo por ruta 315</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-neutral text-2xl flex-shrink-0" />
            <a
              href={`https://wa.me/54${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              381-563-811-6
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-neutral text-2xl flex-shrink-0" />
            <a
              href="mailto:Pcr-administracion@paseocomerciallasrosas.com.ar"
              className="text-black hover:underline"
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
