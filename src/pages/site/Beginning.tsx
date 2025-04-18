
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
      
      <div className="flex">
        <SectionSideMenu links={sectionLinks} visible={true} />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">In the Beginning</h1>
            
            {/* Our Story Section */}
            <section id="our-story" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                    Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                  </p>
                  <p className="text-lg">
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
              <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img src="/placeholder.svg" alt="Our Vision" className="rounded-lg shadow-md w-full h-64 object-cover" />
                </div>
                <div>
                  <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                    Vivamus hendrerit arcu sed erat molestie vehicula.
                  </p>
                  <p className="text-lg">
                    Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
                    Suspendisse dictum feugiat nisl ut dapibus.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Our Mission Section */}
            <section id="our-mission" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                    Vivamus hendrerit arcu sed erat molestie vehicula.
                  </p>
                  <p className="text-lg">
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
              <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <details key={item} className="group border border-gray-200 rounded-lg">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                      <span>Question {item} about our business?</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <div className="p-4 pt-0">
                      <p className="text-gray-600">
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
