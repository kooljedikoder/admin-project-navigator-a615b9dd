
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import StoryStep from './StoryStep';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  return (
    <Card className="p-8 shadow-lg">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="mb-8">
            <StoryStep id="faq" stepNumber={6} title="Frequently Asked Questions">
              <div className="mt-4">
                <p className="text-xl font-light text-gray-600">
                  Explore common queries about our company's history, mission, and approach to helping businesses succeed.
                </p>
              </div>
            </StoryStep>
          </div>
          <Accordion type="single" collapsible className="w-full border-0">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-light">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-light">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
            alt="Frequently Asked Questions" 
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </Card>
  );
};

export default FAQSection;
