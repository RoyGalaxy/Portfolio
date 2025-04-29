import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-dark-darker/90 backdrop-blur-xl border-b border-gray-800/50 w-full shadow-lg">
      <div className="container px-4 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-bold text-white hover:scale-105 transition-transform">
            Abhijeet Roy<span className="text-primary animate-pulse">.</span>
          </NavLink>
        </div>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                    isActive 
                      ? 'text-primary after:w-full' 
                      : 'text-gray-300 hover:text-white after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white ml-4 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-lighter/95 backdrop-blur-lg border-b border-gray-800/50 animate-fadeIn">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium p-2 rounded-lg transition-all ${
                    isActive 
                      ? 'text-primary bg-gray-800/30' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/20'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;