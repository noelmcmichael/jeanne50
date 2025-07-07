const Map = () => {
  return (
    <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <h3 className="font-heading text-3xl font-bold mb-4 text-ocean-blue">Interactive Map</h3>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29576.39835654706!2d-72.20193268659668!3d21.805433900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x894b4f4b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sGrace%20Bay!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Map of Grace Bay"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;