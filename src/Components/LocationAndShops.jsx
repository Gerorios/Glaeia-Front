import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaShoppingBag } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion, AnimatePresence } from 'framer-motion';

const LocationAndShops = () => {
  const [datosLocales, setDatosLocales] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    axios
      .get('https://paseocomerciallasrosas.com/api/locales')
      .then((response) => {
        setDatosLocales(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los locales:', error);
      });
  }, []);

  return (
    <section className="bg-neutral text-black px-6 py-20 space-y-24 " id='Sect-locales'>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl mb-4 text-secondary font-title  underline text-center">
        CONOCE NUETRO LOCALES
        </h3>
        <p className="mb-6 font-body">
          Estos son algunos de los negocios que actualmente forman parte del Paseo Comercial Las Rosas.
          Tocá en alguno para ver más información.
        </p>

        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {datosLocales.map((local, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition hover:shadow- mb-8"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <img
                  src={local.imagen}
                  alt={local.nombre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg  text-primary font-title text-center underline">{local.nombre}</h4>
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 text-sm text-gray-600 overflow-hidden"
                    >
                      {local.descripcion}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LocationAndShops;
