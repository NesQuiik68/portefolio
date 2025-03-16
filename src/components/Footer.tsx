"use client";
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Rayane Hamada
            </Link>
            <p className="mt-2 text-gray-400">
              Alternance en administration réseaux et systèmes
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-amber-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-amber-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="mailto:rayanehamada680@gmail.com" 
              className="hover:text-amber-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rayane Hamada. Tous droits réservés.
          </p>
          
          <nav className="flex flex-wrap justify-center gap-4">
            <Link href="/#about" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              À propos
            </Link>
            <Link href="/#skills" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Compétences
            </Link>
            <Link href="/#education" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Formation
            </Link>
            <Link href="/#experience" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Expérience
            </Link>
            <Link href="/#contact" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="flex justify-center pb-6">
        <button 
          onClick={scrollToTop}
          className="bg-amber-500 hover:bg-amber-600 text-white rounded-full p-3 shadow-lg transition-colors"
          aria-label="Remonter en haut"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer; 