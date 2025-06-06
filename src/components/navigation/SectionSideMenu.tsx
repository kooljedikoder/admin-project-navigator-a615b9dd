
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
      const bannerHeight = 400; // Adjusted to match banner height
      setIsSticky(window.scrollY > bannerHeight);
      
      // Update active section based on scroll position
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        if (section) {
          const offset = isSticky ? 100 : 150; // Reduced offset to move menu closer
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
    <div className={`hidden lg:block ${isSticky ? 'fixed top-20' : 'absolute top-[30px]'} left-0 z-40`}>
      <div className="bg-white/80 backdrop-blur-sm rounded-r-2xl p-6 w-64">
        <nav className="space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const element = document.getElementById(link.id);
                if (element) {
                  const offset = isSticky ? 100 : 150; // Consistent offset
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`flex items-center gap-2 text-sm w-full text-left py-3 px-4 rounded-xl transition-all ${
                activeSection === link.id
                  ? 'bg-[#1a1db0] text-white font-bold'
                  : 'text-gray-700 hover:text-[#1a1db0]'
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
