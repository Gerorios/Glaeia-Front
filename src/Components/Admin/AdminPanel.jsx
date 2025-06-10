import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 

const AdminPanel = () => {
  const [locals, setLocals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showNovedadModal, setShowNovedadModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingLocalId, setEditingLocalId] = useState(null);
  const [newLocal, setNewLocal] = useState({
    nombre: '',
    descripcion: '',
    estado: 'libre',
    direccion: '',
    tamano: '',
    imagen: null, 
  });

  const [newNovedad, setNewNovedad] = useState({
    titulo: '',
    descripcion: '',
    fecha:'',
    imagen: null,
  }); 

  const token = localStorage.getItem('adminToken'); 


  const axiosInstance = axios.create({
    baseURL: 'https://paseocomerciallasrosas.com/api',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  useEffect(() => {
    axiosInstance
      .get('/locales')
      .then((response) => {
        setLocals(response.data);
      })
      .catch((error) => console.error('Error fetching locals:', error));
  }, [token]);


    //novedades

  const handleNovedadInputChange = (e) => {
    const { name, value } = e.target;
    setNewNovedad((prevNovedad) => ({
      ...prevNovedad,
      [name]: value,
    }));
  };

  const handleNovedadFileChange = (e) => {
    setNewNovedad((prevNovedad) => ({
      ...prevNovedad,
      imagen: e.target.files[0],
    }));
  };

  const handleNovedadSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', newNovedad.titulo);
    formData.append('descripcion', newNovedad.descripcion);
    formData.append('fecha', newNovedad.fecha);
    if (newNovedad.imagen) {
      formData.append('imagen', newNovedad.imagen);
    }

    axiosInstance
      .post('/novedades', formData)
      .then((response) => {
        toast.success('Novedad agregada correctamente');
        setShowNovedadModal(false);
        setNewNovedad({
          titulo: '',
          descripcion: '',
          imagen: null,
        });
      })
      .catch((error) => {
        toast.error('Error al agregar el novedad');
      });
  };

  const openModalForEdit = (local) => {
    setNewLocal({
      nombre: local.nombre,
      descripcion: local.descripcion,
      estado: local.estado,
      direccion: local.direccion,
      tamano: local.tamano,
      imagen: null, 
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
      imagen: e.target.files[0], 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let request;
    const url = isEditing ? `locales/${editingLocalId}` : '/locales';

 
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
      ? axiosInstance.post(`${url}?_method=PUT`, formData) 
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
          toast.success('Local agregado correctamente');
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
    <div className="p-8 bg-primary min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Panel de Administración
      </h1>

       <div className="flex gap-4 mb-8">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
        >
          Agregar Local
        </button>
        <button
          onClick={() => setShowNovedadModal(true)} 
          className="bg-gray-700 text-white py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
        >
          Crear Novedad
        </button>
      </div>


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
</div> )}

{showNovedadModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Crear Novedad
            </h2>
            <form onSubmit={handleNovedadSubmit}>
              <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={newNovedad.titulo}
                onChange={handleNovedadInputChange}
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-gray-500"
              />
              <textarea
                name="descripcion"
                placeholder="Descripción"
                value={newNovedad.descripcion}
                onChange={handleNovedadInputChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-gray-500"
              />
              <input
                type="date"
                name="fecha"
                value={newNovedad.fecha}
                onChange={handleNovedadInputChange}
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-gray-500"
              />
              <div className="mb-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleNovedadFileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-gray-500"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Se recomienda subir imágenes en formato{' '}
                  <span className="font-semibold">.WEBP</span>.
                </p>
              </div>
              <button
                type="submit"
                className="bg-gray-700 text-white py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition duration-300 w-full"
              >
                Guardar Novedad
              </button>
            </form>
            <button
              onClick={() => setShowNovedadModal(false)}
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
