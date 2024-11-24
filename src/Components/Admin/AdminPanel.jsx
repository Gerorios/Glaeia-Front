import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [locals, setLocals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingLocalId, setEditingLocalId] = useState(null);
  const [newLocal, setNewLocal] = useState({
    nombre: '',
    descripcion: '',
    estado: 'libre',
    direccion: '',
    tamano: '',
    imagen: null, // Cambiado de imagenUrl a imagen (archivo)
  });

  const token = localStorage.getItem('adminToken'); // Método de autenticación

  // Axios configurado con el token
  const axiosInstance = axios.create({
    baseURL: 'https://paseocomerciallasrosas.com/api',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Obtener lista de locales
  useEffect(() => {
    axiosInstance
      .get('/locales')
      .then((response) => setLocals(response.data))
      .catch((error) => console.error('Error fetching locals:', error));
  }, [token]);

  const openModalForEdit = (local) => {
    setNewLocal({
      nombre: local.nombre,
      descripcion: local.descripcion,
      estado: local.estado,
      direccion: local.direccion,
      tamano: local.tamano,
      imagen: null, // No se precarga el archivo
    });
    setEditingLocalId(local.id);
    setIsEditing(true);
    setShowModal(true);
  };

  const openModalForAdd = () => {
    setNewLocal({
      nombre: '',
      descripcion: '',
      estado: 'libre',
      direccion: '',
      tamano: '',
      imagen: null,
    });
    setIsEditing(false);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLocal((prevLocal) => ({
      ...prevLocal,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNewLocal((prevLocal) => ({
      ...prevLocal,
      imagen: e.target.files[0], // Guardar el archivo seleccionado
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let request;
    const url = isEditing ? `locales/${editingLocalId}` : '/locales';

    // Usar FormData para manejar archivos
    const formData = new FormData();
    formData.append('nombre', newLocal.nombre);
    formData.append('descripcion', newLocal.descripcion);
    formData.append('estado', newLocal.estado);
    formData.append('direccion', newLocal.direccion);
    formData.append('tamano', newLocal.tamano);
    if (newLocal.imagen) {
      formData.append('imagen', newLocal.imagen);
    }

    request = isEditing
      ? axiosInstance.post(`${url}?_method=PUT`, formData) // Usar método PUT con FormData
      : axiosInstance.post(url, formData);

    request
      .then((response) => {
        if (isEditing) {
          setLocals(
            locals.map((local) =>
              local.id === editingLocalId ? response.data : local
            )
          );
        } else {
          setLocals([...locals, response.data]);
        }
        setShowModal(false);
        setNewLocal({
          nombre: '',
          descripcion: '',
          estado: 'libre',
          direccion: '',
          tamano: '',
          imagen: null,
        });
        setIsEditing(false);
        setEditingLocalId(null);
      })
      .catch((error) => {
        console.error('Error saving local:', error);
        if (error.response && error.response.data) {
          console.log('Error details:', error.response.data);
        }
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este local?')) {
      axiosInstance
        .delete(`/locales/${id}`)
        .then(() => {
          setLocals(locals.filter((local) => local.id !== id));
        })
        .catch((error) => console.error('Error deleting local:', error));
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Panel de Administración
      </h1>

      <button
        onClick={openModalForAdd}
        className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 mb-8"
      >
        Agregar Local
      </button>

      {locals.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="w-full max-w-8xl bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-center">
                <th className="py-3 px-4">Nombre</th>
                <th className="py-3 px-4">Descripción</th>
                <th className="py-3 px-4">Estado</th>
                <th className="py-3 px-4">Dirección</th>
                <th className="py-3 px-4">Tamaño</th>
                <th className="py-3 px-4">Imagen</th>
                <th className="py-3 px-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {locals.map((local) => (
                <tr
                  key={local.id}
                  className="text-center border-b hover:bg-gray-100"
                >
                  <td className="py-3 px-4">{local.nombre}</td>
                  <td className="py-3 px-4">{local.descripcion}</td>
                  <td className="py-3 px-4">{local.estado}</td>
                  <td className="py-3 px-4">{local.direccion}</td>
                  <td className="py-3 px-4">{local.tamano}</td>
                  <td className="py-3 px-4">
                    {local.imagen ? (
                      <img
                        src={`${local.imagen}`}
                        alt="Local"
                        className="h-16 w-16 object-cover rounded"
                      />
                    ) : (
                      'Sin Imagen'
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => openModalForEdit(local)}
                      className="bg-green-500 text-white py-1 px-4 rounded-full shadow-md hover:bg-green-600 transition duration-300 mr-1"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(local.id)}
                      className="bg-red-500 text-white py-1 px-4 rounded-full shadow-md hover:bg-red-600 transition duration-300 md:mt-3"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6">
          No hay locales disponibles
        </p>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
      {isEditing ? 'Editar Local' : 'Agregar Local'}
    </h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={newLocal.nombre}
        onChange={handleInputChange}
        required
        className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-blue-500"
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={newLocal.descripcion}
        onChange={handleInputChange}
        className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-blue-500"
      />
      <select
        name="estado"
        value={newLocal.estado}
        onChange={handleInputChange}
        required
        className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-blue-500"
      >
        <option value="libre">Libre</option>
        <option value="ocupado">Ocupado</option>
      </select>
      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={newLocal.direccion}
        onChange={handleInputChange}
        required
        className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-blue-500"
      />
      <input
        type="text"
        name="tamano"
        placeholder="Tamaño (en m²)"
        value={newLocal.tamano}
        onChange={handleInputChange}
        required
        className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-blue-500"
      />
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-500"
        />
        <p className="text-sm text-gray-500 mt-2">
          Se recomienda subir imágenes en formato <span className="font-semibold">.WEBP</span> para mejor rendimiento.
        </p>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 w-full"
      >
        {isEditing ? 'Actualizar' : 'Guardar'}
      </button>
    </form>
    <button
      onClick={() => setShowModal(false)}
      className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-600 transition duration-300 w-full"
    >
      Cancelar
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default AdminPanel;
