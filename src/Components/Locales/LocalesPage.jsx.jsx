import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocalCard from './LocalCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const LocalesPage = () => {
  const [localesData, setLocalesData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Solicitar los locales desde la API
    axios.get('https://paseocomerciallasrosas.com/api/locales') // Cambia esta URL si es necesario
      .then((response) => {
        setLocalesData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los locales:', error);
      });
  }, []);

  // Filtrado de locales
  const filteredLocales = localesData.filter(local => {
    const matchesSearch = local.nombre.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === '' || local.estado === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8">
      {/* Barra de búsqueda y filtro */}
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Buscar local..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full m-2"
        />
      </div>

      {/* Mostrar locales */}
      <div>
        {/* Carrusel para pantallas pequeñas */}
        <div className="block sm:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 1500 }}
            modules={[Autoplay, Pagination]}
        
          >
            {filteredLocales.map(local => (
              <SwiperSlide key={local.id}>
                <LocalCard local={local} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid para pantallas medianas y grandes */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLocales.map(local => (
            <LocalCard key={local.id} local={local} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalesPage;
