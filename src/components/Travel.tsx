import React from 'react';

const Travel = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-5xl font-bold text-center mb-16 text-dark-text">Travel & Accommodation</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="font-heading text-3xl font-bold mb-4 text-ocean-blue">Getting Here</h3>
            <p className="font-body text-dark-text mb-4">
              The closest airport is Providenciales International Airport (PLS). We recommend booking flights in advance to get the best prices.
            </p>
            <h3 className="font-heading text-3xl font-bold mb-4 text-ocean-blue">Transportation</h3>
            <p className="font-body text-dark-text">
              Taxis are available at the airport. Car rentals are also a great option to explore the island. Remember, they drive on the left side of the road in Turks & Caicos!
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-heading text-3xl font-bold mb-4 text-ocean-blue">Where to Stay</h3>
            <p className="font-body text-dark-text mb-4">
              We recommend staying in the Grace Bay area, as this is where most of the events will take place. Here are a few suggestions:
            </p>
            <ul className="list-disc list-inside font-body text-dark-text">
              <li>Seven Stars Resort & Spa</li>
              <li>The Palms Turks and Caicos</li>
              <li>Wymara Resort and Villas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
