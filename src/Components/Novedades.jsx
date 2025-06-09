import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const Novedades = () => {
  const [novedades, setNovedades] = useState([]);
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const [novedadSeleccionada, setNovedadSeleccionada] = useState(null);

  useEffect(() => {
    axios
      .get('https://paseocomerciallasrosas.com/api/novedades')
      .then((response) => setNovedades(response.data))
      .catch((error) => console.error('Error al obtener las novedades:', error));
  }, []);

  const novedadesVisibles = mostrarTodas ? novedades : novedades.slice(0, 3);

  const handleNext = () => {
    const currentIndex = novedades.findIndex(n => n.id === novedadSeleccionada.id);
    const nextIndex = (currentIndex + 1) % novedades.length;
    setNovedadSeleccionada(novedades[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = novedades.findIndex(n => n.id === novedadSeleccionada.id);
    const prevIndex = (currentIndex - 1 + novedades.length) % novedades.length;
    setNovedadSeleccionada(novedades[prevIndex]);
  };

  return (
    <div className="py-10 bg-secondary" id="novedades">
      <h2 className="text-4xl font-bold text-center mb-6 text-primary">Últimas Novedades</h2>
      {novedades.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
            {novedadesVisibles.map((novedad) => (
              <div
                key={novedad.id}
                onClick={() => setNovedadSeleccionada(novedad)}
                className="cursor-pointer bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transform hover:scale-105 transition-all"
              >
                <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
                  <img
                    src={novedad.imagen_url}
                    alt={novedad.titulo}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary text-center">{novedad.titulo}</h3>
                </div>
              </div>
            ))}
          </div>

          {novedades.length > 3 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setMostrarTodas(!mostrarTodas)}
                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
              >
                {mostrarTodas ? 'Ver menos' : 'Ver más'}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-600">No hay novedades disponibles en este momento.</p>
      )}

      {/* Modal */}
      <AnimatePresence>
        {novedadSeleccionada && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-6 max-w-lg w-full relative"
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setNovedadSeleccionada(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              >
                <FaTimes />
              </button>

              {/* Imagen */}
              <img
                src={novedadSeleccionada.imagen_url}
                alt={novedadSeleccionada.titulo}
                className="w-full h-64 object-contain mb-4"
              />

              {/* Título y descripción */}
              <h3 className="text-2xl font-bold text-primary mb-2 text-center">
                {novedadSeleccionada.titulo}
              </h3>
              <p className="text-sm text-gray-700 mb-3 text-center font-bold">
                {novedadSeleccionada.descripcion}
              </p>

              {/* Fecha */}
              <p className="text-xs text-gray-500 text-center">
                {new Date(novedadSeleccionada.fecha).toLocaleDateString('es-ES', { timeZone: 'UTC' })}
              </p>

              {/* Navegación */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={handlePrevious}
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <FaArrowLeft /> Anterior
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Siguiente <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Novedades;
