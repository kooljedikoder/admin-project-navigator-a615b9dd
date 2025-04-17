
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ChevronRight
} from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">About Us</h3>
            <p className="text-blue-200 mb-6">
              We're a leading consulting firm dedicated to helping businesses achieve sustainable growth through innovative strategies and expert guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/pages/about-us" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/pages/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="/admin/projects" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Case Studies</span>
                </a>
              </li>
              <li>
                <a href="/blog" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="/pages/contact" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/pages/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Business Consulting</span>
                </a>
              </li>
              <li>
                <a href="/pages/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Digital Marketing</span>
                </a>
              </li>
              <li>
                <a href="/pages/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Web Development</span>
                </a>
              </li>
              <li>
                <a href="/pages/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Workforce Solutions</span>
                </a>
              </li>
              <li>
                <a href="/pages/services" className="text-blue-200 hover:text-white flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Financial Advisory</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-blue-300 flex-shrink-0 mt-1" />
                <span className="text-blue-200">
                  1234 Business Avenue<br />
                  Suite 567<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-blue-300 flex-shrink-0" />
                <a href="tel:+12345678900" className="text-blue-200 hover:text-white">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-blue-300 flex-shrink-0" />
                <a href="mailto:info@example.com" className="text-blue-200 hover:text-white">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-900 text-center">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Your Business Name. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
