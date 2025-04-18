import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';

const OurApproach = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h1>
            <p className="text-xl max-w-3xl opacity-90">
              Our unique approach and proven expertise set us apart from the competition
            </p>
          </div>
        </div>
        
        {/* 4D Strategy Section */}
        <section id="strategy" className="py-16 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our 4D Strategy</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                Our comprehensive approach ensures we deliver exceptional results that drive your business forward
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-3">01</div>
                <h3 className="text-xl font-semibold mb-3">Discover</h3>
                <p className="text-gray-600">
                  We begin by understanding your business, audience, and objectives through
                  in-depth research and analysis.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
                <div className="text-3xl font-bold text-purple-600 mb-3">02</div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-gray-600">
                  Our creative team crafts strategic solutions tailored to your unique challenges
                  and opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                <div className="text-3xl font-bold text-green-600 mb-3">03</div>
                <h3 className="text-xl font-semibold mb-3">Develop</h3>
                <p className="text-gray-600">
                  We implement our designs with precision, using cutting-edge technologies and
                  proven methodologies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600">
                <div className="text-3xl font-bold text-amber-600 mb-3">04</div>
                <h3 className="text-xl font-semibold mb-3">Deliver</h3>
                <p className="text-gray-600">
                  We launch your project successfully and provide ongoing support to ensure
                  lasting results.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section id="expertise" className="py-16 bg-gray-50 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Expertise</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                Decades of combined experience across multiple disciplines
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Industry Knowledge</h3>
                <p className="text-gray-600 mb-4">
                  Our team has deep expertise across various industries, allowing us to understand
                  the unique challenges and opportunities in each sector.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Finance</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Retail</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Technology</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Healthcare</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Technical Proficiency</h3>
                <p className="text-gray-600 mb-4">
                  We stay at the forefront of technological advancements to deliver cutting-edge
                  solutions that drive results.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Web Development</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Mobile Apps</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AI Integration</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">UX Design</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Creative Excellence</h3>
                <p className="text-gray-600 mb-4">
                  Our design team blends creativity with strategic thinking to create compelling
                  brand experiences that resonate with audiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Brand Identity</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Visual Design</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Content Creation</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Storytelling</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Other sections would follow the same pattern */}
        
        {/* Client Success Stories */}
        <section id="success-stories" className="py-16 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Client Success Stories</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                See how we've helped businesses like yours achieve their goals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gray-100">
                    <img 
                      src="/placeholder.svg" 
                      alt="Client Success Story" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded">Case Study</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Financial Tech Startup</h3>
                    <p className="text-gray-600 mb-4">
                      How we helped a fintech startup increase user acquisition by 150% through
                      a comprehensive digital transformation strategy.
                    </p>
                    <a href="#" className="text-blue-600 font-medium hover:underline">Read the full case study →</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gray-100">
                    <img 
                      src="/placeholder.svg" 
                      alt="Client Success Story" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded">Case Study</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Retail Chain Rebrand</h3>
                    <p className="text-gray-600 mb-4">
                      Our comprehensive rebrand of a national retail chain resulted in a 30%
                      increase in store traffic and 25% boost in sales.
                    </p>
                    <a href="#" className="text-blue-600 font-medium hover:underline">Read the full case study →</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                View All Case Studies
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default OurApproach;
