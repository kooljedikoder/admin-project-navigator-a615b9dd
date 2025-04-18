
import React from 'react';
import { ChevronDown } from 'lucide-react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import SectionSideMenu, { SectionLink } from '@/components/navigation/SectionSideMenu';

const Beginning = () => {
  const sectionLinks: SectionLink[] = [
    { id: 'our-story', label: 'Our Story' },
    { id: 'our-vision', label: 'Our Vision' },
    { id: 'our-mission', label: 'Our Mission' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      {/* Hero Banner with Image */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="/placeholder.svg" 
            alt="In the Beginning" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-[#1704D5]/70"></div>
        </div>
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">In the Beginning</h1>
            <p className="text-xl max-w-3xl text-white/90 font-light">
              Our journey, vision, and the mission that drives us forward
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <SectionSideMenu links={sectionLinks} visible={true} />
        
        <main className="pl-0 lg:pl-64">
          <div className="container mx-auto px-4 py-12">
            {/* Our Story Section */}
            <section id="our-story" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-4">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-4 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                    Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                  </p>
                  <p className="text-lg font-light">
                    Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
                    Suspendisse dictum feugiat nisl ut dapibus.
                  </p>
                </div>
                <div>
                  <img src="/placeholder.svg" alt="Our Story" className="rounded-lg shadow-md w-full h-64 object-cover" />
                </div>
              </div>
            </section>
            
            {/* Our Vision Section */}
            <section id="our-vision" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-4">Our Vision</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img src="/placeholder.svg" alt="Our Vision" className="rounded-lg shadow-md w-full h-64 object-cover" />
                </div>
                <div>
                  <p className="text-lg mb-4 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                    Vivamus hendrerit arcu sed erat molestie vehicula.
                  </p>
                  <p className="text-lg font-light">
                    Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
                    Suspendisse dictum feugiat nisl ut dapibus.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Our Mission Section */}
            <section id="our-mission" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-4">Our Mission</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-4 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                    Vivamus hendrerit arcu sed erat molestie vehicula.
                  </p>
                  <p className="text-lg font-light">
                    Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
                    Suspendisse dictum feugiat nisl ut dapibus.
                  </p>
                </div>
                <div>
                  <img src="/placeholder.svg" alt="Our Mission" className="rounded-lg shadow-md w-full h-64 object-cover" />
                </div>
              </div>
            </section>
            
            {/* FAQ Section */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <details key={item} className="group border border-gray-200 rounded-lg">
                    <summary className="flex justify-between items-center font-light cursor-pointer list-none p-4">
                      <span>Question {item} about our business?</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <div className="p-4 pt-0">
                      <p className="text-gray-600 font-light">
                        Answer to question {item}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default Beginning;
