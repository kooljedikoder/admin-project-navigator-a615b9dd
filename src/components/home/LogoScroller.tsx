
import React from 'react';

interface LogoScrollerProps {
  title: string;
  subtitle: string;
}

const logos = [
  { id: 1, name: 'Company 1', logo: '/placeholder.svg' },
  { id: 2, name: 'Company 2', logo: '/placeholder.svg' },
  { id: 3, name: 'Company 3', logo: '/placeholder.svg' },
  { id: 4, name: 'Company 4', logo: '/placeholder.svg' },
  { id: 5, name: 'Company 5', logo: '/placeholder.svg' },
  { id: 6, name: 'Company 6', logo: '/placeholder.svg' },
  { id: 7, name: 'Company 7', logo: '/placeholder.svg' },
  { id: 8, name: 'Company 8', logo: '/placeholder.svg' },
];

const LogoScroller: React.FC<LogoScrollerProps> = ({ title, subtitle }) => {
  return (
    <section className="py-12 bg-blue-950 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-blue-200 mb-8">{subtitle}</p>
        
        <div className="overflow-hidden py-4">
          <div className="flex animate-[scroll_25s_linear_infinite] gap-8">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="flex-shrink-0 w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center p-4">
                <img 
                  src={logo.logo} 
                  alt={logo.name} 
                  className="max-h-full max-w-full object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroller;
