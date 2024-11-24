import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const LocalCard = ({ local }) => {
  // Construye la URL completa de la imagen
  const imageUrl =`${local.imagen}`;  

  return (
    <div className="relative group border rounded-lg shadow-lg overflow-hidden w-full ">
        <img
          src={imageUrl}
          alt={local.nombre}
          className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
          loading='lazy'
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
          <p className="text-white text-lg font-semibold">{local.estado}</p>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{local.nombre}</h3>
          <p className="text-gray-600 mb-4">{local.descripcion}</p>
        </div>
 
    </div>
  );
};

export default LocalCard;
