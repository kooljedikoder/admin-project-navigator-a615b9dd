
import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Retail & Brand Space Design',
    description: 'Transform your physical spaces into immersive brand experiences',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Retail',
  },
  {
    id: 2,
    title: 'Advertising & Brand Development',
    description: 'Strategic brand development and advertising solutions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Branding',
  },
  {
    id: 3,
    title: 'Websites & Apps Development',
    description: 'Custom website and application development solutions',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Development',
  },
  {
    id: 4,
    title: 'Digital Signage & OOH',
    description: 'Impactful digital signage and out-of-home advertising',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Digital',
  },
  {
    id: 5,
    title: 'Project Management',
    description: 'Expert project planning and execution services',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Management',
  },
  {
    id: 6,
    title: 'A.I. & Brand Transformation',
    description: 'AI-powered solutions for business transformation',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'AI',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions designed to meet your business needs and help you achieve sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {service.category}
                </div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={service.link} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
