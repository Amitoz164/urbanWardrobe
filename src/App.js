import React from 'react';
import Navbar from './Components/Navbar';
import MainSection from './Components/MainSection';
import CardsSection from './Components/CardsSection';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MainSection />
      <CardsSection />
      <Footer />
    </div>
  );
};

export default App;
