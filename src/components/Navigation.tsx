import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: '#itinerary', label: 'Itinerary' },
    { href: '#travel', label: 'Travel' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#rsvp', label: 'RSVP' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className={`font-heading text-2xl font-bold ${scrolled ? 'text-dark-text' : 'text-white'}`}>
            Jeanne's 50th
          </a>
          <nav>
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={`font-body font-semibold transition-colors duration-300 ${scrolled ? 'text-dark-text hover:text-ocean-blue' : 'text-white hover:text-sunset-gold'}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;