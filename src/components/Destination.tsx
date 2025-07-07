import React from 'react';

const Destination = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Destination Highlights</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1617955354237-93cb2e895a43?q=80&w=2070&auto=format&fit=crop" alt="Grace Bay Beach" className="rounded-lg shadow-md" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Grace Bay Beach</h3>
            <p className="text-gray-700 mb-4">
              Grace Bay Beach is world-renowned for its stunning turquoise waters and powdery white sand. It has been consistently voted one of the best beaches in the world.
            </p>
            <h3 className="text-2xl font-bold mb-4">Things to Do</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Snorkeling and scuba diving in the coral reefs.</li>
              <li>Sunset cruises and boat tours.</li>
              <li>Exploring the local shops and restaurants.</li>
              <li>Relaxing on the beach and soaking up the sun.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
