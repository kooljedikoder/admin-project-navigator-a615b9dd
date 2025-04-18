
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
      <StoryStep
        id={id}
        stepNumber={stepNumber}
        title={title}
        description={description}
        image={image}
        imagePosition={imagePosition}
      >
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
      </StoryStep>
    </Card>
  );
};

export default StoryContent;
