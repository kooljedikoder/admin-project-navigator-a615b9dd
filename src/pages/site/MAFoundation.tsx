
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import { Button } from '@/components/ui/button';

const MAFoundation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">MA Foundation</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="MA Foundation" 
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Charitable Initiatives</h2>
              <p className="text-lg mb-4">
                The MA Foundation was established to give back to the communities where we work and live.
                Through our foundation, we channel resources, expertise, and passion into meaningful projects
                that create lasting positive impact.
              </p>
              <p className="text-lg mb-6">
                Our focus areas include education, sustainability, and supporting local businesses
                in underserved communities.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Support Our Foundation
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Education Initiatives</h3>
              <p className="mb-4">
                Supporting schools, scholarships, and educational programs to empower the next generation.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Learn more →</a>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Sustainability Projects</h3>
              <p className="mb-4">
                Promoting environmental responsibility through community-based green initiatives.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Learn more →</a>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="mb-4">
                Empowering local businesses and entrepreneurs in underserved communities.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Learn more →</a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$2M+</div>
                <div className="text-gray-600">Funds Raised</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25K+</div>
                <div className="text-gray-600">People Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-6">Get Involved</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg">
                Donate Now
              </Button>
              <Button variant="outline" size="lg">
                Volunteer Opportunities
              </Button>
              <Button variant="outline" size="lg">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default MAFoundation;
