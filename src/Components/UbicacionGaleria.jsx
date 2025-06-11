import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const UbicacionGaleria = () => {
  return (
    <section className="py-16 bg-secondary px-6" id='Ubicacion'>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Texto descriptivo */}
        <div>
          <h3 className="text-3xl font-title text-primary mb-4 flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> ¿Dónde podés encontrarnos?
          </h3>
          <p className="mb-4 font-body text-black text-xl">
            Nuestra galería se encuentra estratégicamente ubicada en <strong>Juan M de Rosas y Ruta 315</strong>,
            ofreciendo acceso directo por Ruta Provincial 315, garantizando una llegada cómoda y rápida.
          </p>
          <p className="font-body text-primary">
            ¡Te invitamos a visitarnos y descubrir una nueva experiencia comercial!
          </p>
        </div>
        <div>
          <iframe
            className="w-full h-64 md:h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.511622959583!2d-65.27007536958074!3d-26.74363427286524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942267c244cf165d%3A0x54c0c7e44a3a7563!2sJuan%20Manuel%20de%20Rosas%20%26%20Ruta%20Provincial%20315%2C%20T4103%20Taf%C3%AD%20Viejo%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1731019838670!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            title="Ubicación de la Galería"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default UbicacionGaleria;
