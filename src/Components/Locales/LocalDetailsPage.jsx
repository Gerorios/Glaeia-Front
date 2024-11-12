  import React, { useEffect, useState } from 'react';
  import { useParams } from 'react-router-dom';
  import ImageGallery from 'react-image-gallery';
  import "react-image-gallery/styles/css/image-gallery.css";

  const LocalDetailsPage = () => {
    const { id } = useParams();

    // Estado para simular detalles y fotos del local
    const [local, setLocal] = useState(null);

    useEffect(() => {
      // Simulando los detalles de los locales
      const localDetails = {
        1: {
          nombre: 'Local A',
          estado: 'Libre',
          descripcion: 'Amplio local ubicado en una zona comercial de alto tránsito. Ideal para tiendas de ropa o cafeterías.',
          direccion: 'Av. Principal 123',
          tamano: '120 m²',
          imagenes: [
            { original: '/path/to/image1.jpg', thumbnail: '/path/to/image1_thumbnail.jpg' },
            { original: '/path/to/image2.jpg', thumbnail: '/path/to/image2_thumbnail.jpg' },
            { original: '/path/to/image3.jpg', thumbnail: '/path/to/image3_thumbnail.jpg' },
          ]
        },
        2: {
          nombre: 'Local B',
          estado: 'Ocupado',
          descripcion: 'Local con acceso a calle peatonal, ideal para negocios de alimentos o servicios.',
          direccion: 'Calle Secundaria 456',
          tamano: '85 m²',
          imagenes: [
            { original: '/path/to/image4.jpg', thumbnail: '/path/to/image4_thumbnail.jpg' },
            { original: '/path/to/image5.jpg', thumbnail: '/path/to/image5_thumbnail.jpg' },
          ]
        },
      };

      setLocal(localDetails[id] || null);
    }, [id]);

    if (!local) {
      return <p className="p-8">Local no encontrado</p>;
    }

    return (
      <div className="p-8 flex flex-col md:flex-row items-center md:items-start">
        {/* Galería de imágenes */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <ImageGallery
            items={local.imagenes}
            showPlayButton={false}
            showFullscreenButton={true}
            showThumbnails={true}
          />
        </div>

        {/* Información del local */}
        <div className="md:w-1/2 md:pl-8 space-y-4">
          <h2 className="text-2xl font-bold mb-2">{local.nombre}</h2>
          <p className="text-gray-600"><strong>Estado:</strong> {local.estado}</p>
          <p><strong>Descripción:</strong> {local.descripcion}</p>
          <p><strong>Dirección:</strong> {local.direccion}</p>
          <p><strong>Tamaño:</strong> {local.tamano}</p>
        </div>
      </div>
    );
  };

  export default LocalDetailsPage;
