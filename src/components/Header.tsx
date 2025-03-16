"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'À PROPOS', href: '#about' },
    { name: 'COMPÉTENCES', href: '#skills' },
    { name: 'FORMATION', href: '#education' },
    { name: 'EXPÉRIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: { 
      scale: 1.05,
      color: "#60a5fa",
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-md py-2 border-b border-blue-500/20' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 5 }}
            className="text-tech-accent"
          >
            <FaLaptopCode size={28} />
          </motion.div>
          <span className="text-xl md:text-2xl font-bold text-white tech-text group-hover:text-tech-glow transition-colors duration-300">
            <span className="gradient-text-blue">R</span>
            <span className="gradient-text">H</span>
            <span className="hidden md:inline-block ml-2 text-sm bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">EXPERT RÉSEAUX</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              variants={menuItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href={item.href}
                className="text-white hover:text-tech-glow transition-colors duration-300 text-sm tech-text tracking-wider"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.a
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-neon text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RECRUTER
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-sm shadow-lg border-t border-blue-500/20"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-tech-glow transition-colors tech-text"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  href="#contact"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-neon inline-block text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 