
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Our team of experts is ready to help you achieve your business goals with tailored strategies and innovative solutions.
            </p>
            
            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                  ✓
                </div>
                <span className="text-gray-700">Comprehensive business analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                  ✓
                </div>
                <span className="text-gray-700">Customized strategic planning</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                  ✓
                </div>
                <span className="text-gray-700">Implementation support and guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">
                  ✓
                </div>
                <span className="text-gray-700">Ongoing performance monitoring</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                Schedule a Consultation <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
