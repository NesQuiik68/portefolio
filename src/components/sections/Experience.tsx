"use client";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaTools, FaServer, FaShieldAlt, FaWindows, FaCodeBranch, FaUserCog, FaSyncAlt, FaDatabase, FaSearch, FaNetworkWired, FaDesktop, FaHdd } from 'react-icons/fa';

const Experience = () => {
  // État pour les compteurs
  const [count, setCount] = useState(0);
  const [timeCount, setTimeCount] = useState(0);
  const controls = useAnimation();
  const controlsNas = useAnimation();

  // Effet pour animer le compteur de postes
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('achievement-counter');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible && count === 0) {
          let currentCount = 0;
          const interval = setInterval(() => {
            currentCount += 1;
            setCount(currentCount);
            
            if (currentCount >= 60) {
              clearInterval(interval);
            }
          }, 30);
          
          controls.start({
            scale: [1, 1.2, 1],
            transition: { duration: 0.5 }
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [count, controls]);

  // Effet pour animer le compteur de temps
  useEffect(() => {
    const handleScrollTime = () => {
      const element = document.getElementById('time-counter');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible && timeCount === 0) {
          let currentCount = 0;
          const interval = setInterval(() => {
            currentCount += 5;
            setTimeCount(currentCount);
            
            if (currentCount >= 80) {
              clearInterval(interval);
            }
          }, 50);
          
          controlsNas.start({
            scale: [1, 1.2, 1],
            transition: { duration: 0.5 }
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollTime);
    return () => window.removeEventListener('scroll', handleScrollTime);
  }, [timeCount, controlsNas]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  // Données des expériences professionnelles
  const experiences = [
    {
      id: "stage2",
      title: "Stage 2ème Année",
      company: "Alsace Habitat",
      location: "Strasbourg",
      period: "Janvier 2024 - Février 2024",
      description: "Stage en tant qu&apos;administrateur réseau et système dans une entreprise de gestion immobilière.",
      color: "blue",
      logo: <FaBuilding className="text-tech-accent" size={40} />,
      missions: [
        { 
          title: "Supervision de serveur", 
          description: "Mise en place et configuration d'outils de supervision pour surveiller les performances et la disponibilité des serveurs.",
          icon: <FaServer className="text-tech-accent" size={20} />
        },
        { 
          title: "Maintenance et sécurité", 
          description: "Application des correctifs de sécurité et optimisation des performances des serveurs Windows Server.",
          icon: <FaShieldAlt className="text-tech-accent" size={20} />
        },
        { 
          title: "Déploiement de postes", 
          description: "Automatisation du déploiement d'images système sur les postes clients de l'entreprise.",
          icon: <FaWindows className="text-tech-accent" size={20} />
        },
        { 
          title: "Dépannage informatique", 
          description: "Résolution des incidents techniques et assistance aux utilisateurs sur leurs problèmes informatiques quotidiens.",
          icon: <FaTools className="text-tech-accent" size={20} />
        }
      ],
      technologies: ["Windows Server", "Active Directory", "WSUS", "PowerShell", "GLPI", "Zabbix"],
      achievements: "DÉPLOIEMENT ET MISE À JOUR DE PLUS DE 60 POSTES DANS TOUT LE SIÈGE, optimisant significativement l'infrastructure informatique de l'entreprise."
    },
    {
      id: "stage1",
      title: "Stage 1ère Année",
      company: "Réseau Informatique",
      location: "Colmar",
      period: "Mai 2023 - Juillet 2023",
      description: "Stage en entreprise de services numériques spécialisée dans l'infrastructure réseau et système.",
      color: "amber",
      logo: <FaNetworkWired className="text-amber-500" size={40} />,
      missions: [
        { 
          title: "Mise en place de serveurs", 
          description: "Installation et configuration de serveurs de données internes pour le stockage et le partage de documents.",
          icon: <FaDatabase className="text-amber-500" size={20} />
        },
        { 
          title: "Documentation technique", 
          description: "Élaboration de documentations techniques détaillées pour les administrateurs et les utilisateurs finaux.",
          icon: <FaCodeBranch className="text-amber-500" size={20} />
        },
        { 
          title: "Maintenance préventive", 
          description: "Mise en place de procédures de maintenance préventive pour limiter les risques de panne.",
          icon: <FaSyncAlt className="text-amber-500" size={20} />
        },
        { 
          title: "Audits de sécurité", 
          description: "Participation à des audits de sécurité et de performances sur des infrastructures client.",
          icon: <FaSearch className="text-amber-500" size={20} />
        }
      ],
      technologies: ["Linux", "NAS", "Backup solutions", "Network monitoring", "Security scanning"],
      achievements: "Développement d'un script d'automatisation qui a permis de réduire le temps de déploiement des serveurs de 4h à 45min."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden relative">
      {/* Élément décoratif */}
      <div className="absolute top-20 right-10 opacity-5 transform rotate-12">
        <FaBriefcase size={200} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-5 transform -rotate-12">
        <FaUserCog size={200} />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 gradient-text-blue">EXPÉRIENCE PROFESSIONNELLE</h2>
          <div className="w-20 h-1 bg-tech-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            MES EXPÉRIENCES PROFESSIONNELLES DANS LE DOMAINE INFORMATIQUE
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-24"
        >
          {experiences.map((experience) => (
            <motion.div 
              key={experience.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Période sur le côté */}
              <motion.div
                className="absolute top-0 left-0 md:left-auto md:right-full md:mr-8 bg-gradient-to-r from-slate-800 to-slate-700 p-3 rounded-lg border border-blue-500/20 shadow-lg"
                whileHover={{ scale: 1.05, x: -5 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-tech-accent tech-text text-sm md:text-base whitespace-nowrap">{experience.period}</p>
              </motion.div>

              {/* Carte principale */}
              <div className="ml-0 md:ml-12 pl-16 md:pl-0">
                <div className="glass rounded-xl overflow-hidden border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  {/* En-tête */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 border-b border-blue-500/20 relative">
                    {/* Logo de l'entreprise */}
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center">
                      {experience.logo}
                    </div>
                    
                    <div className="ml-20">
                      <h3 className="text-2xl font-bold text-white tech-text flex items-center justify-between">
                        {experience.title}
                        <span className="text-sm bg-blue-500/20 text-blue-400 py-1 px-3 rounded-full">
                          {experience.location}
                        </span>
                      </h3>
                      <p className="text-tech-accent font-medium mt-1">{experience.company}</p>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">{experience.description}</p>
                    
                    {/* Missions */}
                    <h4 className="text-white font-bold mb-4 tech-text text-lg">MISSIONS :</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {experience.missions.map((mission, i) => (
                        <motion.div 
                          key={`${experience.id}-mission-${i}`}
                          whileHover={{ y: -5, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)" }}
                          className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/10"
                        >
                          <div className="flex items-start">
                            <div className="bg-blue-500/10 rounded-full p-2 mr-3 mt-1">
                              {mission.icon}
                            </div>
                            <div>
                              <h5 className="font-bold text-white mb-2">{mission.title}</h5>
                              <p className="text-gray-400 text-sm">{mission.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <h4 className="text-white font-bold mb-3 tech-text">TECHNOLOGIES UTILISÉES :</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {experience.technologies.map((tech, i) => (
                        <motion.span 
                          key={`${experience.id}-tech-${i}`}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                          className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full tech-text"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Réalisations */}
                    {experience.achievements && (
                      <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-green-400 font-bold mb-2 tech-text">RÉALISATION CLEF :</h4>
                        {experience.id === "stage2" ? (
                          <div className="text-gray-300">
                            <div className="flex flex-col items-center justify-center mb-4">
                              <div className="flex items-center mb-2">
                                <motion.div
                                  id="achievement-counter"
                                  animate={controls}
                                  className="bg-blue-500/20 rounded-full px-6 py-3 flex items-center justify-center mr-3"
                                >
                                  <span className="text-3xl font-bold gradient-text-blue flex items-center">
                                    <FaDesktop className="mr-2" />
                                    {count}+
                                  </span>
                                </motion.div>
                                <span className="text-xl font-bold text-white tech-text">POSTES DÉPLOYÉS</span>
                              </div>
                              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-3"></div>
                              <p className="text-center max-w-lg">
                                Déploiement et mise à jour complète de plus de 60 postes de travail dans l&apos;ensemble du siège social, incluant l&apos;installation des systèmes d&apos;exploitation, logiciels métiers et configurations de sécurité.
                              </p>
                            </div>
                          </div>
                        ) : experience.id === "stage1" ? (
                          <div className="text-gray-300">
                            <div className="flex items-center justify-center mb-3">
                              <div className="bg-amber-500/20 rounded-lg p-4 max-w-lg">
                                <div className="flex items-center mb-3">
                                  <FaHdd className="text-amber-400 mr-3" size={24} />
                                  <h3 className="text-lg font-bold text-white">MISE EN PLACE D&apos;UN SERVEUR NAS</h3>
                                </div>
                                <p className="text-gray-300 mb-3">
                                  Installation d&apos;un serveur de stockage NAS pour une petite entreprise indépendante, permettant de centraliser les données clients et documents importants.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-1 rounded-full">Partage de fichiers</span>
                                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-1 rounded-full">Sauvegarde simple</span>
                                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-1 rounded-full">Accès sécurisé</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-300 text-sm">{experience.achievements}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section recherche d'alternance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="glass rounded-xl overflow-hidden border border-amber-500/20 shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 border-b border-amber-500/20">
              <h3 className="text-2xl font-bold gradient-text text-center">EN RECHERCHE D&apos;ALTERNANCE</h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-300 mb-6">
                Je suis actuellement à la recherche d&apos;une alternance en administration réseaux et systèmes pour la rentrée de septembre 2025.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-amber-500/10 w-56">
                  <h4 className="font-bold text-white mb-2 tech-text">POSTE RECHERCHÉ</h4>
                  <p className="text-amber-400">Alternant Administrateur Réseaux et Systèmes</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4 border border-amber-500/10 w-56">
                  <h4 className="font-bold text-white mb-2 tech-text">DISPONIBILITÉ</h4>
                  <p className="text-amber-400">Septembre 2025</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4 border border-amber-500/10 w-56">
                  <h4 className="font-bold text-white mb-2 tech-text">RYTHME</h4>
                  <p className="text-amber-400">3 jours entreprise / 2 jours formation</p>
                </div>
              </div>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-white font-medium rounded-md transition-all duration-300 shadow-lg transform"
              >
                ME CONTACTER
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 