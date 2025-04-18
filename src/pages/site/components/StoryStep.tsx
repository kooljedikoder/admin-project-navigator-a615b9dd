
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
  children
}) => {
  return (
    <div id={id} className="relative scroll-mt-24">
      <div className="flex items-center justify-center w-full mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold flex items-center justify-center">
          {stepNumber}
        </div>
      </div>
      {children}
    </div>
  );
};

export default StoryStep;
