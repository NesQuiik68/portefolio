"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaTimes } from 'react-icons/fa';

const FloatingBanner = () => {
  const [visible, setVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Masquer la bannière quand l'utilisateur a défilé jusqu'à la section Contact
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        if (contactRect.top < window.innerHeight && !hasScrolled) {
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <AnimatePresence>
      {visible && !hasScrolled && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[90%] sm:w-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-4 sm:px-6 rounded-lg shadow-xl flex items-center gap-3 sm:gap-4">
            <FaGraduationCap size={24} className="hidden sm:block flex-shrink-0" />
            <div className="flex-grow text-center sm:text-left">
              <p className="font-bold text-sm sm:text-base">En recherche d&apos;alternance pour Septembre 2025</p>
              <p className="text-xs sm:text-sm text-white/80">N&apos;hésitez pas à me contacter !</p>
            </div>
            <motion.a
              href="#contact"
              className="bg-white text-blue-600 font-bold text-xs sm:text-sm py-1.5 px-3 sm:px-4 rounded-md whitespace-nowrap flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
            </motion.a>
            <motion.button
              onClick={() => setVisible(false)}
              className="text-white/80 hover:text-white p-1 flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Fermer"
            >
              <FaTimes size={16} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingBanner; 