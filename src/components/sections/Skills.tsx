"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaShieldAlt, FaNetworkWired, FaDocker, FaCode, FaBrain, FaUsers, FaTasks, FaCertificate, FaProjectDiagram, FaHeart, FaClock, FaWindows, FaLinux, FaCloud } from 'react-icons/fa';
import { SiCisco, SiFortinet, SiVmware } from 'react-icons/si';
import { GoGear } from 'react-icons/go';

const Skills = () => {
  // État pour suivre quelle catégorie est active
  const [activeCategory, setActiveCategory] = useState('tech');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Skills data
  const technicalSkills = [
    {
      name: "Administration de Serveurs",
      icon: <FaServer className="text-tech-accent" size={24} />,
      skills: [
        { name: "Windows Server", percentage: 85 },
        { name: "Linux", percentage: 80 },
        { name: "Gestion de services", percentage: 75 },
      ]
    },
    {
      name: "Sécurité",
      icon: <FaShieldAlt className="text-tech-accent" size={24} />,
      skills: [
        { name: "Audits de sécurité", percentage: 75 },
        { name: "Pare-feu", percentage: 80 },
        { name: "VPN", percentage: 70 },
      ]
    },
    {
      name: "Réseaux",
      icon: <FaNetworkWired className="text-tech-accent" size={24} />,
      skills: [
        { name: "Configuration de routeurs", percentage: 80 },
        { name: "Analyse de trafic", percentage: 75 },
        { name: "Dépannage réseau", percentage: 85 },
      ]
    },
    {
      name: "Virtualisation",
      icon: <FaDocker className="text-tech-accent" size={24} />,
      skills: [
        { name: "Docker", percentage: 75 },
        { name: "Machines virtuelles", percentage: 80 },
        { name: "Gestion de conteneurs", percentage: 70 },
      ]
    }
  ];

  const softSkills = [
    {
      name: "Compétences Analytiques",
      icon: <FaBrain className="text-tech-accent" size={24} />,
      skills: [
        { name: "Résolution de problèmes", percentage: 90 },
        { name: "Pensée critique", percentage: 85 },
        { name: "Adaptabilité", percentage: 80 },
      ]
    },
    {
      name: "Collaboration",
      icon: <FaUsers className="text-tech-accent" size={24} />,
      skills: [
        { name: "Travail en équipe", percentage: 85 },
        { name: "Communication technique", percentage: 80 },
        { name: "Leadership", percentage: 75 },
      ]
    },
    {
      name: "Organisation",
      icon: <FaTasks className="text-tech-accent" size={24} />,
      skills: [
        { name: "Gestion de projet", percentage: 80 },
        { name: "Planification", percentage: 85 },
        { name: "Autonomie", percentage: 90 },
      ]
    },
    {
      name: "Développement",
      icon: <FaCode className="text-tech-accent" size={24} />,
      skills: [
        { name: "Scripts d'automatisation", percentage: 75 },
        { name: "Documentation", percentage: 85 },
        { name: "Veille technologique", percentage: 90 },
      ]
    }
  ];

  // Technologies maîtrisées avec leurs logos
  const technologies = [
    { name: "Windows", icon: <FaWindows className="text-tech-accent" size={32} />, level: "Expert" },
    { name: "Linux", icon: <FaLinux className="text-tech-accent" size={32} />, level: "Avancé" },
    { name: "Cisco", icon: <SiCisco className="text-tech-accent" size={32} />, level: "Avancé" },
    { name: "Docker", icon: <FaDocker className="text-tech-accent" size={32} />, level: "Intermédiaire" },
    { name: "Cloud", icon: <FaCloud className="text-tech-accent" size={32} />, level: "Intermédiaire" },
    { name: "Fortinet", icon: <SiFortinet className="text-tech-accent" size={32} />, level: "Avancé" },
    { name: "VMware", icon: <SiVmware className="text-tech-accent" size={32} />, level: "Avancé" },
    { name: "Packet Tracer", icon: <GoGear className="text-tech-accent" size={32} />, level: "Expert" },
  ];

  // Badges pour la bande défilante
  const badges = [
    { icon: <FaClock className="text-tech-accent" size={24} />, title: "3+", subtitle: "ANNÉES D'EXPÉRIENCE" },
    { icon: <FaProjectDiagram className="text-tech-accent" size={24} />, title: "15+", subtitle: "PROJETS RÉALISÉS" },
    { icon: <FaCertificate className="text-tech-accent" size={24} />, title: "5+", subtitle: "CERTIFICATIONS" },
    { icon: <FaHeart className="text-tech-accent" size={24} />, title: "100%", subtitle: "PASSION" },
    { icon: <FaServer className="text-tech-accent" size={24} />, title: "WINDOWS", subtitle: "SERVER" },
    { icon: <FaCode className="text-tech-accent" size={24} />, title: "LINUX", subtitle: "ADMINISTRATION" },
    { icon: <FaNetworkWired className="text-tech-accent" size={24} />, title: "CISCO", subtitle: "RÉSEAUX" },
    { icon: <FaShieldAlt className="text-tech-accent" size={24} />, title: "SÉCURITÉ", subtitle: "FIREWALL" },
    { icon: <FaDocker className="text-tech-accent" size={24} />, title: "DOCKER", subtitle: "VIRTUALISATION" },
    { icon: <FaUsers className="text-tech-accent" size={24} />, title: "TRAVAIL", subtitle: "EN ÉQUIPE" },
    { icon: <FaShieldAlt className="text-amber-500" size={24} />, title: "FORTINET", subtitle: "FIREWALL" },
    { icon: <FaServer className="text-amber-500" size={24} />, title: "VMWARE", subtitle: "VIRTUALISATION" },
    { icon: <FaNetworkWired className="text-amber-500" size={24} />, title: "ROUTAGE", subtitle: "& SWITCHING" },
    { icon: <FaCode className="text-amber-500" size={24} />, title: "SCRIPTING", subtitle: "AUTOMATISATION" },
    { icon: <FaShieldAlt className="text-amber-500" size={24} />, title: "SIEM", subtitle: "MONITORING" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 gradient-text-blue">MES COMPÉTENCES</h2>
          <div className="w-20 h-1 bg-tech-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            EXPERTISE TECHNIQUE ET SAVOIR-FAIRE EN INFRASTRUCTURE RÉSEAUX ET SÉCURITÉ
          </p>
        </motion.div>

        {/* Navigation des catégories */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-slate-800/50 border border-blue-500/20 backdrop-blur">
            <motion.button
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeCategory === 'tech' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-blue-500/10'
              }`}
              onClick={() => setActiveCategory('tech')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              COMPÉTENCES TECHNIQUES
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeCategory === 'soft' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-blue-500/10'
              }`}
              onClick={() => setActiveCategory('soft')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              SAVOIR-FAIRE
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeCategory === 'tech-stack' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-blue-500/10'
              }`}
              onClick={() => setActiveCategory('tech-stack')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              TECHNOLOGIES
            </motion.button>
          </div>
        </div>

        {/* Skills display */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {activeCategory === 'tech' && technicalSkills.map((category, catIndex) => (
            <motion.div
              key={`tech-${catIndex}`}
              variants={itemVariants}
              className="glass p-6 rounded-xl border border-blue-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tech-text">{category.name}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={`tech-skill-${catIndex}-${skillIndex}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-tech-accent font-mono">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-tech-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {activeCategory === 'soft' && softSkills.map((category, catIndex) => (
            <motion.div
              key={`soft-${catIndex}`}
              variants={itemVariants}
              className="glass p-6 rounded-xl border border-blue-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tech-text">{category.name}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={`soft-skill-${catIndex}-${skillIndex}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-tech-accent font-mono">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {activeCategory === 'tech-stack' && (
            <motion.div 
              className="col-span-1 md:col-span-2"
              variants={itemVariants}
            >
              <div className="glass p-8 rounded-xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-8 text-center tech-text">STACK TECHNOLOGIQUE</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={`tech-${index}`}
                      className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg border border-blue-500/10 hover:border-blue-500/40 transition-all"
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.1 * index,
                        ease: "easeOut"
                      }}
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Affichage de l'icône */}
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                            {tech.icon}
                          </div>
                        </motion.div>
                      </div>
                      <h4 className="font-bold text-white text-center">{tech.name}</h4>
                      <span className="text-xs text-tech-accent mt-1 tech-text">{tech.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Bande défilante de badges et statistiques */}
        <div className="relative mt-20 mb-10 py-10 w-full overflow-hidden bg-slate-900/50 border-y border-blue-500/20">
          {/* Premier défilement */}
          <div className="marquee-container">
            <motion.div
              className="flex space-x-6 marquee"
              animate={{ x: [0, -2500] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            >
              {badges.concat(badges).map((badge, index) => (
                <motion.div 
                  key={`badge-1-${index}`} 
                  className="flex items-center gap-3 px-6 py-4 bg-slate-800/70 rounded-lg border border-blue-500/20 min-w-[220px] flex-shrink-0 pulse-badge"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    borderColor: "rgba(59, 130, 246, 0.5)"
                  }}
                  style={{ 
                    animationDelay: `${index * 0.4}s`,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
                    {badge.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text-blue">{badge.title}</div>
                    <div className="text-xs text-white/70 tech-text tracking-wider">{badge.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Deuxième défilement (direction opposée) */}
          <div className="marquee-container mt-6">
            <motion.div
              className="flex space-x-6 marquee"
              animate={{ x: [-2500, 0] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            >
              {badges.concat(badges).map((badge, index) => (
                <motion.div 
                  key={`badge-2-${index}`} 
                  className="flex items-center gap-3 px-6 py-4 bg-slate-800/70 rounded-lg border border-blue-500/20 min-w-[220px] flex-shrink-0 pulse-badge"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    borderColor: "rgba(59, 130, 246, 0.5)"
                  }}
                  style={{ 
                    animationDelay: `${index * 0.4}s`,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
                    {badge.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text-blue">{badge.title}</div>
                    <div className="text-xs text-white/70 tech-text tracking-wider">{badge.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Effet de fondu sur les côtés */}
          <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 