
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
  const [activeSection, setActiveSection] = useState(links[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 400; // Updated to match new banner height
      setIsSticky(window.scrollY > bannerHeight);
      
      // Update active section based on scroll position
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        if (section) {
          const offset = isSticky ? 100 : 400;
          const sectionTop = section.offsetTop - offset;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(links[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links, isSticky]);

  if (!visible || links.length === 0) return null;

  return (
    <div className={`hidden lg:block ${isSticky ? 'fixed top-20' : 'absolute top-0'} left-0 z-40`}>
      <div className="bg-white/80 backdrop-blur-sm shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)] rounded-r-2xl p-6 w-64">
        <nav className="space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const element = document.getElementById(link.id);
                if (element) {
                  const offset = isSticky ? 100 : 400;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`flex items-center gap-2 text-sm font-light w-full text-left py-3 px-4 rounded-xl transition-all ${
                activeSection === link.id
                  ? 'bg-blue-50 text-blue-600 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.05),inset_-3px_-3px_6px_rgba(255,255,255,0.8)]'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
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
