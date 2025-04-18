
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
}

const StoryContent: React.FC<StoryContentProps> = ({
  id,
  stepNumber,
  title,
  description,
  image,
  imagePosition = 'left',
  items
}) => {
  return (
    <Card className="p-8 shadow-lg">
      <div className="mb-12">
        <StoryStep id={id} stepNumber={stepNumber} title={title}>
          <div className="mt-6">
            <p className="text-xl font-light text-gray-600">{description}</p>
          </div>
        </StoryStep>
      </div>

      <div className={`grid md:grid-cols-2 gap-12 items-start ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {imagePosition === 'left' ? (
          <div>
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        ) : null}
        <div>
          <Accordion type="single" collapsible className="border-0">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`${id}-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-light">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="font-light">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {imagePosition === 'right' ? (
          <div>
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default StoryContent;
