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
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 relative">
        {/* Éléments de fond décoratifs */}
        <div className="absolute top-20 left-10 opacity-5 transform -rotate-12">
          <FaGraduationCap size={200} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-5 transform rotate-12">
          <FaAward size={200} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 gradient-text-blue">FORMATION</h2>
          <div className="w-20 h-1 bg-tech-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            MON PARCOURS ACADÉMIQUE ET CERTIFICATIONS PROFESSIONNELLES
          </p>
        </motion.div>

        {/* Timeline des formations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative pb-20"
        >
          {/* Ligne verticale de la timeline */}
          <div className="absolute h-full w-1 bg-gradient-to-b from-blue-600/80 via-blue-500/50 to-blue-400/30 left-1/2 transform -translate-x-1/2 z-0 rounded-full"></div>

          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              variants={itemVariants}
              className={`flex items-center mb-20 relative ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div 
                  className={`w-12 h-12 rounded-full bg-slate-800 border-4 border-blue-500 flex items-center justify-center`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className={`text-blue-500`}>{education.icon}</span>
                </motion.div>
              </div>

              {/* Contenu de gauche ou droite */}
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-16 text-right" : "pl-16"}`}></div>

              {/* Carte d'éducation */}
              <motion.div 
                className={`w-1/2 ${index % 2 === 0 ? "pl-16" : "pr-16"}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass rounded-xl overflow-hidden border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 border-b border-blue-500/20">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white tech-text">{education.title}</h3>
                      <span className="text-sm bg-blue-500/20 text-blue-400 py-1 px-3 rounded-full tech-text">
                        {education.date}
                      </span>
                    </div>
                    <p className="text-tech-accent font-medium mt-1 text-sm">{education.institution} | {education.location}</p>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {education.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">▹</span>
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {education.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full tech-text"
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
          className="max-w-4xl mx-auto mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-10 text-center gradient-text-blue">CERTIFICATIONS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass p-6 rounded-xl border border-blue-500/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-lg text-center text-white mb-2">{cert.title}</h4>
                <p className="text-tech-accent text-sm text-center mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm text-center">{cert.description}</p>
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="glass inline-block px-6 py-3 rounded-lg border border-blue-500/20">
            <p className="text-gray-300 font-medium">
              Je suis à la recherche d&apos;une <span className="text-tech-accent">alternance en administration réseaux et systèmes</span> pour la rentrée de septembre 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 