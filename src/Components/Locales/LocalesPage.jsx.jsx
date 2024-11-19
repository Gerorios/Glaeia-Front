import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocalCard from './LocalCard';

const LocalesPage = () => {
  const [localesData, setLocalesData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Solicitar los locales desde la API
    axios.get('http://localhost:8000/api/locales') // Cambia esta URL si es necesario
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
