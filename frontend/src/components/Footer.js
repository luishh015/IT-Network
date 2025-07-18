import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'IT-Strategie & Beratung', href: '#services' },
        { name: 'Cloud-Migration', href: '#services' },
        { name: 'Cybersecurity', href: '#services' },
        { name: 'Digitale Transformation', href: '#services' }
      ]
    },
    {
      title: 'Unternehmen',
      links: [
        { name: 'Über uns', href: '#about' },
        { name: 'Team', href: '#team' },
        { name: 'Karriere', href: '#career' },
        { name: 'Partner', href: '#partners' }
      ]
    },
    {
      title: 'Ressourcen',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Fallstudien', href: '#case-studies' },
        { name: 'Whitepaper', href: '#resources' },
        { name: 'Webinare', href: '#webinars' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="text-brand-green" size={32} />
              <div>
                <h3 className="text-2xl font-bold">ITExpert</h3>
                <p className="text-gray-400 text-sm">Ihr Partner für digitale Transformation</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Wir helfen Unternehmen dabei, ihre IT-Infrastruktur zu modernisieren 
              und digitale Transformationen erfolgreich umzusetzen.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3" />
                <span>kontakt@itexpert.de</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3" />
                <span>+49 (0) 30 12345-678</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3" />
                <span>Musterstraße 123, 10115 Berlin</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-brand-green transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ITExpert. Alle Rechte vorbehalten.
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-brand-green transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex space-x-4 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-brand-green transition-colors">
                  Datenschutz
                </a>
                <a href="#imprint" className="text-gray-400 hover:text-brand-green transition-colors">
                  Impressum
                </a>
                <a href="#terms" className="text-gray-400 hover:text-brand-green transition-colors">
                  AGB
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Easter Egg */}
        <div className="text-center mt-8 text-gray-600 text-xs">
          <p>
            Übrigens: Unsere Neandertaler-IT-Abteilung 🦍 und der Yeti-Sicherheitsdienst 🦣 
            arbeiten rund um die Uhr für Sie!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;