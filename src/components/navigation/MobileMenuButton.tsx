
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isScrolled: boolean;
}

const MobileMenuButton = ({ isOpen, onClick, isScrolled }: MobileMenuButtonProps) => {
  return (
    <button 
      className="lg:hidden p-2"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
      ) : (
        <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
      )}
    </button>
  );
};

export default MobileMenuButton;
