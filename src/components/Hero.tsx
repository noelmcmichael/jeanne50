import Countdown from './Countdown';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: "url('/turksbeach.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center p-4 animate-fade-in-up">
        <div className="animate-float">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-white text-glow">Jeanne's 50th Birthday</h1>
          <p className="font-body mt-4 text-xl md:text-2xl text-sand">Grace Bay, Turks & Caicos</p>
        </div>
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;
