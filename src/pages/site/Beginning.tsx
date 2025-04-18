import React from 'react';
import { Link } from 'react-router-dom';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import SectionSideMenu, { SectionLink } from '@/components/navigation/SectionSideMenu';
import HeroSection from './components/HeroSection';
import ImpactStats from './components/ImpactStats';
import StoryContent from './components/StoryContent';
import FAQSection from './components/FAQSection';
import { storyContent } from './data/storyContent';

const Beginning = () => {
  const sectionLinks: SectionLink[] = [
    { id: 'our-story', label: 'Our Story' },
    { id: 'our-heritage', label: 'Our Heritage' },
    { id: 'our-evolution', label: 'Our Evolution' },
    { id: 'key-milestones', label: 'Key Milestones' },
    { id: 'founding-principles', label: 'Founding Principles' },
    { id: 'faq', label: 'FAQ' }
  ];
  
  const faqItems = [
    {
      question: "When was the company founded?",
      answer: "Our company was founded in 2010 with a vision to transform how businesses approach digital solutions."
    },
    {
      question: "Who were the original founders?",
      answer: "The company was established by a team of industry veterans with decades of collective experience in technology and business consulting."
    },
    {
      question: "What was the company's first major project?",
      answer: "Our first major project was a digital transformation initiative for a Fortune 500 retail company, which set the foundation for our future success."
    },
    {
      question: "How has the company's mission evolved over time?",
      answer: "While our core values have remained consistent, our mission has evolved to embrace emerging technologies and changing market needs, always staying true to our commitment to innovation and excellence."
    },
    {
      question: "What major milestones shaped the company's growth?",
      answer: "Key milestones include our international expansion in 2015, achieving industry recognition in 2018, and launching our proprietary technology platform in 2020."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <HeroSection 
        title="Where It All Began" 
        subtitle="Our journey from humble beginnings to industry leadership"
        backgroundImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
      />
      
      <div className="relative bg-white">
        <SectionSideMenu links={sectionLinks} visible={true} />
          
        <section className="py-16 pl-0 lg:pl-64">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              <StoryContent
                id="our-story"
                stepNumber={1}
                title="Our Founding Story"
                description="Founded in 2010, our journey began with a bold vision to transform how businesses approach digital solutions."
                image="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                imagePosition="right"
                items={storyContent.foundingStory}
                titleColor="#7f86dc"
              />
              
              <StoryContent
                id="our-heritage"
                stepNumber={2}
                title="Our Heritage"
                description="Built on decades of collective experience, our heritage combines traditional business wisdom with cutting-edge innovation."
                image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                imagePosition="left"
                items={storyContent.heritage}
                titleColor="#7f86dc"
              />
              
              <StoryContent
                id="our-evolution"
                stepNumber={3}
                title="Our Evolution"
                description="From a traditional consulting firm to a dynamic technology partner, we've continually adapted to meet market demands."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                imagePosition="right"
                items={storyContent.evolution}
              />
              
              <StoryContent
                id="key-milestones"
                stepNumber={4}
                title="Key Milestones"
                description="Our journey has been marked by significant achievements that have solidified our position as industry leaders."
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                imagePosition="left"
                items={storyContent.milestones}
              />
              
              <StoryContent
                id="founding-principles"
                stepNumber={5}
                title="Founding Principles"
                description="Our core principles have been the driving force behind every decision and innovation."
                image="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                imagePosition="right"
                items={storyContent.principles}
              />
              
              <FAQSection items={faqItems} titleColor="#7f86dc" />
            </div>
          </div>
        </section>
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
        titleColor="#7f86dc"
      />
      <FooterSection />
    </div>
  );
};

export default Beginning;
