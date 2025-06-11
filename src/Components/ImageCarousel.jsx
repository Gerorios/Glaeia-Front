import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/Imagenes_Carrousel/Cerveza.webp';
import img2 from '../assets/Imagenes_Carrousel/Cafetera.webp';
import img3 from '../assets/Imagenes_Carrousel/ShopsBags.webp';

const slides = [
  {
    image: img2,
    title: "Bienvenido al Paseo Comercial Las Rosas",
    description: "Encuentra el lugar ideal para disfrutar",
    buttonText: "Ver Locales",
  },
  {
    image: img3,
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
  const navigate = useNavigate();

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3500 }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="w-full h-screen md:h-[900px]"
      id='inicio'
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={`slide-${index}`} className="relative">
          <img
            src={slide.image}
            alt={`Imagen ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ filter: 'brightness(0.4)' }}
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl  mb-2 animate-fadeIn font-title">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl mb-6 opacity-80 animate-fadeIn delay-500 font-body">
              {slide.description}
            </p>
            {slide.buttonText === "Conoce Más" && (
              <button
                onClick={() =>
                  document
                    .getElementById('seccion-compleja')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-white px-6 py-2 rounded-full text-black font-semibold hover:bg-neutral transition animate-fadeIn delay-500 font-body"
              >
                {slide.buttonText}
              </button>
            )}

            {slide.buttonText === "Ver Locales" && (
              <button
                onClick={() => 
                document
                  .getElementById('Sect-locales')
                  .scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-white px-6 py-2 rounded-full text-black font-semibold hover:bg-neutral transition animate-fadeIn delay-500 font-body"
              >
                {slide.buttonText}
              </button>
            )}

            {slide.buttonText === "Contactenos" && (
              <button
                onClick={() =>
                  document
                    .getElementById('contact-section')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-white px-6 py-2 rounded-full text-black font-semibold hover:bg-neutral transition animate-fadeIn delay-400 font-body"
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
