
import React from 'react';

export interface StoryStepProps {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
  children?: React.ReactNode;
}

const StoryStep: React.FC<StoryStepProps> = ({
  id, 
  stepNumber, 
  title, 
  description, 
  image,
  imagePosition = 'left',
  children
}) => {
  return (
    <div id={id} className="relative scroll-mt-24">
      <div className="flex items-center justify-center w-full mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold flex items-center justify-center">
          {stepNumber}
        </div>
      </div>
      <div className={`grid md:grid-cols-2 gap-12 items-start ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {imagePosition === 'left' ? (
          <div>
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        ) : null}
        <div className={`${imagePosition === 'right' ? 'order-1' : ''}`}>
          <h3 className="text-2xl font-light mb-2 text-center">{title}</h3>
          <p className="text-lg mb-6 font-light text-center">{description}</p>
          {children}
        </div>
        {imagePosition === 'right' ? (
          <div className="order-2">
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StoryStep;
