import React from 'react';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import Travel from './components/Travel';
import Destination from './components/Destination';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <Itinerary />
      <Travel />
      <Destination />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;