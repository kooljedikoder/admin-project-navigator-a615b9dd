
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface SectionLink {
  id: string;
  label: string;
}

const SectionSideMenu = () => {
  const sectionLinks: SectionLink[] = [
    { id: 'retail-design', label: 'Retail & Brand Design' },
    { id: 'advertising', label: 'Advertising & Brand' },
    { id: 'web-development', label: 'Web Development' }
  ];

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
          {sectionLinks.map((link) => (
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
