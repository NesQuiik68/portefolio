"use client";
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaCode, FaCar, FaMapMarkerAlt, FaServer, FaNetworkWired, FaShieldAlt, FaLaptopCode, FaFileAlt } from 'react-icons/fa';
import downloadPDF from '@/utils/downloadPDF';

const About = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
        ease: "easeOut",
      }
    })
  };

  const profileItems = [
    {
      icon: <FaUser />,
      title: "PROFIL",
      value: "RAYANE HAMADA • 22 ANS"
    },
    {
      icon: <FaGraduationCap />,
      title: "FORMATION",
      value: "BTS SIO SISR • LICENCE PRO EN 2025"
    },
    {
      icon: <FaLaptopCode />,
      title: "INTÉRÊTS",
      value: "CYBERSÉCURITÉ • INFRASTRUCTURE CLOUD"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "LOCALISATION",
      value: "COLMAR • MOBILITÉ GRAND EST"
    },
    {
      icon: <FaCar />,
      title: "DISPONIBILITÉ",
      value: "SEPT. 2025 • PERMIS B • VÉHICULÉ"
    }
  ];

  // Compétences clés
  const keySkills = [
    {
      icon: <FaServer className="text-tech-accent" size={24} />,
      title: "Administration Système",
      description: "Administration de serveurs Windows et Linux, virtualisation et déploiement automatisé."
    },
    {
      icon: <FaNetworkWired className="text-tech-accent" size={24} />,
      title: "Infrastructure Réseau",
      description: "Configuration d'équipements Cisco et Fortinet, segmentation et optimisation réseau."
    },
    {
      icon: <FaShieldAlt className="text-tech-accent" size={24} />,
      title: "Sécurité Informatique",
      description: "Audits de sécurité, hardening de serveurs et sécurisation des infrastructures."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 gradient-text-blue">À PROPOS DE MOI</h2>
          <div className="w-16 h-1 bg-tech-accent mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-300 px-2">
            ADMINISTRATEUR SYSTÈMES ET RÉSEAUX EN DEVENIR, PASSIONNÉ PAR LES NOUVELLES TECHNOLOGIES ET L&apos;INFRASTRUCTURE IT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-xl shadow-lg overflow-hidden border border-blue-500/20"
          >
            <div className="relative h-64 sm:h-72 md:h-80 bg-slate-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-tech-grid bg-[size:20px_20px] opacity-20"></div>
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotateY: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <FaCode className="text-tech-accent text-6xl sm:text-7xl md:text-8xl lg:text-9xl" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-800/10"></div>
              
              <motion.div
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-glow-blue tech-text">FUTUR ADMINISTRATEUR RÉSEAUX</h3>
                <div className="w-12 sm:w-16 h-1 bg-tech-accent mb-2 sm:mb-3"></div>
                <p className="text-sm sm:text-base text-white/80">EN RECHERCHE D&apos;ALTERNANCE POUR SEPTEMBRE 2025</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-6 sm:p-8 rounded-xl border border-blue-500/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 gradient-text-blue">PRÉSENTATION</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Diplômé d&apos;un BTS SIO option SISR, je suis passionné par les technologies d&apos;infrastructure et 
              l&apos;administration système et réseau. Mes expériences de stage m&apos;ont permis de développer des 
              compétences pratiques en administration de serveurs Windows et Linux, ainsi qu&apos;en sécurisation 
              des infrastructures réseau.
              <br/><br/>
              Rigoureux et méthodique, j&apos;apprécie particulièrement le travail en équipe et la résolution de 
              problèmes techniques complexes. Mon objectif est d&apos;intégrer une entreprise dynamique en alternance 
              où je pourrai mettre à profit mes compétences tout en continuant à me former dans le domaine des 
              réseaux et de la cybersécurité.
            </p>

            {/* Bouton de téléchargement de CV */}
            <motion.div 
              className="flex justify-center sm:justify-start mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                onClick={() => downloadPDF("/cv.pdf", "Rayane_Hamada_CV.pdf")}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-neon text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileAlt className="text-white" />
                Télécharger mon CV
              </motion.button>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {profileItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  variants={fadeInUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-tech-accent/20 flex items-center justify-center text-tech-accent mr-3 sm:mr-4 border border-tech-accent/30 text-sm sm:text-base">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-mono text-xs sm:text-sm text-tech-muted">{item.title}</h4>
                    <p className="text-white text-sm sm:text-base font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Compétences clés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-12 md:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center gradient-text-blue">COMPÉTENCES CLÉS</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {keySkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass p-5 sm:p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{skill.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bandeau de conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="glass p-6 rounded-lg border-2 border-blue-500/40 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text-blue mb-4">RECHERCHE D&apos;ALTERNANCE</h3>
            <p className="text-gray-200 font-medium mb-4">
              Je suis à la recherche d&apos;une <span className="text-tech-accent font-bold">alternance en administration réseaux et systèmes</span> pour la rentrée de septembre 2025. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800/50 p-3 rounded-lg border border-blue-500/20">
                <h4 className="text-white text-sm font-bold mb-1">RYTHME</h4>
                <p className="text-blue-400 text-xs sm:text-sm">3 jours entreprise / 2 jours formation</p>
              </div>
              <div className="bg-slate-800/50 p-3 rounded-lg border border-blue-500/20">
                <h4 className="text-white text-sm font-bold mb-1">DURÉE</h4>
                <p className="text-blue-400 text-xs sm:text-sm">1 an (12 mois)</p>
              </div>
              <div className="bg-slate-800/50 p-3 rounded-lg border border-blue-500/20">
                <h4 className="text-white text-sm font-bold mb-1">LIEU</h4>
                <p className="text-blue-400 text-xs sm:text-sm">Mobilité Grand Est</p>
              </div>
            </div>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-neon text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter pour une alternance
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 