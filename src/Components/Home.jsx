import React from 'react';
import ImageCarousel from './ImageCarousel';
import AboutSection from './AboutSection';
import LocationAndShops from './LocationAndShops';
import ComplexInfoSection from './ComplexInfoSection';
import ContactSection from './ContactSection';
import Novedades from './Novedades';


const Home = () => {
  return (
    <div>

      <ImageCarousel /> 
      <AboutSection />
      <ComplexInfoSection /> 
      <Novedades />
      <LocationAndShops />
      <ContactSection />
    </div>
  );
};

export default Home;
