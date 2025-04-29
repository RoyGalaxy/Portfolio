import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      url: 'https://github.com/roygalaxy' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      url: 'https://linkedin.com/in/abhijeetroy11' 
      
    },
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      url: 'mailto:work.abhijeetroy@gmail.com' 
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-darker to-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <NavLink to="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
              Abhijeet<span className="text-primary animate-pulse">.</span>
            </NavLink>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Web & Mobile Developer
              <br />
              Crafting digital experiences with passion
            </p>
            <div className="mt-4 text-gray-500 text-xs space-y-1">
              <p>Based in India</p>
              <p>Available for freelance opportunities</p>
              <p className="text-gray-400">work.abhijeetroy@gmail.com</p>
              <p className="text-gray-400">+918824707969</p>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-all transform hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 text-lg">Let's Connect</h3>
            <div className="flex justify-center md:justify-start space-x-5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-all transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              Feel free to reach out for collaborations
              <br />
              <span className="text-gray-400 text-xs mt-2 block">
                Direct contact: work.abhijeetroy@gmail.com
                <br />
                Phone: +918824707969
              </span>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Abhijeet. All rights reserved.
            <br />
            <span className="text-gray-600 text-xs mt-1 block">
              Designed & Built with ❤️
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;