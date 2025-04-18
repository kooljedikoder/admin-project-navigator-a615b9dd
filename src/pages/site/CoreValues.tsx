
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import { Shield, Heart, Lightbulb, Users, Zap, BarChart } from 'lucide-react';

const CoreValues = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              The principles that guide us and shape everything we do
            </p>
          </div>
        </div>
        
        {/* Values Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full inline-flex mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We uphold the highest ethical standards in all our interactions and commitments.
                  Honesty and transparency are central to how we operate.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 text-green-600 p-3 rounded-full inline-flex mb-4">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek new ideas and creative solutions, embracing change
                  and technological advancements to stay ahead of industry trends.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full inline-flex mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Passion</h3>
                <p className="text-gray-600">
                  We approach every project with enthusiasm and dedication, pouring our
                  hearts into delivering exceptional results that exceed expectations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 text-amber-600 p-3 rounded-full inline-flex mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of teamwork and partnership, valuing diverse
                  perspectives and fostering an inclusive environment.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-red-100 text-red-600 p-3 rounded-full inline-flex mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for the highest standards in everything we do, constantly
                  improving our skills and delivering quality work.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-teal-100 text-teal-600 p-3 rounded-full inline-flex mb-4">
                  <BarChart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
                <p className="text-gray-600">
                  We focus on measurable outcomes and tangible success, ensuring our
                  work creates real value for our clients and stakeholders.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center">How Our Values Drive Our Work</h2>
              <p className="text-lg text-center max-w-3xl mx-auto mb-8">
                Our core values aren't just words on a wall – they're the foundation of our company culture
                and inform every decision we make and every project we undertake.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">In Our Client Relationships</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      We maintain open and honest communication
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      We listen carefully to understand client needs
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      We deliver on our promises and meet deadlines
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      We provide strategic guidance based on expertise
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">In Our Work Process</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      We embrace creative problem-solving
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      We collaborate across disciplines for better solutions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      We maintain rigorous quality control
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      We continuously learn and improve our methods
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default CoreValues;
