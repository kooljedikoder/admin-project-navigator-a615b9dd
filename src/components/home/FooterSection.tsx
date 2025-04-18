
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
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="Moore Advice Logo" 
                className="w-12 h-12 object-contain" 
              />
              <span className="text-xl font-bold text-white">Moore Advice</span>
            </div>
            <p className="text-blue-200 mb-6">
              A 460 degree brand agency delivering comprehensive marketing communication and brand identity development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/beginning" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>The Beginning</span>
                </a>
              </li>
              <li>
                <a href="/who-we-are" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Who We Are</span>
                </a>
              </li>
              <li>
                <a href="/what-we-do" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>What We Do</span>
                </a>
              </li>
              <li>
                <a href="/who-we-serve" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>When & For Whom</span>
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>What We Have Done</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>When Can We Meet You</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Retail & Brand Space Design</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Advertising & Brand Development</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Websites & Apps Development</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Digital Signage & OOH</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Project Management</span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>A.I. & Brand Transformation</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-blue-300 flex-shrink-0 mt-1" />
                <span className="text-blue-200">
                  1b Emmanuel Street<br />
                  Maryland, Ikeja<br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-blue-300 flex-shrink-0" />
                <a href="tel:+2348035354000" className="text-blue-200 hover:text-white">
                  +234 803 535 4000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-blue-300 flex-shrink-0" />
                <a href="mailto:info@mooreadvice.com" className="text-blue-200 hover:text-white">
                  info@mooreadvice.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-900 text-center">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Moore Advice. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
