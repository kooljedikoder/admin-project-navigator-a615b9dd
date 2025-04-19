
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialPreviewProps {
  testimonials: Array<{
    id: string;
    name: string;
    title: string;
    company: string;
    content: string;
    rating: number;
    image: string;
    featured: boolean;
    active: boolean;
  }>;
  sectionTitle: string;
  sectionSubtitle: string;
}

const TestimonialsPreview: React.FC<TestimonialPreviewProps> = ({
  testimonials,
  sectionTitle,
  sectionSubtitle
}) => {
  const activeTestimonials = testimonials.filter(t => t.active);

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{sectionTitle}</h2>
          <p className="text-gray-600">{sectionSubtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`relative p-6 rounded-xl ${
                testimonial.featured 
                  ? 'bg-blue-50 border-2 border-blue-200' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {testimonial.featured && (
                <span className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Featured
                </span>
              )}
              
              <div className="flex space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= testimonial.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.title}
                    {testimonial.title && testimonial.company && ', '}
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPreview;
