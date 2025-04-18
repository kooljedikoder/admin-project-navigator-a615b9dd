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
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Beginning = () => {
  const sectionLinks: SectionLink[] = [
    { id: 'our-story', label: 'Our Founding Story' },
    { id: 'our-heritage', label: 'Our Heritage' },
    { id: 'our-evolution', label: 'Our Evolution' },
    { id: 'key-milestones', label: 'Key Milestones' },
    { id: 'founding-principles', label: 'Founding Principles' },
    { id: 'faq', label: 'FAQ' }
  ];

  const faqItems = [
    {
      question: 'What inspired our founding?',
      answer: 'Our company was founded on the belief that businesses deserve technology solutions that truly understand their unique challenges. The founders saw a gap in the market for personalized, innovative approaches that could adapt to rapidly changing business environments.'
    },
    {
      question: 'How do we stay innovative?',
      answer: 'Innovation is built into our DNA through continuous learning, dedicated research and development teams, regular hackathons, and partnerships with academic institutions. We also encourage all team members to dedicate time to exploring new technologies and methodologies.'
    },
    {
      question: 'What sets us apart from competitors?',
      answer: 'Our unique blend of industry expertise, technological innovation, and customer-centric approach distinguishes us from competitors. We don\'t just implement solutions - we partner with clients to understand their business goals and create tailored strategies that deliver measurable results.'
    },
    {
      question: 'How do we select and support our clients?',
      answer: 'We carefully select clients whose values align with ours and where we believe we can make a significant impact. Our support extends beyond project completion with ongoing maintenance, training, strategic consulting, and 24/7 technical assistance to ensure continued success.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <HeroSection 
        title="Where It All Began" 
        subtitle="Our journey from humble beginnings to industry leadership"
        backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c5"
      />
      
      <div className="relative bg-white">
        <SectionSideMenu links={sectionLinks} visible={true} />
          
        <section className="py-16 pl-0 lg:pl-64">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center">Our Story</h2>
            
            <div className="space-y-24 mb-16">
              <StoryContent
                id="our-story"
                stepNumber={1}
                title="Our Founding Story"
                description="Founded in 2010, our journey began with a bold vision to transform how businesses approach digital solutions."
                image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                imagePosition="left"
                items={storyContent.foundingStory}
              />
              
              <StoryContent
                id="our-heritage"
                stepNumber={2}
                title="Our Heritage"
                description="Built on decades of collective experience, our heritage combines traditional business wisdom with cutting-edge innovation."
                image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                imagePosition="right"
                items={storyContent.heritage}
              />
              
              <StoryContent
                id="our-evolution"
                stepNumber={3}
                title="Our Evolution"
                description="From a traditional consulting firm to a dynamic technology partner, we've continually adapted to meet market demands."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                imagePosition="left"
                items={storyContent.evolution}
              />
              
              <StoryContent
                id="key-milestones"
                stepNumber={4}
                title="Key Milestones"
                description="Our journey has been marked by significant achievements that have solidified our position as industry leaders."
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                imagePosition="right"
                items={storyContent.milestones}
              />
              
              <StoryContent
                id="founding-principles"
                stepNumber={5}
                title="Founding Principles"
                description="Our core principles have been the driving force behind every decision and innovation."
                image="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                imagePosition="left"
                items={storyContent.principles}
              />
              
              <FAQSection items={faqItems} />
            </div>
            
            <div className="w-full bg-gray-50 p-8 rounded-lg text-center">
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
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
      />
      <FooterSection />
    </div>
  );
};

export default Beginning;
