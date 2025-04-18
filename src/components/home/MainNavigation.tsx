import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserRound, Book, Users, Grid, Handshake, Compass, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TopInfoBar from '@/components/navigation/TopInfoBar';
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

  const getMenuIcon = (label: string) => {
    switch(label) {
      case 'In the Beginning': return <Book className="mr-2 h-4 w-4" />;
      case 'Who We Are': return <Users className="mr-2 h-4 w-4" />;
      case 'What We Do': return <Grid className="mr-2 h-4 w-4" />;
      case 'When & For Whom': return <Handshake className="mr-2 h-4 w-4" />;
      case 'Where We Shine': return <Compass className="mr-2 h-4 w-4" />;
      case 'Why Choose Us': return <Star className="mr-2 h-4 w-4" />;
      case 'How to Reach Us': return <Phone className="mr-2 h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <>
      <TopInfoBar />
      
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1704D5] shadow-md py-2' 
            : 'bg-[#1704D5]/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Moore Advice Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="font-light text-xl text-white">
                Moore Advice
              </span>
            </Link>
            
            <DesktopNav isScrolled={isScrolled} />
            
            <div className="hidden lg:flex items-center gap-4">
              <Button className="bg-white text-[#1704D5] hover:bg-blue-50">
                Get a Consultation
              </Button>
              <Link 
                to="/admin"
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                aria-label="Admin Dashboard"
              >
                <UserRound size={24} />
              </Link>
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
          getMenuIcon={getMenuIcon}
        />
      </header>
    </>
  );
};

export default MainNavigation;
