import React from 'react';
import { useParams } from 'react-router-dom';

const LocalDetailsPage = () => {
  const { id } = useParams();
  
  // Simulando los detalles de los locales
  const localDetails = {
    1: { nombre: 'Local A', estado: 'Libre', descripcion: 'Descripción detallada del local A' },
    2: { nombre: 'Local B', estado: 'Ocupado', descripcion: 'Descripción detallada del local B' },
  };

  const local = localDetails[id];

  if (!local) {
    return <p>Local no encontrado</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{local.nombre}</h2>
      <p><strong>Estado:</strong> {local.estado}</p>
      <p>{local.descripcion}</p>
    </div>
  );
};

export default LocalDetailsPage;
