
import React from 'react';
import { ChevronDown } from 'lucide-react';
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
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">In the Beginning</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 font-light">
              Our journey from humble beginnings to industry leadership
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <SectionSideMenu links={sectionLinks} visible={true} />
        
        <main className="pl-0 lg:pl-64">
          <div className="container mx-auto px-4 py-12">
            {/* Our Founding Story Section */}
            <section id="our-story" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-4">Our Founding Story</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-4 font-light">
                    Founded in 2010, our journey began with a vision to transform how businesses approach digital solutions. 
                    Starting with just three passionate individuals, we set out to create meaningful change in the industry.
                  </p>
                  <p className="text-lg font-light">
                    What started as a small consulting firm has grown into a global technology partner, 
                    serving clients across continents while maintaining our core values and commitment to excellence.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                    alt="Our Story" 
                    className="rounded-lg shadow-md w-full h-64 object-cover" 
                  />
                </div>
              </div>
            </section>
            
            {/* Our Heritage Section */}
            <section id="our-heritage" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-4">Our Heritage</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
                    alt="Our Heritage" 
                    className="rounded-lg shadow-md w-full h-64 object-cover" 
                  />
                </div>
                <div>
                  <p className="text-lg mb-4 font-light">
                    Our heritage is built on decades of collective experience in technology and business transformation. 
                    We've inherited the best practices from various industries and refined them into our unique approach.
                  </p>
                  <p className="text-lg font-light">
                    This rich history of innovation and excellence continues to guide our path forward, 
                    influencing how we develop solutions and serve our clients.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Our Evolution Section */}
            <section id="our-evolution" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-4">Our Evolution</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-4 font-light">
                    Over the years, we've evolved from a traditional consulting firm into a dynamic technology partner. 
                    Our services have expanded to encompass the full spectrum of digital transformation.
                  </p>
                  <p className="text-lg font-light">
                    Each step in our evolution has been driven by client needs and technological advancement, 
                    ensuring we remain at the forefront of industry innovation.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c5" 
                    alt="Our Evolution" 
                    className="rounded-lg shadow-md w-full h-64 object-cover" 
                  />
                </div>
              </div>
            </section>
            
            {/* Key Milestones Section */}
            <section id="key-milestones" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-4">Key Milestones</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">2010</h3>
                  <p className="text-lg font-light">Company founded with initial focus on digital consulting</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">2015</h3>
                  <p className="text-lg font-light">Expanded into international markets</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">2018</h3>
                  <p className="text-lg font-light">Launched innovative AI solutions division</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">2020</h3>
                  <p className="text-lg font-light">Achieved global recognition for digital transformation excellence</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">2023</h3>
                  <p className="text-lg font-light">Established sustainability initiative and expanded service offerings</p>
                </div>
              </div>
            </section>
            
            {/* Founding Principles Section */}
            <section id="founding-principles" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-4">Founding Principles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-lg font-light">
                    Constantly pushing boundaries and embracing new technologies to deliver cutting-edge solutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p className="text-lg font-light">
                    Maintaining the highest standards of honesty and transparency in all our dealings.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Impact</h3>
                  <p className="text-lg font-light">
                    Creating meaningful change and delivering measurable results for our clients.
                  </p>
                </div>
              </div>
            </section>
            
            {/* FAQ Section */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-light mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "What inspired the founding of the company?",
                    answer: "The company was founded on the vision of transforming how businesses approach digital solutions, recognizing a gap in the market for integrated technology services."
                  },
                  {
                    question: "How has the company evolved since its founding?",
                    answer: "We've grown from a small consulting firm to a global technology partner, expanding our services and geographical presence while maintaining our core values."
                  },
                  {
                    question: "What sets your company apart from competitors?",
                    answer: "Our unique combination of industry expertise, innovative approach, and commitment to client success creates lasting partnerships and exceptional results."
                  },
                  {
                    question: "How do you maintain your founding principles as you grow?",
                    answer: "We integrate our core values into every aspect of our operations, from hiring to project delivery, ensuring consistency across all teams and locations."
                  }
                ].map((item, index) => (
                  <details key={index} className="group border border-gray-200 rounded-lg">
                    <summary className="flex justify-between items-center font-light cursor-pointer list-none p-4">
                      <span>{item.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <div className="p-4 pt-0">
                      <p className="text-gray-600 font-light">{item.answer}</p>
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
