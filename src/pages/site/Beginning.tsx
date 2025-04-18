
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import SectionSideMenu, { SectionLink } from '@/components/navigation/SectionSideMenu';

const Beginning = () => {
  const sectionLinks: SectionLink[] = [
    { id: 'our-story', label: 'Our Founding Story' },
    { id: 'our-heritage', label: 'Our Heritage' },
    { id: 'our-evolution', label: 'Our Evolution' },
    { id: 'key-milestones', label: 'Key Milestones' },
    { id: 'founding-principles', label: 'Founding Principles' },
    { id: 'faq', label: 'FAQ' }
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
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Where It All Began</h1>
            <p className="text-xl max-w-3xl text-white/90 font-light">
              Our journey from humble beginnings to industry leadership
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section with Side Menu */}
      <div className="relative bg-white">
        <SectionSideMenu links={sectionLinks} visible={true} />
          
        {/* Story Steps */}
        <section className="py-16 pl-0 lg:pl-64">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center">Our Story</h2>
              
            <div className="space-y-24 mb-16">
              {/* Step 1 */}
              <div id="our-story" className="relative scroll-mt-24">
                <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                  1
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-light mb-4">Our Founding Story</h3>
                    <p className="text-lg mb-4 font-light">
                      Founded in 2010, our journey began with a vision to transform how businesses approach digital solutions. 
                      Starting with just three passionate individuals, we set out to create meaningful change in the industry.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Initial vision and mission
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        First team members
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Early challenges
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        First client success
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                      alt="Our Founding Story" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
                
              {/* Step 2 */}
              <div id="our-heritage" className="relative scroll-mt-24">
                <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                  2
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
                      alt="Our Heritage" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-light mb-4">Our Heritage</h3>
                    <p className="text-lg mb-4 font-light">
                      Our heritage is built on decades of collective experience in technology and business transformation. 
                      We have inherited the best practices from various industries and refined them into our unique approach.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Industry expertise
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Best practices
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Innovation history
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Legacy of excellence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
                
              {/* Step 3 */}
              <div id="our-evolution" className="relative scroll-mt-24">
                <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                  3
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-light mb-4">Our Evolution</h3>
                    <p className="text-lg mb-4 font-light">
                      Over the years, we have evolved from a traditional consulting firm into a dynamic technology partner. 
                      Our services have expanded to encompass the full spectrum of digital transformation.
                    </p>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Service expansion
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Technology advancement
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Market adaptation
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        Growth milestones
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c5" 
                      alt="Our Evolution" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div id="key-milestones" className="relative scroll-mt-24">
                <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                  4
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                      alt="Key Milestones" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-light mb-4">Key Milestones</h3>
                    <div className="space-y-4 font-light">
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">2010:</span>
                        <p>Company founded with initial focus on digital consulting</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">2015:</span>
                        <p>Expanded into international markets</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">2018:</span>
                        <p>Launched innovative AI solutions division</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">2020:</span>
                        <p>Achieved global recognition for digital transformation excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div id="founding-principles" className="relative scroll-mt-24">
                <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                  5
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-light mb-4">Founding Principles</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                        <p className="text-sm font-light">
                          Pushing boundaries and embracing new technologies
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-lg font-semibold mb-2">Integrity</h4>
                        <p className="text-sm font-light">
                          Maintaining highest standards of honesty
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-lg font-semibold mb-2">Impact</h4>
                        <p className="text-sm font-light">
                          Creating meaningful change for clients
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-lg font-semibold mb-2">Excellence</h4>
                        <p className="text-sm font-light">
                          Delivering exceptional quality always
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="Founding Principles" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div id="faq" className="relative scroll-mt-24">
                <div className="flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                  6
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="FAQ" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-light mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">What inspired the founding of the company?</h4>
                        <p className="font-light">The desire to transform how businesses approach digital solutions, recognizing a gap in the market for integrated technology services.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">How has the company evolved?</h4>
                        <p className="font-light">From a small consulting firm to a global technology partner, expanding services while maintaining core values.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">What sets us apart?</h4>
                        <p className="font-light">Our unique combination of expertise, innovation, and commitment to client success.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
            {/* Results Section */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-light mb-4">Our Impact</h3>
              <p className="text-lg max-w-2xl mx-auto mb-8 font-light">
                Over the years, our journey has created lasting impact across industries and organizations.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-light text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600 font-light">Global Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600 font-light">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-blue-600 mb-2">95%</div>
                  <div className="text-gray-600 font-light">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600 font-light">Support</div>
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

export default Beginning;
