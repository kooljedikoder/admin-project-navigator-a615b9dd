
import React from 'react';

export interface StoryStepProps {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  listItems: string[];
  image: string;
  imagePosition?: 'left' | 'right';
}

const StoryStep: React.FC<StoryStepProps> = ({
  id, 
  stepNumber, 
  title, 
  description, 
  listItems, 
  image,
  imagePosition = 'left'
}) => {
  return (
    <div id={id} className="relative scroll-mt-24">
      <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
        {stepNumber}
      </div>
      <div className={`grid md:grid-cols-2 gap-12 items-center ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {imagePosition === 'left' ? (
          <div>
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        ) : null}
        <div className={imagePosition === 'right' ? 'order-1' : ''}>
          <h3 className="text-2xl font-light mb-4">{title}</h3>
          <p className="text-lg mb-4 font-light">{description}</p>
          <ul className="space-y-2 font-light">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
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
