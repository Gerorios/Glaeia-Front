import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white px-8" id="contact-section">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Contáctanos</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Formulario de Contacto */}
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Nombre
            </label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea 
              id="message" 
              rows="3" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-300 transition duration-300 w-96">
              Enviar
            </button>
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="text-lg text-gray-900 space-y-6 mt-11">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <p>Juan M de Rosas y Ruta 315, con acceso directo por ruta 315</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <p>+54 9 123 456 789</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <p>Pcr-administracion@paseocomerciallasrosas.com.ar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
