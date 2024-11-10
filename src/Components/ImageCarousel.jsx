import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importación correcta para Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa los módulos que necesites
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import img1 from '../assets/Imagenes_Carrousel/img1.jpg';
import img2 from '../assets/Imagenes_Carrousel/img2.jpg';
import img3 from '../assets/Imagenes_Carrousel/img3.jpg';

const slides = [
    {
      image: img1,
      title: "Bienvenido al Paseo Comercial Las Rosas",
      description: "Encuentra el lugar ideal para disfrutar",
      buttonText: "Ver Locales",
    },
    {
      image: img2,
      title: "Espacios Comerciales",
      description: "Perfectos para tu negocio en crecimiento.",
      buttonText: "Explorar Espacios",
    },
    {
      image: img3,
      title: "Alquiler para eventos",
      description: "Reserve tu espacio para un momento inolvidable",
      buttonText: "Conoce Más",
    },
  ];
  
  const ImageCarousel = () => {
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
              style={{ filter: 'brightness(0.4)' }} // Aplica opacidad oscura
            />
  
            {/* Contenido sobre la imagen */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-4xl md:text-4xl font-bold mb-4 animate-fadeIn">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-6 opacity-80 animate-fadeIn delay-200">{slide.description}</p>
              <button className="bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition animate-fadeIn delay-400">
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default ImageCarousel;