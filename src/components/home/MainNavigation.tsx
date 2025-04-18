
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';
import DesktopNav from '@/components/navigation/DesktopNav';
import MobileNav from '@/components/navigation/MobileNav';
import MobileMenuButton from '@/components/navigation/MobileMenuButton';

const MainNavigation = () => {
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
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-[#1a1db0]/80 shadow-md backdrop-blur-sm' 
            : 'bg-[#1a1db0]'
        }`}
      >
        <div className="container mx-auto px-0 lg:px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center m-0 p-0">
              <img 
                src="/lovable-uploads/698a3c21-f49a-430a-b9b7-c60477a6898c.png" 
                alt="Moore Advice Logo" 
                className="h-[64px] w-auto object-contain" 
              />
            </Link>
            
            <div className="flex items-center space-x-4">
              <DesktopNav isScrolled={isScrolled} />
              
              <div className="hidden lg:flex items-center">
                <Link 
                  to="/admin"
                  className="p-2 text-white hover:text-white/80 transition-colors"
                  aria-label="Admin Dashboard"
                >
                  <UserRound size={24} />
                </Link>
              </div>
            </div>
            
            <MobileMenuButton 
              isOpen={isMenuOpen} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              isScrolled={isScrolled} 
            />
          </div>
        </div>
        
        <MobileNav 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
      </header>
    </>
  );
};

export default MainNavigation;
