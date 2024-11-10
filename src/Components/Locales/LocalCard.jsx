import React from 'react';
import { Link } from 'react-router-dom';

const LocalCard = ({ local }) => {
  return (
    <>
    
    <div className="relative group border rounded-lg shadow-lg overflow-hidden">
    <Link to={`/local/${local.id}`}>
      <img
        src={local.imagen}
        alt={local.nombre}
        className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
        <p className="text-white text-lg font-semibold">{local.estado}</p>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{local.nombre}</h3>
        <p className="text-gray-600 mb-4">{local.descripcion}</p>
      </div>
      </Link>
    </div>
    </>
  );
};

export default LocalCard;

