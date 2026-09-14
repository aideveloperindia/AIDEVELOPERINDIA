import React from 'react';
import Link from 'next/link';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Aditya Nandagiri
            </h3>
            <p className="text-secondary-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              4x Intinta Innovator | Ethical Hacker | Founder | AI Developer
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/aditya-nanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors duration-300 touch-manipulation p-2 -m-2"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={24} />
              </a>

              <a
                href="mailto:aideveloperindia@gmail.com"
                className="text-secondary-400 hover:text-white transition-colors duration-300 touch-manipulation p-2 -m-2"
                aria-label="Email Contact"
              >
                <FiMail size={24} />
              </a>
              <a
                href="https://wa.me/919505009699"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors duration-300 touch-manipulation p-2 -m-2"
                aria-label="WhatsApp Contact"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                          <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-secondary-400 hover:text-white transition-colors touch-manipulation py-1">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/innovations" className="text-secondary-400 hover:text-white transition-colors touch-manipulation py-1">
                    Innovations
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="text-secondary-400 hover:text-white transition-colors touch-manipulation py-1">
                    Client Projects
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-secondary-400 hover:text-white transition-colors touch-manipulation py-1">
                    Gallery
                  </Link>
                </li>
              </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
                          <ul className="space-y-2">
                <li>
                  <Link href="/videos" className="text-secondary-400 hover:text-white transition-colors touch-manipulation py-1">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-secondary-400 hover:text-white transition-colors touch-manipulation py-1">
                    Contact
                  </Link>
                </li>
              </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="text-center">
            <p className="text-secondary-400 text-xs sm:text-sm">
              © 2014-2025 Aditya Nandagiri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 