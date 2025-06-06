
import React from 'react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import StoryStep from './StoryStep';
import { StoryContentItem } from '../data/storyContent';

interface StoryContentProps {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
  items: StoryContentItem[];
  titleColor?: string;
}

const StoryContent: React.FC<StoryContentProps> = ({
  id,
  stepNumber,
  title,
  description,
  image,
  imagePosition = 'left',
  items,
  titleColor = '#1a1db0'
}) => {
  return (
    <Card className="p-8 shadow-lg">
      <div className={`grid md:grid-cols-2 gap-12 items-center ${imagePosition === 'right' ? 'md:grid-flow-col-dense' : ''}`}>
        {/* Content Section */}
        <div className={`${imagePosition === 'right' ? 'md:col-start-1' : ''}`}>
          <div className="mb-8">
            <StoryStep id={id} stepNumber={stepNumber} title={title} titleColor={titleColor}>
              <div className="mt-4">
                <p className="text-xl font-light text-gray-600">{description}</p>
              </div>
            </StoryStep>
          </div>
          
          <Accordion type="single" collapsible className="border-0">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`${id}-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-light hover:text-[#1A1DB0] hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="font-light">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Image Section */}
        <div className={`${imagePosition === 'right' ? 'md:col-start-2' : ''}`}>
          <img 
            src={image} 
            alt={title} 
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </Card>
  );
};

export default StoryContent;
