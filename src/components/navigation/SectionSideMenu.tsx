
import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface SectionLink {
  id: string;
  label: string;
}

interface SectionSideMenuProps {
  links: SectionLink[];
  visible: boolean;
}

const SectionSideMenu = ({ links, visible }: SectionSideMenuProps) => {
  if (!visible || links.length === 0) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:block fixed right-4 top-1/3 transform -translate-y-1/2 z-40">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4">
        <nav className="space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="flex items-center gap-2 text-sm font-light text-gray-700 hover:text-[#1704D5] transition-colors w-full text-left py-2 px-3 rounded-md hover:bg-blue-50"
            >
              <ChevronRight className="h-4 w-4" />
              <span>{link.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SectionSideMenu;
