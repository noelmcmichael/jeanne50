const Destination = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-dark-text">Destination Highlights</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <img src="https://images.unsplash.com/photo-1617955354237-93cb2e895a43?q=80&w=2070&auto=format&fit=crop" alt="Grace Bay Beach" className="rounded-lg shadow-lg" />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-heading text-3xl font-bold mb-4 text-ocean-blue">Grace Bay Beach</h3>
            <p className="font-body text-dark-text mb-4">
              Grace Bay Beach is world-renowned for its stunning turquoise waters and powdery white sand. It has been consistently voted one of the best beaches in the world.
            </p>
            <h3 className="font-heading text-3xl font-bold mb-4 text-ocean-blue">Things to Do</h3>
            <ul className="list-disc list-inside font-body text-dark-text">
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
