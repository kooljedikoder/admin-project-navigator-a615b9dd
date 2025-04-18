import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  UserRound 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

const MainNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-950 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 text-sm">
              <a href="tel:+12345678900" className="flex items-center gap-2 text-blue-200 hover:text-white">
                <Phone size={14} />
                <span>+1 (234) 567-8900</span>
              </a>
              <a href="mailto:info@example.com" className="flex items-center gap-2 text-blue-200 hover:text-white">
                <Mail size={14} />
                <span>info@example.com</span>
              </a>
              <span className="flex items-center gap-2 text-blue-200">
                <MapPin size={14} />
                <span>1234 Business Avenue, NY 10001</span>
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-blue-200 hover:text-white">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-200 hover:text-white">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-blue-200 hover:text-white">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/placeholder.svg" 
                alt="Logo" 
                className="w-10 h-10"
              />
              <span className={`font-bold text-xl ${isScrolled ? 'text-blue-950' : 'text-white'}`}>
                Your Business
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link 
                to="/" 
                className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}
              >
                Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className={`flex items-center gap-1 font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}
                >
                  <span>About</span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem asChild>
                    <Link to="/pages/about-us">Company Overview</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/pages/about-us/team">Our Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/pages/about-us">Our Mission</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className={`flex items-center gap-1 font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}
                >
                  <span>Services</span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem asChild>
                    <Link to="/pages/services">Business Consulting</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/pages/services">Digital Marketing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/pages/services">Web Development</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/pages/services">All Services</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link 
                to="/admin/projects" 
                className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}
              >
                Case Studies
              </Link>
              
              <Link 
                to="/blog" 
                className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}
              >
                Blog
              </Link>
              
              <Link 
                to="/pages/contact" 
                className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}
              >
                Contact
              </Link>
            </nav>
            
            {/* CTA and Admin Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button className={`${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}>
                Get a Consultation
              </Button>
              <Link 
                to="/admin"
                className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                aria-label="Admin Dashboard"
              >
                <UserRound size={24} />
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link 
                  to="/" 
                  className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                <details className="group">
                  <summary className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200 flex justify-between items-center cursor-pointer">
                    About
                    <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      to="/pages/about-us" 
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Company Overview
                    </Link>
                    <Link 
                      to="/pages/about-us/team" 
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Team
                    </Link>
                    <Link 
                      to="/pages/about-us" 
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Mission
                    </Link>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200 flex justify-between items-center cursor-pointer">
                    Services
                    <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      to="/pages/services" 
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Business Consulting
                    </Link>
                    <Link 
                      to="/pages/services" 
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Digital Marketing
                    </Link>
                    <Link 
                      to="/pages/services" 
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                    <Link 
                      to="/pages/services" 
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Services
                    </Link>
                  </div>
                </details>
                
                <Link 
                  to="/admin/projects" 
                  className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
                
                <Link 
                  to="/blog" 
                  className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                
                <Link 
                  to="/pages/contact" 
                  className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="mt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Get a Consultation
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default MainNavigation;
