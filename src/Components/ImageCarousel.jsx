import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importación correcta para Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa los módulos que necesites
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/Imagenes_Carrousel/img1.jpg';
import img2 from '../assets/Imagenes_Carrousel/galeria.webp';
import img3 from '../assets/Imagenes_Carrousel/fotosflores.webp';

const slides = [
  {
    image: img3,
    title: "Bienvenido al Paseo Comercial Las Rosas",
    description: "Encuentra el lugar ideal para disfrutar",
    buttonText: "Ver Locales",
  },
  {
    image: img2,
    title: "Espacios Comerciales",
    description: "Perfectos para tu negocio en crecimiento.",
    buttonText: "Contactenos",
  },
  {
    image: img1,
    title: "Alquiler para eventos",
    description: "Reserve tu espacio para un momento inolvidable",
    buttonText: "Conoce Más",
  },
];

const ImageCarousel = () => {
  const navigate = useNavigate(); // Para manejar la navegación entre páginas

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3500 }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="w-full h-[700px] md:h-[700px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          {/* Imagen de fondo con opacidad */}
          <img
            src={slide.image}
            alt={`Imagen ${index + 1}`}
            className="w-full h-full object-cover "
            style={{ filter: 'brightness(0.5)' }} // Aplica opacidad oscura
          />

          {/* Contenido sobre la imagen */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl md:text-4xl font-bold mb-4 animate-fadeIn">{slide.title}</h2>
            <p className="text-lg md:text-xl mb-6 opacity-80 animate-fadeIn delay-200">{slide.description}</p>
            
            {/* Botón dinámico */}
            {slide.buttonText === "Conoce Más" && (
              <button
                onClick={() => document.getElementById('more-info-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white px-6 py-2 rounded-full text-black font-semibold hover:bg-neutral transition animate-fadeIn delay-400"
              >
                {slide.buttonText}
              </button>
            )}

            {slide.buttonText === "Ver Locales" && (
              <button
                onClick={() => navigate('/properties')}
                className="bg-white px-6 py-2 rounded-full text-black font-semibold hover:bg-neutral transition animate-fadeIn delay-400"
              >
                {slide.buttonText}
              </button>
            )}

            {slide.buttonText === "Contactenos" && (
              <button
                onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white px-6 py-2 rounded-full text-black font-semibold hover:bg-neutral transition animate-fadeIn delay-400"
              >
                {slide.buttonText}
              </button>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
