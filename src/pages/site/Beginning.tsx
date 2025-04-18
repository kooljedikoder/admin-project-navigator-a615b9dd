
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

const Beginning = () => {
  const submenuItems = [
    { 
      id: 'our-story', 
      label: 'Our Founding Story',
      url: '/beginning/founding-story',
      description: 'Learn about our journey from humble beginnings to industry leadership'
    },
    { 
      id: 'our-heritage', 
      label: 'Our Heritage',
      url: '/beginning/heritage',
      description: 'Discover the rich history and heritage that shaped our organization'
    },
    { 
      id: 'our-evolution', 
      label: 'Our Evolution',
      url: '/beginning/evolution',
      description: 'See how we've evolved and transformed over the years'
    },
    { 
      id: 'key-milestones', 
      label: 'Key Milestones',
      url: '/beginning/milestones',
      description: 'Explore the pivotal moments that defined our journey'
    },
    { 
      id: 'founding-principles', 
      label: 'Founding Principles',
      url: '/beginning/principles',
      description: 'Understand the core values and principles that guide our work'
    },
    { 
      id: 'faq', 
      label: 'FAQ',
      url: '/beginning/faq',
      description: 'Get answers to frequently asked questions about our organization'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      {/* Hero Banner with Image */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            alt="In the Beginning" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">In the Beginning</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 font-light">
              Our journey from humble beginnings to industry leadership
            </p>
          </div>
        </div>
      </div>
      
      {/* Submenu Cards Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-light mb-8 text-center">Explore Our Beginning</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {submenuItems.map((item) => (
            <Link key={item.id} to={item.url}>
              <Card className="h-full transition-all hover:shadow-md hover:border-blue-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center text-blue-600">
                    <span>Learn more</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default Beginning;
