import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight
} from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#1a1db0] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/698a3c21-f49a-430a-b9b7-c60477a6898c.png" 
                alt="Moore Advice Logo" 
                className="w-12 h-12 object-contain" 
              />
            </div>
            <p className="text-blue-200 text-sm mb-4">
              A 460 degree brand agency delivering comprehensive marketing communication and brand identity development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/beginning" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>The Beginning</span>
                </a>
              </li>
              <li>
                <a href="/who-we-are" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>Who We Are</span>
                </a>
              </li>
              <li>
                <a href="/what-we-do" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>What We Do</span>
                </a>
              </li>
              <li>
                <a href="/who-we-serve" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>When & For Whom</span>
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>What We Have Done</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>When Can We Meet You</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>Retail & Brand Space Design</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>Advertising & Brand Development</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>Websites & Apps Development</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>Digital Signage & OOH</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>Project Management</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 text-sm hover:text-white flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span>A.I. & Brand Transformation</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <MapPin size={18} className="text-blue-300 flex-shrink-0 mt-1" />
                <span className="text-blue-200 text-sm">
                  1b Emmanuel Street<br />
                  Maryland, Ikeja<br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex gap-2">
                <Phone size={18} className="text-blue-300 flex-shrink-0" />
                <a href="tel:+2348035354000" className="text-blue-200 text-sm hover:text-white">
                  +234 803 535 4000
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="text-blue-300 flex-shrink-0" />
                <a href="mailto:info@mooreadvice.com" className="text-blue-200 text-sm hover:text-white">
                  info@mooreadvice.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-blue-900 text-center">
          <p className="text-blue-300 text-xs">
            &copy; {new Date().getFullYear()} Moore Advice. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
