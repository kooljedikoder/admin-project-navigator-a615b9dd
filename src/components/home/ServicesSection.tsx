
import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Business Consulting',
    description: 'Strategic planning and consulting services to help your business grow',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Business',
  },
  {
    id: 2,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies for online success',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Marketing',
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Custom website development solutions for modern businesses',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'Workforce Solutions',
    description: 'Staffing and recruitment services to find the right talent',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'HR',
  },
  {
    id: 5,
    title: 'Financial Advisory',
    description: 'Expert financial consulting and planning for businesses',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Finance',
  },
  {
    id: 6,
    title: 'Training & Development',
    description: 'Professional development programs for your team',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=350&fit=crop',
    link: '/pages/services',
    category: 'Training',
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
