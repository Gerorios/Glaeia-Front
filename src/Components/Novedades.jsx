import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReactTimeAgo from 'react-timeago';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Novedades = () => {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/novedades')
      .then((response) => setNovedades(response.data))
      .catch((error) => console.error('Error al obtener las novedades:', error));
  }, []);

  return (
    <div className="py-8 bg-secondary" id="novedades">
      <h2 className="text-4xl font-bold text-center mb-3 text-primary">Últimas Novedades</h2>
      {novedades.length > 0 ? (
        <Swiper
        modules={[Navigation, Pagination]}
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
              <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 transform transition-all hover:scale-90 hover:shadow-2xl m-2">
                <img
                  src={novedad.imagen_url}
                  alt={novedad.titulo}
                  className="w-full h-52 object-contain" // Aumento el tamaño de la imagen
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary text-center mb-2">{novedad.titulo}</h3>
                  <p className="text-lg text-gray-600 mb-3">{novedad.descripcion}</p>
                  <div className="text-gray-500 mb-1">
                    <span className="block text-sm text-gray-500 mb-3">{new Date(novedad.fecha).toLocaleDateString()}</span>
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
