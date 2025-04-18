
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import SectionSideMenu, { SectionLink } from '@/components/navigation/SectionSideMenu';

const WhatWeDo = () => {
  const sectionLinks: SectionLink[] = [
    { id: 'retail-design', label: 'Retail & Brand Design' },
    { id: 'advertising', label: 'Advertising & Brand' },
    { id: 'web-development', label: 'Web Development' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-[#1704D5] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light mb-4">What We Do</h1>
            <p className="text-xl max-w-3xl opacity-90 font-light">
              Explore our comprehensive range of services designed to transform your brand and business
            </p>
          </div>
        </div>
        
        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4">Our Services</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600 font-light">
                We offer a wide range of integrated solutions to help businesses grow, innovate, and succeed in today's competitive landscape.
              </p>
            </div>
            
            {/* Retail & Brand Space Design */}
            <div id="retail-design" className="mb-20 scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Retail & Brand Space Design</h3>
                  <p className="text-lg mb-4">
                    We create immersive retail environments that tell your brand story and enhance customer experience.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Store layout and customer journey mapping
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Visual merchandising and product display
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Brand-aligned interior design
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Pop-up and experiential retail concepts
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="/placeholder.svg" 
                    alt="Retail Design" 
                    className="rounded-lg shadow-lg w-full object-cover h-80"
                  />
                </div>
              </div>
            </div>
            
            {/* Advertising & Brand Development */}
            <div id="advertising" className="mb-20 scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-4">Advertising & Brand Development</h3>
                  <p className="text-lg mb-4">
                    We develop comprehensive brand strategies and compelling advertising campaigns that resonate with your target audience.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Brand identity and visual language creation
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Integrated advertising campaigns
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Content strategy and creation
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Social media marketing
                    </li>
                  </ul>
                </div>
                <div className="order-2 md:order-1">
                  <img 
                    src="/placeholder.svg" 
                    alt="Advertising" 
                    className="rounded-lg shadow-lg w-full object-cover h-80"
                  />
                </div>
              </div>
            </div>
            
            {/* Placeholder for other service sections */}
            <div id="web-development" className="mb-20 scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Websites & Apps Development</h3>
                  <p className="text-lg mb-4">
                    We build custom digital experiences that engage users and drive business results.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Responsive website design and development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Custom web applications
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Mobile app development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      E-commerce solutions
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="/placeholder.svg" 
                    alt="Web Development" 
                    className="rounded-lg shadow-lg w-full object-cover h-80"
                  />
                </div>
              </div>
            </div>
            
            {/* Additional service sections would follow the same pattern */}
            <div className="text-center">
              <p className="text-lg mb-4">Interested in learning more about our services?</p>
              <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Contact Us Today
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <SectionSideMenu links={sectionLinks} visible={true} />
      <FooterSection />
    </div>
  );
};

export default WhatWeDo;
