import Map from './Map';

const Travel = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-dark-text">Travel & Accommodation</h2>
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
              We are excited to have everyone stay together! We are finalizing details for a room block at a beautiful resort in Grace Bay.
            </p>
            <p className="font-body text-dark-text font-bold">
              Booking information and special rates will be shared here very soon.
            </p>
          </div>
        </div>
        <Map />
      </div>
    </section>
  );
};

export default Travel;
