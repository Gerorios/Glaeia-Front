import React , {lazy, Suspense}from 'react';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

const ImageCarousel = lazy(() => import('./ImageCarousel.jsx'));
const Novedades = lazy(() => import('./Novedades.jsx'));
const LocationAndShops = lazy(() => import('./LocationAndShops.jsx'));
const ComplexInfoSection = lazy(() => import('./ComplexInfoSection.jsx'));

const Home = () => {
  return (
    <div>

      <Suspense fallback={<div>Cargando...</div>}>
        <ImageCarousel />
        <AboutSection />
        <ComplexInfoSection />
        <Novedades />
        <LocationAndShops />
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Home;
