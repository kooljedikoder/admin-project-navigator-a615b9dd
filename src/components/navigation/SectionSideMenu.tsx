
import React, { useEffect, useState } from 'react';
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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 300; // Height of the banner
      setIsSticky(window.scrollY > bannerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || links.length === 0) return null;

  return (
    <div className={`hidden lg:block ${isSticky ? 'fixed top-20' : 'absolute top-0'} left-0 z-40`}>
      <div className="bg-white/80 backdrop-blur-sm rounded-r-lg shadow-lg p-4 w-64">
        <nav className="space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const element = document.getElementById(link.id);
                if (element) {
                  const offset = isSticky ? 100 : 300;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="flex items-center gap-2 text-sm font-light text-gray-700 hover:text-blue-600 transition-colors w-full text-left py-2 px-3"
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
