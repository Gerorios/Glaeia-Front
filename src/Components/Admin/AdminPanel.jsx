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
    imagen: null, // Image field
  });

  // Fetch locals data
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/locales')
      .then((response) => setLocals(response.data))
      .catch((error) => console.error('Error fetching locals:', error));
  }, []);

  const openModalForEdit = (local) => {
    setNewLocal({
      nombre: local.nombre,
      descripcion: local.descripcion,
      estado: local.estado,
      direccion: local.direccion,
      tamano: local.tamano,
      imagen: null, // Set to null to avoid preloading
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
    setNewLocal({ ...newLocal, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewLocal({ ...newLocal, imagen: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let request;
    const url = isEditing
      ? `http://localhost:8000/api/locales/${editingLocalId}`
      : 'http://localhost:8000/api/locales';

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
      ? axios.put(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      : axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

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
      .catch((error) => console.error('Error saving local:', error));
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este local?')) {
      axios
        .delete(`http://localhost:8000/api/locales/${id}`)
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
        <table className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-center">
              <th className="py-3 px-4">Nombre</th>
              <th className="py-3 px-4">Descripción</th>
              <th className="py-3 px-4">Estado</th>
              <th className="py-3 px-4">Dirección</th>
              <th className="py-3 px-4">Tamaño</th>
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
                  <button
                    onClick={() => openModalForEdit(local)}
                    className="bg-green-500 text-white py-1 px-4 rounded-full shadow-md hover:bg-green-600 transition duration-300 mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(local.id)}
                    className="bg-red-500 text-white py-1 px-4 rounded-full shadow-md hover:bg-red-600 transition duration-300"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
                className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-blue-500"
              />
              <input
                type="text"
                name="tamano"
                placeholder="Tamaño"
                value={newLocal.tamano}
                onChange={handleInputChange}
                className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-blue-500"
              />
              <input
                type="file"
                name="imagen"
                onChange={handleFileChange}
                className="w-full p-3 mb-4 border rounded-lg shadow-sm focus:outline-blue-500"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                {isEditing ? 'Actualizar Local' : 'Guardar Local'}
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full p-3 mt-4 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition duration-300"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
