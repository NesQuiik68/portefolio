"use client";
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool, FaAward, FaLock, FaNetworkWired, FaLaptopCode } from 'react-icons/fa';

const Education = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  // Données des formations
  const educationData = [
    {
      id: 'license',
      title: "Licence Pro Admin Réseaux Systèmes",
      institution: "IUT Illkirch-Graffenstaden",
      location: "Strasbourg",
      date: "Janvier-Février 2024 | Reprise prévue en Sept. 2025",
      icon: <FaUniversity size={24} />,
      color: "blue",
      details: [
        "Formation interrompue faute d'alternance",
        "Bases acquises en administration de serveurs Windows et Linux",
        "Notions de virtualisation (VMware, Hyper-V)",
        "Prévision de reprise du cursus complet en alternance"
      ],
      logo: "/images/tech/university.svg",
      skills: ["Administration Système", "Architecture Réseau", "Cloud Computing", "Sécurité Informatique"]
    },
    {
      id: 'bts',
      title: "BTS Service Informatique aux Organisations",
      institution: "Lycée René Cassin",
      location: "Strasbourg",
      date: "2022-2024",
      icon: <FaLaptopCode size={24} />,
      color: "amber",
      details: [
        "Option SISR (Solutions d'Infrastructure, Systèmes et Réseaux)",
        "Administration des systèmes et réseaux",
        "Supervision et maintenance d'infrastructures",
        "Sécurisation des accès et des données"
      ],
      logo: "/images/tech/network.svg",
      skills: ["Réseaux", "Systèmes d'exploitation", "Virtualisation", "Helpdesk"]
    },
    {
      id: 'bac',
      title: "Baccalauréat STI2D",
      institution: "Lycée Blaise Pascal",
      location: "Colmar",
      date: "2022",
      icon: <FaSchool size={24} />,
      color: "cyan",
      details: [
        "Option EE (Énergie et Environnement)",
        "Formation technologique industrielle",
        "Bases des systèmes d'information et programmation",
        "Projets techniques et travaux pratiques"
      ],
      logo: "/images/tech/high-school.svg",
      skills: ["Bases techniques", "Projets collectifs", "Logique informatique"]
    }
  ];

  // Certifications
  const certifications = [
    {
      title: "Mooc SecNumEdu de l&apos;ANSSI",
      icon: <FaLock className="text-tech-accent" />,
      issuer: "Agence Nationale de la Sécurité des Systèmes d&apos;Information",
      date: "2023",
      description: "Formation sur la sécurité numérique et la protection des infrastructures."
    },
    {
      title: "Cisco CCNA",
      icon: <FaNetworkWired className="text-tech-accent" />,
      issuer: "Cisco Systems",
      date: "2023",
      description: "Certification officielle attestant des compétences en administration réseau."
    },
    {
      title: "CNIL",
      icon: <FaLock className="text-tech-accent" />,
      issuer: "Commission Nationale de l&apos;Informatique et des Libertés",
      date: "2024",
      description: "Formation sur la protection des données personnelles et la conformité au RGPD."
    }
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 relative">
        {/* Éléments de fond décoratifs - masqués sur mobile */}
        <div className="absolute top-20 left-10 opacity-5 transform -rotate-12 hidden md:block">
          <FaGraduationCap size={200} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-5 transform rotate-12 hidden md:block">
          <FaAward size={200} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 gradient-text-blue">FORMATION</h2>
          <div className="w-16 sm:w-20 h-1 bg-tech-accent mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-300 px-2">
            MON PARCOURS ACADÉMIQUE ET CERTIFICATIONS PROFESSIONNELLES
          </p>
        </motion.div>

        {/* Timeline des formations - Structure révisée pour mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative pb-12 md:pb-20"
        >
          {/* Ligne verticale de la timeline - visible uniquement sur desktop */}
          <div className="hidden md:block absolute h-full w-1 bg-gradient-to-b from-blue-600/80 via-blue-500/50 to-blue-400/30 left-1/2 transform -translate-x-1/2 z-0 rounded-full"></div>

          {/* Ligne verticale de la timeline - visible uniquement sur mobile */}
          <div className="md:hidden absolute h-full w-1 bg-gradient-to-b from-blue-600/80 via-blue-500/50 to-blue-400/30 left-6 z-0 rounded-full"></div>

          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              variants={itemVariants}
              className={`flex items-start mb-12 md:mb-20 relative ${
                index % 2 === 0 
                  ? "md:flex-row flex-row" 
                  : "md:flex-row-reverse flex-row"
              }`}
            >
              {/* Point sur la timeline - desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 border-4 border-blue-500 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-blue-500">{education.icon}</span>
                </motion.div>
              </div>

              {/* Point sur la timeline - mobile */}
              <div className="md:hidden absolute left-6 transform -translate-x-1/2 z-10">
                <motion.div 
                  className="w-8 h-8 rounded-full bg-slate-800 border-3 border-blue-500 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-blue-500 text-sm">{education.icon}</span>
                </motion.div>
              </div>

              {/* Espace vide côté gauche/droit - desktop uniquement */}
              <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "pr-16 text-right" : "pl-16"}`}></div>

              {/* Carte d'éducation */}
              <motion.div 
                className={`md:w-1/2 w-full pl-12 md:pl-0 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass rounded-xl overflow-hidden border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 md:px-6 md:py-4 border-b border-blue-500/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-white tech-text">{education.title}</h3>
                      <span className="text-xs sm:text-sm bg-blue-500/20 text-blue-400 py-1 px-2 md:px-3 rounded-full tech-text inline-block sm:text-right">
                        {education.date}
                      </span>
                    </div>
                    <p className="text-tech-accent font-medium mt-1 text-xs sm:text-sm">{education.institution} | {education.location}</p>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      {education.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">▹</span>
                          <span className="text-gray-300 text-xs sm:text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                      {education.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] sm:text-xs bg-blue-500/10 text-blue-400 px-2 md:px-3 py-1 rounded-full tech-text"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-10 md:mt-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 md:mb-10 text-center gradient-text-blue">CERTIFICATIONS</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass p-4 md:p-6 rounded-xl border border-blue-500/20"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-base md:text-lg text-center text-white mb-2">{cert.title}</h4>
                <p className="text-tech-accent text-xs sm:text-sm text-center mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-xs sm:text-sm text-center">{cert.description}</p>
                <div className="mt-4 text-center">
                  <span className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition vers la prochaine section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-16 md:mt-24"
        >
          <a 
            href="#experience" 
            className="px-6 py-2 border border-blue-500/30 rounded-full text-blue-400 hover:bg-blue-500/10 transition-colors duration-300 text-sm md:text-base"
          >
            Voir mon expérience professionnelle →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 