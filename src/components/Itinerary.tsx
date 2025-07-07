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
      description: 'A special dinner to celebrate Jeanne\'s 50th birthday.',
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
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-dark-text">Itinerary</h2>
        <div className="relative">
          <div className="border-r-2 border-ocean-blue absolute h-full top-0" style={{ left: '50%' }}></div>
          {events.map((event, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
                <span className="text-3xl">{event.icon}</span>
              </div>
              <div className="w-5/12">
                <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
                  <p className="font-body text-ocean-blue text-sm">{event.time}</p>
                  <h3 className="font-heading text-2xl font-bold mt-2 text-dark-text">{event.title}</h3>
                  <p className="font-body text-gray-700 mt-2">{event.description.replace('Jeannie', 'Jeanne')}</p>
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
