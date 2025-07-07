import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Jeannie's 50th Birthday Celebration</p>
        <p className="mt-2">Made with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
