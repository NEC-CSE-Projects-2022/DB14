import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Creators', href: '/creators' },
    { name: 'Prediction', href: '/prediction' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, text: 'manikantaappini02@gmail.com' },
    { icon: <Phone className="h-4 w-4" />, text: '+91 8978459660' },
    { icon: <MapPin className="h-4 w-4" />, text: 'Narasaraopeta Engineering College, Narasaraopeta' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">PneumoDetect</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              AI-powered pneumonia detection system helping healthcare professionals 
              save time, improve accuracy, and save lives through advanced deep learning technology.
            </p>
            <p className="text-sm text-gray-400">
              Empowering healthcare with artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                  <span className="text-blue-400 mt-0.5">{info.icon}</span>
                  <span className="break-words">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} PneumoDetect. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                Privacy Policy
              </span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                Terms of Service
              </span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                Medical Disclaimer
              </span>
            </div>
          </div>
        </div>

        {/* Additional Copyright Notice */}
        <div className="text-center mt-6 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            This software is for educational and research purposes only. 
            Always consult with qualified healthcare professionals for medical decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;