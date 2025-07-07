import Countdown from './Countdown';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grace-bay bg-cover bg-center animate-ken-burns"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-10 text-center p-4 animate-fade-in-up">
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-white shadow-lg">Jeanne's 50th Birthday</h1>
        <p className="font-body mt-4 text-xl md:text-2xl text-sand">Grace Bay, Turks & Caicos</p>
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;
