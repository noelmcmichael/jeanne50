import React from 'react';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-grace-bay bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">Jeannie's 50th Birthday</h1>
        <p className="mt-4 text-xl md:text-2xl">Grace Bay, Turks & Caicos</p>
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;
