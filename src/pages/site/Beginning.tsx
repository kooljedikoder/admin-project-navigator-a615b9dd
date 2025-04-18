
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
                description="Founded in 2010, our journey began with a bold vision to transform how businesses approach digital solutions. Starting with just three passionate individuals, we set out to create meaningful change in the industry."
                listItems={[
                  'Initial vision and mission establishment',
                  'First team of innovators and dreamers',
                  'Overcoming early market challenges',
                  'First major client breakthrough'
                ]}
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              />
              
              <StoryStep 
                id="our-heritage"
                stepNumber={2}
                title="Our Heritage"
                description="Built on decades of collective experience, our heritage combines traditional business wisdom with cutting-edge technological innovation. We've cultivated a unique approach that bridges generations of knowledge."
                listItems={[
                  'Interdisciplinary professional backgrounds',
                  'Cross-industry expertise',
                  'Commitment to continuous learning',
                  'Preserving core values while embracing change'
                ]}
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                imagePosition="right"
              />
              
              <StoryStep 
                id="our-evolution"
                stepNumber={3}
                title="Our Evolution"
                description="From a traditional consulting firm to a dynamic technology partner, we've continually adapted to meet the rapidly changing market demands and technological advancements."
                listItems={[
                  'Expanding service portfolio',
                  'Investment in emerging technologies',
                  'Adapting to global market shifts',
                  'Building agile, forward-thinking teams'
                ]}
                image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c5"
              />
              
              <StoryStep 
                id="key-milestones"
                stepNumber={4}
                title="Key Milestones"
                description="Our journey has been marked by significant achievements that have solidified our position as industry leaders and innovators."
                listItems={[
                  '2010: Company foundation',
                  '2015: International expansion',
                  '2018: AI and digital transformation division launch',
                  '2022: Global innovation award'
                ]}
                image="https://images.unsplash.com/photo-1552664730-d307ca884978"
                imagePosition="right"
              />
              
              <StoryStep 
                id="founding-principles"
                stepNumber={5}
                title="Founding Principles"
                description="Our core principles have been the driving force behind every decision, strategy, and innovation since our inception."
                listItems={[
                  'Customer-centric approach',
                  'Technological innovation',
                  'Ethical business practices',
                  'Continuous improvement'
                ]}
                image="https://images.unsplash.com/photo-1486312338219-25f4aba1f72f"
              />
              
              <StoryStep 
                id="faq"
                stepNumber={6}
                title="Frequently Asked Questions"
                description="Explore common queries about our company's history, mission, and approach to helping businesses succeed."
                listItems={[
                  'What inspired our founding?',
                  'How do we stay innovative?',
                  'What sets us apart from competitors?',
                  'How do we select and support our clients?'
                ]}
                image="https://images.unsplash.com/photo-1488590528505-98d2b5ade38b"
                imagePosition="right"
              />
            </div>
              
            <ImpactStats 
              title="Our Impact"
              description="Our commitment to excellence and innovation has driven tangible results across industries and organizations."
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

