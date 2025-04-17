
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "ABC Corporation",
    content: "Working with this team has been transformative for our business. Their strategic approach and attention to detail helped us increase our market share by 25% in just six months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "TechStart Inc.",
    content: "The expertise and professionalism demonstrated by the team exceeded our expectations. They delivered a comprehensive solution that perfectly addressed our unique challenges.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Operations Manager",
    company: "Global Services Ltd.",
    content: "Their ability to understand our business needs and translate them into effective strategies has been invaluable. We've seen a significant improvement in operational efficiency.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop"
  }
];

const TestimonialsSlider: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses across various industries achieve their goals.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/1">
                  <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-xl p-8 shadow-md">
                    <div className="w-full md:w-2/5 flex justify-center">
                      <div className="relative">
                        <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          <Quote size={24} />
                        </div>
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
                          />
                        ) : (
                          <div className="w-36 h-36 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-4xl font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="w-full md:w-3/5">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-700 mb-4 italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div>
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="relative static translate-y-0 left-0 hover:bg-blue-600 hover:text-white" />
              <CarouselNext className="relative static translate-y-0 right-0 hover:bg-blue-600 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
