import React from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaUtensils, FaEnvelope } from 'react-icons/fa';

const aboutItems = [
  {
    icon: <FaStore className="text-4xl text-blue-500 mb-4" />,
    title: "Locales Disponibles",
    description: "Descubre locales comerciales en alquiler ideales para iniciar o expandir tu negocio dentro de la galería.",
  },
  {
    icon: <FaUtensils className="text-4xl text-green-500 mb-4" />,
    title: "Gastronomía y Más",
    description: "Explora una variedad de locales de comida, cafeterías y cervecerias, brindando a nuestros visitantes una experiencia completa.",
  },
  {
    icon: <FaEnvelope className="text-4xl text-yellow-500 mb-4" />,
    title: "Contáctanos",
    description: "Consulta sobre nuestros espacios disponibles y reserva el lugar perfecto para tu negocio.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-secondary py-16 px-8" id='more-info-section'>
      {/* Texto descriptivo de la galería */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Bienvenido al Paseo Comercial Las Rosas 

        </h2>
        <p className="text-lg md:text-xl text-black">
          Nuestra galería comercial es el punto de encuentro para negocios de todo tipo. Aquí podrás encontrar desde locales gastronómicos y de moda hasta espacios dedicados a servicios. Un lugar diseñado para ofrecer a los visitantes una experiencia única y, al mismo tiempo, brindar a los comerciantes un espacio estratégico en una ubicación privilegiada. 
        </p>
      </div>

      {/* Tarjetas informativas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
