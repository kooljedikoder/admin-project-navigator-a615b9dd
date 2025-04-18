
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
  UserRound,
  Book,
  Users,
  Grid,
  Handshake,
  Compass,
  Star 
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { initialMenuItems } from '@/data/menuData';

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

  // Get icon based on menu label
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
            <nav className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {initialMenuItems.map((item) => (
                    <NavigationMenuItem key={item.id}>
                      {item.children.length > 0 ? (
                        <>
                          <NavigationMenuTrigger className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}>
                            <div className="flex items-center">
                              {getMenuIcon(item.label)}
                              {item.label}
                            </div>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.children.map((child) => (
                                <li key={child.id}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={child.url}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none">{child.label}</div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link 
                          to={item.url} 
                          className={cn(
                            navigationMenuTriggerStyle(),
                            `${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`,
                          )}
                        >
                          <div className="flex items-center">
                            {getMenuIcon(item.label)}
                            {item.label}
                          </div>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
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
                {initialMenuItems.map((item) => (
                  <div key={item.id}>
                    {item.children.length > 0 ? (
                      <details className="group">
                        <summary className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200 flex justify-between items-center cursor-pointer">
                          <div className="flex items-center gap-2">
                            {getMenuIcon(item.label)}
                            <span>{item.label}</span>
                          </div>
                          <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="pl-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link 
                              key={child.id}
                              to={child.url} 
                              className="block text-gray-600 hover:text-blue-600 py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link 
                        to={item.url} 
                        className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200 flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {getMenuIcon(item.label)}
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="mt-4 flex flex-col gap-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Get a Consultation
                  </Button>
                  <Link 
                    to="/admin"
                    className="w-full py-2 flex justify-center items-center gap-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserRound size={18} />
                    <span>Admin Dashboard</span>
                  </Link>
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
