
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import SectionSideMenu, { SectionLink } from '@/components/navigation/SectionSideMenu';
import HeroSection from './components/HeroSection';
import StoryStep from './components/StoryStep';
import ImpactStats from './components/ImpactStats';

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
      
      <HeroSection 
        title="Where It All Began" 
        subtitle="Our journey from humble beginnings to industry leadership"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
      />
      
      <div className="relative bg-white">
        <SectionSideMenu links={sectionLinks} visible={true} />
          
        <section className="py-16 pl-0 lg:pl-64">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center">Our Story</h2>
              
            <div className="space-y-24 mb-16">
              <StoryStep 
                id="our-story"
                stepNumber={1}
                title="Our Founding Story"
                description="Founded in 2010, our journey began with a vision to transform how businesses approach digital solutions. Starting with just three passionate individuals, we set out to create meaningful change in the industry."
                listItems={[
                  'Initial vision and mission establishment',
                  'First team of innovators and dreamers',
                  'Overcoming early market challenges',
                  'First major client success story'
                ]}
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              />
              
              <StoryStep 
                id="our-heritage"
                stepNumber={2}
                title="Our Heritage"
                description="Built on decades of collective experience, our heritage combines traditional business wisdom with cutting-edge innovation. We've refined best practices from various industries into our unique methodology."
                listItems={[
                  'Deep industry expertise across sectors',
                  'Time-tested best practices',
                  'Innovation-driven approach',
                  'Legacy of excellence and trust'
                ]}
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                imagePosition="right"
              />
              
              <StoryStep 
                id="our-evolution"
                stepNumber={3}
                title="Our Evolution"
                description="From a traditional consulting firm to a dynamic technology partner, we've continuously evolved to meet changing market demands and technological advancements."
                listItems={[
                  'Expanded service portfolio',
                  'Technology advancement initiatives',
                  'Market adaptation strategies',
                  'Continuous growth milestones'
                ]}
                image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c5"
              />
              
              <StoryStep 
                id="key-milestones"
                stepNumber={4}
                title="Key Milestones"
                description="Our journey has been marked by significant achievements and transformative moments that have shaped our company's trajectory."
                listItems={[
                  '2010: Company foundation and initial market entry',
                  '2015: International market expansion',
                  '2018: Launch of AI solutions division',
                  '2020: Global recognition for excellence'
                ]}
                image="https://images.unsplash.com/photo-1552664730-d307ca884978"
                imagePosition="right"
              />
              
              <StoryStep 
                id="founding-principles"
                stepNumber={5}
                title="Founding Principles"
                description="Our core principles have guided our decisions and actions since day one, shaping our company culture and client relationships."
                listItems={[
                  'Unwavering commitment to innovation',
                  'Absolute integrity in all dealings',
                  'Measurable impact for clients',
                  'Pursuit of excellence in delivery'
                ]}
                image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                imagePosition="right"
              />
              
              <StoryStep 
                id="faq"
                stepNumber={6}
                title="Frequently Asked Questions"
                description="Get answers to common questions about our company's history, approach, and values."
                listItems={[
                  'What inspired the founding of Moore Advice?',
                  'How has the company evolved over the years?',
                  'What makes our approach unique in the industry?',
                  'How do we maintain our culture of innovation?'
                ]}
                image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                imagePosition="right"
              />
            </div>
              
            <ImpactStats 
              title="Our Impact"
              description="Over the years, our journey has created lasting impact across industries and organizations."
              stats={[
                { value: '100+', label: 'Global Clients' },
                { value: '15+', label: 'Years Experience' },
                { value: '95%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support' }
              ]}
            />
          </div>
        </section>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default Beginning;
