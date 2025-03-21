"use client";
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaServer, FaNetworkWired, FaCode } from 'react-icons/fa';
import downloadPDF from '@/utils/downloadPDF';

const Hero = () => {
  // Variantes d'animation pour le texte - avec correction de l'easing
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  // Variantes pour les icônes flottantes
  const floatingIconVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="relative pt-20 md:pt-24 pb-20 md:pb-32 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Overlay pattern avec animation */}
      <div className="absolute inset-0 z-0 bg-tech-pattern opacity-5 animate-pulse-slow"></div>
      
      {/* Grid background effect */}
      <div className="absolute inset-0 z-0 bg-tech-grid bg-[length:30px_30px]"></div>
      
      {/* Floating elements - Visibles uniquement sur les écrans plus grands */}
      <motion.div 
        className="absolute top-1/4 left-1/4 text-blue-500 opacity-20 hidden md:block"
        variants={floatingIconVariants}
        animate="animate"
        custom={1}
      >
        <FaServer size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/3 text-amber-500 opacity-20 hidden md:block"
        variants={floatingIconVariants}
        animate="animate"
        custom={2}
      >
        <FaNetworkWired size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-1/4 text-blue-400 opacity-20 hidden md:block"
        variants={floatingIconVariants}
        animate="animate"
        custom={3}
      >
        <FaCode size={40} />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div 
            className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1 mt-8 md:mt-0"
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              className="text-tech-accent text-base md:text-lg lg:text-xl font-medium mb-2 tech-text" 
              variants={textVariants}
              custom={0}
            >
              BIENVENUE DANS MON UNIVERS TECH
            </motion.h3>
            
            <motion.h1 
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text-blue"
              variants={textVariants}
              custom={1}
            >
              JE SUIS <span className="gradient-text">RAYANE HAMADA</span>
            </motion.h1>
            
            <motion.h2 
              className="text-gray-300 text-lg sm:text-xl md:text-2xl font-medium mb-6 md:mb-8"
              variants={textVariants}
              custom={2}
            >
              FUTUR EXPERT EN <span className="text-tech-glow">RÉSEAUX & SYSTÈMES</span>
            </motion.h2>

            {/* Badge Alternance mis en évidence */}
            <motion.div
              className="mb-6 md:mb-8"
              variants={textVariants}
              custom={2.5}
            >
              <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold px-4 py-2 rounded-md shadow-lg text-sm sm:text-base md:text-lg">
                EN RECHERCHE D&apos;ALTERNANCE POUR SEPTEMBRE 2025
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0"
              variants={textVariants}
              custom={3}
            >
              Passionné par les infrastructures réseaux et la cybersécurité, je combine rigueur technique et créativité pour concevoir des solutions efficaces et sécurisées. Mon approche méthodique et ma capacité d&apos;adaptation me permettent de répondre aux défis complexes des environnements informatiques modernes.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
              variants={textVariants}
              custom={4}
            >
              <motion.a 
                href="#contact" 
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-neon transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                RECRUTEZ-MOI
              </motion.a>
              <motion.a 
                href="#about" 
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium rounded-md transition-all duration-300 text-sm sm:text-base w-full sm:w-auto text-center mt-2 sm:mt-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                DÉCOUVRIR MON PROFIL
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex mt-8 md:mt-10 gap-6 justify-center md:justify-start"
              variants={textVariants}
              custom={5}
            >
              <motion.a 
                href="https://www.linkedin.com/in/rayane-hamada-81b718296/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-tech-glow transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={22} className="md:text-2xl" />
              </motion.a>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-tech-glow transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={22} className="md:text-2xl" />
              </motion.a>
              <motion.a 
                href="mailto:rayanehamada680@gmail.com" 
                className="text-gray-400 hover:text-tech-glow transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope size={22} className="md:text-2xl" />
              </motion.a>
              <motion.div 
                onClick={() => downloadPDF("/cv.pdf", "Rayane_Hamada_CV.pdf")}
                className="text-gray-400 hover:text-tech-glow transition-colors cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFileAlt size={22} className="md:text-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/5 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-amber-500/20 animate-pulse-slow"></div>
              <motion.div 
                className="absolute inset-3 sm:inset-4 rounded-full bg-slate-800 flex items-center justify-center border border-blue-500/30 overflow-hidden"
                animate={{ 
                  boxShadow: ["0 0 10px rgba(59, 130, 246, 0.3)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 10px rgba(59, 130, 246, 0.3)"] 
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-500/20"></div>
                <div className="relative z-10 p-4 glass rounded-full">
                  <span className="tech-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-tech-glow font-bold">RH</span>
                </div>
              </motion.div>
              
              {/* Orbiting dots - avec animations simplifiées pour compatibilité */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-blue-500"
                  style={{
                    top: '50%',
                    left: '50%',
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                  animate={{
                    x: Math.cos(i * (Math.PI / 4)) * 150,
                    y: Math.sin(i * (Math.PI / 4)) * 150,
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <motion.div 
          className="w-8 h-12 rounded-full border-2 border-tech-glow flex justify-center p-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-tech-accent rounded-full"
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 