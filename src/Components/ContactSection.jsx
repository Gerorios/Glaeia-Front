import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-8 bg-white px-4 sm:px-8" id="contact-section">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">Contáctanos</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Formulario de Contacto */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Nombre
            </label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Correo Electrónico
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
              Mensaje
            </label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto">
              Enviar
            </button>
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="text-base sm:text-lg text-gray-900 space-y-6">
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-blue-500 text-xl sm:text-2xl flex-shrink-0" />
            <p>Juan M de Rosas y Ruta 315, con acceso directo por ruta 315</p>
          </div>
          <div className="flex items-start space-x-3">
            <FaPhoneAlt className="text-blue-500 text-xl sm:text-2xl flex-shrink-0" />
            <p>+54 9 123 456 789</p>
          </div>
          <div className="flex items-start space-x-3">
            <FaEnvelope className="text-blue-500 text-xl sm:text-2xl flex-shrink-0 md:disabled:" />
            <p className="break-words overflow-wrap-normal md:text-xl">
              <a
                href="mailto:Pcr-administracion@paseocomerciallasrosas.com.ar"
                className="text-black hover:underline"
              >
                Pcr-administracion@paseocomerciallasrosas.com.ar
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
