import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-text text-white py-8">
      <div className="container mx-auto px-4 text-center font-body">
        <p>&copy; {new Date().getFullYear()} Jeannie's 50th Birthday Celebration</p>
        <p className="mt-2 text-sand">Made with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
