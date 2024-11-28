import React from 'react';
import complejoImg from '../assets/Imagenes_Carrousel/galeria.webp'; 

const ComplexInfoSection = () => {
    return (
        <section className="py-16 bg-neutral px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"> 
                <div className="flex justify-center">
                    <img 
                         src={complejoImg}
                        alt="Imagen del Complejo" 
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-5xl font-semibold text-secondary mb-4">
                        La Galeria
                    </h3>
                    <p className="text-gray-100 mb-4 font-semibold">
    Nuestra galería es un proyecto innovador y nuevo, diseñada para convertirse en un punto de referencia en la región. Actualmente contamos con 15 locales comerciales, ofreciendo un espacio ideal para emprendedores y comerciantes que buscan expandir sus negocios en un entorno fresco y moderno.
</p>
<p className="text-gray-100 font-semibold">
    Como una galería recién establecida, somos un espacio "virgen" lleno de oportunidades, donde cada negocio puede ser pionero en su área. Estamos en proceso de crecimiento constante, posicionándonos como una excelente opción para quienes desean formar parte de una comunidad comercial en desarrollo. Con acceso directo desde la Ruta Provincial 315, garantizamos una llegada cómoda y segura para todos nuestros visitantes.
</p>

                </div>
            </div>
        </section>
    );
};

export default ComplexInfoSection;
