
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const TopInfoBar = () => {
  return (
    <div className="bg-blue-950 text-white py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+2348035354000" className="flex items-center gap-2 text-blue-200 hover:text-white">
              <Phone size={14} />
              <span>+234 803 535 4000</span>
            </a>
            <a href="mailto:info@mooreadvice.com" className="flex items-center gap-2 text-blue-200 hover:text-white">
              <Mail size={14} />
              <span>info@mooreadvice.com</span>
            </a>
            <span className="flex items-center gap-2 text-blue-200">
              <MapPin size={14} />
              <span>1b Emmanuel Street, Maryland, Ikeja</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-blue-200 hover:text-white">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="text-blue-200 hover:text-white">
              <Twitter size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="text-blue-200 hover:text-white">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-blue-200 hover:text-white">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
