
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PropertyDetails from './components/PropertyDetails';
import researchData from './ul_accommodation_research.json';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/property/:slug" element={<PropertyDetails accommodations={researchData.accommodations} />} />
    </Routes>
  );
};

export default App;
