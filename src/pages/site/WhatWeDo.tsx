
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import SectionSideMenu, { SectionLink } from '@/components/navigation/SectionSideMenu';

const WhatWeDo = () => {
  const sectionLinks: SectionLink[] = [
    { id: 'retail-design', label: 'Retail & Brand Space Design' },
    { id: 'advertising', label: 'Advertising & Brand Development' },
    { id: 'web-development', label: 'Websites & Apps Development' },
    { id: 'digital-signage', label: 'Digital Signage & OOH' },
    { id: 'project-management', label: 'Project Management' },
    { id: 'ai-transformation', label: 'A.I. & Brand Transformation' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      {/* Hero Banner with Image */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="What We Do" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">What We Do</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 font-light">
              Explore our comprehensive range of services designed to transform your brand
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative bg-white">
        <SectionSideMenu links={sectionLinks} visible={true} />
        
        <section className="py-16 pl-0 lg:pl-64">
          <div className="container mx-auto px-4">
            <div className="space-y-24 mb-16">
              {/* Retail & Brand Space Design */}
              <div id="retail-design" className="scroll-mt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-light mb-4">Retail & Brand Space Design</h3>
                    <p className="text-lg mb-4 font-light">
                      Transform your physical spaces into immersive brand experiences that captivate 
                      customers and drive engagement.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Store layout optimization
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Visual merchandising
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Brand environment design
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Interactive displays
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                      alt="Retail Design"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Advertising & Brand Development */}
              <div id="advertising" className="scroll-mt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                      alt="Advertising"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-light mb-4">Advertising & Brand Development</h3>
                    <p className="text-lg mb-4 font-light">
                      Create compelling brand stories and advertising campaigns that resonate with 
                      your target audience and drive results.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Brand strategy development
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Creative campaign design
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Social media marketing
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Content creation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Web Development */}
              <div id="web-development" className="scroll-mt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-light mb-4">Websites & Apps Development</h3>
                    <p className="text-lg mb-4 font-light">
                      Build powerful digital experiences that engage users and drive business growth 
                      through innovative technology solutions.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Custom website development
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Mobile app development
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        E-commerce solutions
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Web applications
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                      alt="Web Development"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Digital Signage */}
              <div id="digital-signage" className="scroll-mt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                      alt="Digital Signage"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-light mb-4">Digital Signage & OOH</h3>
                    <p className="text-lg mb-4 font-light">
                      Create impactful outdoor and indoor digital experiences that capture attention 
                      and deliver your message effectively.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Digital billboard design
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Interactive displays
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Content management systems
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Analytics and reporting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project Management */}
              <div id="project-management" className="scroll-mt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-light mb-4">Project Management</h3>
                    <p className="text-lg mb-4 font-light">
                      Ensure successful project delivery through expert planning, execution, and 
                      monitoring of all project phases.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Project planning
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Resource allocation
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Risk management
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Quality assurance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c5"
                      alt="Project Management"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* AI Transformation */}
              <div id="ai-transformation" className="scroll-mt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                      alt="AI Transformation"
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-light mb-4">A.I. & Brand Transformation</h3>
                    <p className="text-lg mb-4 font-light">
                      Leverage the power of artificial intelligence to transform your business operations 
                      and customer experiences.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        AI strategy development
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Machine learning integration
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Automation solutions
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Data analytics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default WhatWeDo;
