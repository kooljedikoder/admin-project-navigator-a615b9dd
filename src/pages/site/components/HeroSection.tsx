
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
          src={backgroundImage}
          alt={title} 
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">{title}</h1>
          <p className="text-xl max-w-3xl text-white/90 font-light">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
