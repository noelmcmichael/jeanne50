import React from 'react';

const Travel = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Travel & Accommodation</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Getting Here</h3>
            <p className="text-gray-700 mb-4">
              The closest airport is Providenciales International Airport (PLS). We recommend booking flights in advance to get the best prices.
            </p>
            <h3 className="text-2xl font-bold mb-4">Transportation</h3>
            <p className="text-gray-700">
              Taxis are available at the airport. Car rentals are also a great option to explore the island. Remember, they drive on the left side of the road in Turks & Caicos!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Where to Stay</h3>
            <p className="text-gray-700 mb-4">
              We recommend staying in the Grace Bay area, as this is where most of the events will take place. Here are a few suggestions:
            </p>
            <ul className="list-disc list-inside text-gray-700">
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
