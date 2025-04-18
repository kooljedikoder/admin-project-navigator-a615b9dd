
import React from 'react';

export interface StoryStepProps {
  id: string;
  stepNumber: number;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
}

const StoryStep: React.FC<StoryStepProps> = ({
  id, 
  stepNumber, 
  children
}) => {
  return (
    <div id={id} className="relative scroll-mt-24">
      <div className="flex items-center gap-4 justify-center w-full mb-6">
        <div className="w-8 h-8 rounded-full bg-[#1a1db0] text-white text-lg font-bold flex items-center justify-center">
          {stepNumber}
        </div>
      </div>
      {children}
    </div>
  );
};

export default StoryStep;
