import React from 'react';
import { FaMapMarkerAlt, FaShoppingBag } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import img1 from '../assets/Imagenes_home_activos/local12.jpg';
import img3 from '../assets/Imagenes_home_activos/local14.jpeg';
import img4 from '../assets/Imagenes_home_activos/local15.jpeg';
import { Link } from 'react-router-dom';

const localesActivos = [
    { image: img1 },
    {image: img3},
    {image: img4}
];

const LocationAndShops = () => {
    return (
        <section className="py-16 bg-gray-100 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36">

                {/* Columna de Ubicación */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaMapMarkerAlt className="text-red-500 mr-2" /> Donde Podes Encontrarnos?
                    </h3>
                    <p className="text-gray-600 mb-3">
                        Nuestra galería se encuentra en Juan M de Rosas y Ruta 315, ofreciendo acceso directo por ruta 315.
                    </p>
                    {/* Mapa de Google embebido o un marcador estático */}
                    <iframe
                        className="w-full h-64 rounded-lg shadow-lg mt-5"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.511622959583!2d-65.27007536958074!3d-26.74363427286524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942267c244cf165d%3A0x54c0c7e44a3a7563!2sJuan%20Manuel%20de%20Rosas%20%26%20Ruta%20Provincial%20315%2C%20T4103%20Taf%C3%AD%20Viejo%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1731019838670!5m2!1ses-419!2sar"
                        allowFullScreen=""
                        loading="lazy"
                        title="Ubicación de la Galería"
                    ></iframe>
                </div>

                {/* Columna de Locales Activos */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaShoppingBag className='mr-2 text-green-600'/> Locales Activos
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Estos son algunos de los locales que ya se encuentran operando en nuestra galería.
                         Visítanos para explorar la oferta completa de servicios y productos.
                    </p>
                    {/* Carrusel de Imágenes usando Swiper */}
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        className="rounded-lg shadow-lg"
                        autoplay={{ delay: 2000 }}
                        modules={[Navigation, Pagination, Autoplay]}
                    >
                        {localesActivos.map((local, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-64 rounded-lg overflow-hidden group">
                                    {/* Imagen de Local Activo */}
                                    <Link to="/properties">
                                    <img
                                        src={local.image}
                                        alt={`Local Activo ${index + 1}`}
                                        className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                                    />
                                    
                                    
                                    {/* Overlay al hacer hover */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                        <span className="text-white text-lg font-semibold">Ver Locales</span>
                                    </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default LocationAndShops;

