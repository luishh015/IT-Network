import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import YetiPasswordWatcher from './YetiPasswordWatcher';
import NeanderthalAnimation from './NeanderthalAnimation';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    password: ''
  });
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const passwordInputRef = useRef(null);

  // Simulate network status
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Demo button to show offline animation
  const simulateOffline = () => {
    setIsOffline(true);
    setTimeout(() => setIsOffline(false), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns binnen 24 Stunden bei Ihnen.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
      password: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const services = [
    'IT-Strategie & Beratung',
    'Cloud-Migration',
    'Cybersecurity',
    'Digitale Transformation',
    'Sonstiges'
  ];

  return (
    <section id="contact" className="py-20 bg-bg-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="display-md text-text-primary mb-6">
            Kontaktieren Sie uns
          </h2>
          <p className="body-xl text-text-secondary max-w-2xl mx-auto">
            Haben Sie Fragen oder benötigen Sie eine individuelle IT-Beratung? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="design-card"
          >
            <h3 className="heading-3 mb-6">Nachricht senden</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Interessiert an Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                >
                  <option value="">Bitte wählen...</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Nachricht *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                  placeholder="Beschreiben Sie Ihre IT-Herausforderung oder Ihr Projekt..."
                />
              </div>

              {/* Demo Password Field für Yeti Animation */}
              <div className="relative">
                <label className="block text-text-primary font-medium mb-2">
                  Passwort (Demo für Yeti 🦣)
                </label>
                <input
                  ref={passwordInputRef}
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                  placeholder="Der Yeti beobachtet Sie..."
                />
              </div>

              <div className="flex gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex-1 group"
                >
                  Nachricht senden
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </motion.button>
                
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={simulateOffline}
                  className="btn-secondary"
                >
                  Offline-Demo 🦍
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="design-card">
              <h3 className="heading-3 mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="card-icon mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">E-Mail</h4>
                    <p className="text-text-secondary">kontakt@itexpert.de</p>
                    <p className="text-text-secondary">support@itexpert.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="card-icon mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Telefon</h4>
                    <p className="text-text-secondary">+49 (0) 30 12345-678</p>
                    <p className="text-text-secondary">Mo-Fr: 9:00 - 18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="card-icon mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Adresse</h4>
                    <p className="text-text-secondary">
                      Musterstraße 123<br />
                      10115 Berlin<br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="design-card">
              <h3 className="heading-3 mb-4">Antwortzeit</h3>
              <p className="text-text-secondary mb-4">
                Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-text-primary font-medium">Derzeit verfügbar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spezielle Animationen */}
      <YetiPasswordWatcher 
        isWatching={isPasswordFocused} 
        inputRef={passwordInputRef}
      />
      
      <NeanderthalAnimation isVisible={isOffline} />
    </section>
  );
};

export default Contact;