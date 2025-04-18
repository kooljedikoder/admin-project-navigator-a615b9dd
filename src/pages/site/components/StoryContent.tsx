
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
        <div className={`grid md:grid-cols-2 gap-12 items-start ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
          {imagePosition === 'left' ? (
            <div>
              <div className="mb-8">
                <h4 className="text-xl font-light mb-2">{title}</h4>
                <p className="text-base font-light text-gray-600">{description}</p>
              </div>
              <img 
                src={image} 
                alt={title} 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          ) : null}
          <div>
            <div className="mb-8">
              <h4 className="text-xl font-light mb-2">{title}</h4>
              <p className="text-base font-light text-gray-600">{description}</p>
            </div>
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
              <div className="mb-8">
                <h4 className="text-xl font-light mb-2">{title}</h4>
                <p className="text-base font-light text-gray-600">{description}</p>
              </div>
              <img 
                src={image} 
                alt={title} 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          ) : null}
        </div>
      </StoryStep>
    </Card>
  );
};

export default StoryContent;
