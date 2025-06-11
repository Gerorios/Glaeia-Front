import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Imágenes y miniatura para video
import galeria1 from '../assets/Galeria/FotoBarDentro.webp';
import galeria2 from '../assets/Galeria/FotoDeFuera.webp';
import galeria3 from '../assets/Galeria/GaleriaLejos.webp'; 
import galeria4 from '../assets/Galeria/GaleriaLejos2.webp';

const ComplexInfoSection = () => {
  const [index, setIndex] = useState(-1);

  const galleryItems = [
    { type: 'image', src: galeria3 },
    { type: 'image', src: galeria2 },
    { type: 'image', src: galeria4 },
    { type: 'image', src: galeria1 },
  ];

  return (
    <section className="py-16 bg-neutral px-6" id='seccion-compleja'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Texto descriptivo */}
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl text-secondary mb-4 font-title">Descubrí el Paseo Comercial Las Rosas</h3>
          <p className="text-gray-100 mb-4 font-body">
            Nuestra galería es un proyecto innovador y nuevo, diseñada para convertirse en un punto de referencia en la región.
            Actualmente contamos con 15 locales comerciales, ofreciendo un espacio ideal para emprendedores y comerciantes que buscan
            expandir sus negocios en un entorno fresco y moderno.
          </p>
          <p className="text-gray-100 font-body">
            Como una galería recién establecida, somos un espacio "virgen" lleno de oportunidades, donde cada negocio puede ser pionero en su área.
            Estamos en crecimiento constante, con acceso directo desde la Ruta Provincial 315 para una llegada cómoda y segura.
          </p>
        </div>

        {/* Galería estilo Masonry */}
        <div className="columns-2   gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md break-inside-avoid"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Galería ${i}`}
                  className="w-full h-auto object-contain transition duration-300 ease-in-out hover:scale-[1.02]"
                />
              ) : (
                <div className="relative">
                  <img
                    src={item.poster}
                    alt="Video preview"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">▶</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={galleryItems}
      />
    </section>
  );
};

export default ComplexInfoSection;
