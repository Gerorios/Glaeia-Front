import React from 'react';
import complejoImg from '../assets/Imagenes_Carrousel/img4.jpg'; // Asegúrate de usar la ruta correcta de la imagen

const ComplexInfoSection = () => {
    return (
        <section className="py-16 bg-white-100 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Imagen del edificio */}
                <div className="flex justify-center">
                    <img 
                         src={complejoImg}
                        alt="Imagen del Complejo" 
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                
                {/* Información del complejo */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-4xl font-semibold text-gray-800 mb-4">
                        La Galeria
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Nuestro galeria cuenta con una ubicación privilegiada y estratégica, brindando fácil acceso tanto para visitantes como para comerciantes. Con un total de 15 locales comerciales, ofrecemos una gran variedad de servicios y productos en un solo lugar.
                    </p>
                    <p className="text-gray-600">
                        Acceso directo desde la Ruta Provincial 315, lo que garantiza una llegada cómoda y segura para todos nuestros visitantes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ComplexInfoSection;
