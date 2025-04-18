
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
          alt={title} 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-[400px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">{title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
