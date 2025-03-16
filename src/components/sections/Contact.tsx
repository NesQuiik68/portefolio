"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission (in a real app, this would send data to a server)
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Merci pour votre message ! Je vous contacterai dès que possible.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-amber-500" size={24} />,
      title: "Email",
      value: "rayanehamada680@gmail.com",
      link: "mailto:rayanehamada680@gmail.com"
    },
    {
      icon: <FaPhone className="text-amber-500" size={24} />,
      title: "Téléphone",
      value: "06 95 28 88 59",
      link: "tel:+33695288859"
    },
    {
      icon: <FaMapMarkerAlt className="text-amber-500" size={24} />,
      title: "Localisation",
      value: "Colmar, France",
      link: "https://maps.google.com/?q=Colmar,France"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Contact</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités d'alternance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.title === "Localisation" ? "_blank" : undefined}
              rel={info.title === "Localisation" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{info.title}</h3>
              <p className="text-slate-600">{info.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">Envoyez-moi un message</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-slate-700 font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-md"
              >
                Envoyer
              </button>

              {formStatus.submitted && (
                <div className={`mt-4 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-xl p-6 shadow-md text-white flex flex-col"
          >
            <h3 className="text-xl font-bold mb-6">Restons connectés</h3>
            <p className="mb-8 text-gray-300">
              Je suis à la recherche d'une alternance pour septembre 2025. Si mon profil correspond à vos besoins,
              n'hésitez pas à me contacter. Je serais ravi d'échanger avec vous sur les opportunités disponibles.
            </p>

            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaLinkedin size={32} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaGithub size={32} />
              </a>
              <a href="mailto:rayanehamada680@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaEnvelope size={32} />
              </a>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400">
                Disponible pour une alternance à partir de <span className="text-amber-400">septembre 2025</span>
              </p>
              <p className="text-amber-500 mt-4">
                Titulaire du permis B - Mobile en Alsace
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 