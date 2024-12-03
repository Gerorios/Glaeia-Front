import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Novedades = () => {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    axios
      .get('https://paseocomerciallasrosas.com/api/novedades')
      .then((response) => setNovedades(response.data))
      .catch((error) => console.error('Error al obtener las novedades:', error));
  }, []);

  return (
    <div className="py-8 bg-secondary" id="novedades">
      <h2 className="text-4xl font-bold text-center mb-3 text-primary">Últimas Novedades</h2>
      {novedades.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          centeredSlides={true}
          initialSlide={Math.floor(novedades.length / 2)}
          loop={novedades.length > 1}
          autoplay={{ delay: 3000 }}
        >
          {novedades.map((novedad) => (
            <SwiperSlide key={novedad.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition-all hover:scale-105 hover:shadow-xl m-2">
                {/* Ajustamos la imagen */}
                <div className="w-full h-52 flex items-center justify-center bg-gray-100">
                  <img
                    src={novedad.imagen_url}
                    alt={novedad.titulo}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary text-center mb-2">{novedad.titulo}</h3>
                  <p className="text-sm text-gray-600 mb-3 text-center">{novedad.descripcion}</p>
                  <div className="text-gray-500 text-center">
                    <span className="block text-xs text-gray-500 mb-2">    {new Date(novedad.fecha).toLocaleDateString('es-ES', { timeZone: 'UTC' })}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-600">No hay novedades disponibles en este momento.</p>
      )}
    </div>
  );
};

export default Novedades;
