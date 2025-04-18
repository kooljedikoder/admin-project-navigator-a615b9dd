
import React from 'react';

export interface StoryStepProps {
  id: string;
  stepNumber: number;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  titleColor?: string;
}

const StoryStep: React.FC<StoryStepProps> = ({
  id, 
  stepNumber,
  title,
  children,
  titleColor = '#1a1db0'
}) => {
  return (
    <div id={id} className="relative scroll-mt-24">
      {title && (
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-8 h-8 rounded-full bg-[${titleColor}] text-white text-lg font-bold flex items-center justify-center shrink-0`}>
            {stepNumber}
          </div>
          <h3 className={`text-3xl font-light`} style={{ color: titleColor }}>{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

export default StoryStep;
