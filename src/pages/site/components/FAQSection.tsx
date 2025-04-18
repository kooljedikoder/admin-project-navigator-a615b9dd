
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  return (
    <div id="faq" className="relative scroll-mt-24">
      <div className="flex items-center justify-center w-full mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold flex items-center justify-center">
          6
        </div>
      </div>
      <div className="w-full mb-8">
        <h3 className="text-2xl font-light mb-4 text-center">Frequently Asked Questions</h3>
        <p className="text-lg mb-6 font-light text-center max-w-3xl mx-auto">
          Explore common queries about our company's history, mission, and approach to helping businesses succeed.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Accordion type="single" collapsible className="w-full">
            {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
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
          <Accordion type="single" collapsible className="w-full">
            {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
              <AccordionItem key={index + Math.ceil(items.length / 2)} value={`item-${index + Math.ceil(items.length / 2)}`}>
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
      </div>
    </div>
  );
};

export default FAQSection;
