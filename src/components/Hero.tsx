import Countdown from './Countdown';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-subtle-gray">
      <div className="relative z-10 text-center p-4">
        <div>
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-white text-glow">Jeanne's 50th Birthday</h1>
          <p className="font-body mt-4 text-xl md:text-2xl text-off-white">Grace Bay, Turks & Caicos</p>
        </div>
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;
