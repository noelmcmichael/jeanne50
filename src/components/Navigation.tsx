import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    { href: '#resources', label: 'Resources' },
    { href: '/hotels', label: 'Hotels' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#memories', label: 'Memories' },
    { href: '#rsvp', label: 'RSVP' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className={`font-heading text-2xl font-bold transition-colors duration-300 ${scrolled || isOpen ? 'text-dark-text' : 'text-white'}`}>
            Jeanne's 50th
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className={`font-body font-semibold transition-colors duration-300 ${scrolled ? 'text-dark-text hover:text-ocean-blue' : 'text-white hover:text-sunset-gold'}`}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className={`font-body font-semibold transition-colors duration-300 ${scrolled ? 'text-dark-text hover:text-ocean-blue' : 'text-white hover:text-sunset-gold'}`}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors duration-300 ${scrolled || isOpen ? 'text-dark-text' : 'text-white'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white pb-4">
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className="text-center py-2">
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} onClick={() => setIsOpen(false)} className="font-body font-semibold text-dark-text hover:text-ocean-blue">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} onClick={() => setIsOpen(false)} className="font-body font-semibold text-dark-text hover:text-ocean-blue">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;