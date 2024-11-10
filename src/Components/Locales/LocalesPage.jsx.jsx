import React, { useState } from 'react';
import LocalCard from './LocalCard';

const LocalesPage = () => {
  const localesData = [
    {
      id: 1,
      nombre: 'Local A',
      estado: 'Libre',
      descripcion: 'Local espacioso con grandes ventanales.',
      imagen: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      nombre: 'Local B',
      estado: 'Ocupado',
      descripcion: 'Ubicado en la esquina, ideal para cafeterías.',
      imagen: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      nombre: 'Local C',
      estado: 'Libre',
      descripcion: 'Local con buena visibilidad y acceso.',
      imagen: 'https://via.placeholder.com/300',
    },

  ];

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

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
          className="border border-gray-300 rounded px-4 py-2 w-1/2"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Todos</option>
          <option value="Libre">Libres</option>
          <option value="Ocupado">Ocupados</option>
        </select>
      </div>

      {/* Cards de locales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLocales.map(local => (
          <LocalCard key={local.id} local={local} />
        ))}
      </div>
    </div>
  );
};

export default LocalesPage;
