import React from 'react';

const Itinerary = () => {
  const events = [
    {
      time: 'June 5, 2026 - 7:00 PM',
      title: 'Welcome Cocktails',
      description: 'Join us for welcome drinks and light bites as we kick off the celebration.',
      icon: '🎉',
    },
    {
      time: 'June 6, 2026 - 6:00 PM',
      title: 'Birthday Dinner',
      description: 'A special dinner to celebrate Jeannie\'s 50th birthday.',
      icon: '🎂',
    },
    {
      time: 'June 7, 2026 - 11:00 AM',
      title: 'Catamaran Cruise',
      description: 'A fun day on the water exploring the beautiful coastline.',
      icon: '⛵️',
    },
    {
      time: 'June 8, 2026 - 10:00 AM',
      title: 'Farewell Brunch',
      description: 'One last get-together before we all head home.',
      icon: '🥂',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Itinerary</h2>
        <div className="relative">
          <div className="border-r-2 border-gray-200 absolute h-full top-0" style={{ left: '50%' }}></div>
          {events.map((event, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
                <span className="text-2xl">{event.icon}</span>
              </div>
              <div className="w-5/12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-500 text-sm">{event.time}</p>
                  <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
