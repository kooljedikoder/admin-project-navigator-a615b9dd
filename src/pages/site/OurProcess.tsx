import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import SectionSideMenu, { SectionLink } from '@/components/navigation/SectionSideMenu';

const OurProcess = () => {
  const sectionLinks: SectionLink[] = [
    { id: 'consultation', label: 'Initial Consultation' },
    { id: 'kickoff', label: 'Project Kickoff' },
    { id: 'design', label: 'Design & Development' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      {/* Hero Banner with Image */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Our Process" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 py-16 flex items-center justify-center text-center h-[300px]">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Where We Shine</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 font-light">
              Our proven process delivers exceptional results every time
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section with Side Menu */}
      <div className="relative bg-white">
        <SectionSideMenu links={sectionLinks} visible={true} />
          
        {/* Process Steps */}
        <section className="py-16 pl-0 lg:pl-64">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center">Our Process</h2>
              
            <div className="space-y-16 mb-16">
              {/* Step 1 */}
              <div id="consultation" className="relative scroll-mt-24">
                <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                  1
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-light mb-4">Initial Consultation</h3>
                    <p className="text-lg mb-4 font-light">
                      We start by understanding your business objectives, target audience, and unique challenges.
                      This discovery phase helps us align our solutions with your specific needs and goals.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Comprehensive needs assessment
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Stakeholder interviews
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Market and competitor analysis
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Goal setting and success metrics
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                      alt="Initial Consultation" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
                
              {/* Step 2 */}
              <div id="kickoff" className="relative scroll-mt-24">
                <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                  2
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                      alt="Project Kickoff" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-light mb-4">Project Kickoff Speed</h3>
                    <p className="text-lg mb-4 font-light">
                      We assemble the right team for your project and create a detailed plan that outlines timelines,
                      deliverables, and key milestones. Our efficient kickoff process ensures a fast start.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Strategic team assembly
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Project scope definition
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Timeline and milestone planning
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Resource allocation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
                
              {/* Step 3 */}
              <div id="design" className="relative scroll-mt-24">
                <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                  3
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-light mb-4">Design, Develop & Deploy</h3>
                    <p className="text-lg mb-4 font-light">
                      Our creative and technical teams work collaboratively to bring your project to life,
                      following an iterative process with regular client touchpoints for feedback and refinement.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Creative concept development
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Iterative design and prototyping
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Development and quality assurance
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Seamless implementation and launch
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                      alt="Design & Develop" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
              
            {/* Results Section */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-light mb-4">The Outcomes</h3>
              <p className="text-lg max-w-2xl mx-auto mb-8 font-light">
                Our process is designed to deliver tangible results that help your business grow
                and succeed in today's competitive landscape.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-light text-blue-600 mb-2">93%</div>
                  <div className="text-gray-600 font-light">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-blue-600 mb-2">87%</div>
                  <div className="text-gray-600 font-light">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-blue-600 mb-2">76%</div>
                  <div className="text-gray-600 font-light">Increased ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600 font-light">Happy Clients</div>
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

export default OurProcess;
