import React from 'react';
import ImageCarousel from './ImageCarousel';
import AboutSection from './AboutSection';
import LocationAndShops from './LocationAndShops';
import ComplexInfoSection from './ComplexInfoSection';
import ContactSection from './ContactSection';

const Home = () => {
  return (
    <div>
      <ImageCarousel /> 
      <AboutSection />
      <ComplexInfoSection /> 
      <LocationAndShops />
      <ContactSection />
    </div>
  );
};

export default Home;
