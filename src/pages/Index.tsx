
import React from 'react';
import VideoHeroSlider from '@/components/home/VideoHeroSlider';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import LogoScroller from '@/components/home/LogoScroller';
import CTASection from '@/components/home/CTASection';
import BlogSection from '@/components/home/BlogSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import FooterSection from '@/components/home/FooterSection';
import MainNavigation from '@/components/home/MainNavigation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <VideoHeroSlider />
      
      <ServicesSection />
      
      <StatsSection />
      
      <TestimonialsSlider />
      
      <LogoScroller 
        title="Trusted by Leading Companies" 
        subtitle="We partner with forward-thinking businesses across industries"
      />
      
      <CTASection />
      
      <BlogSection />
      
      <NewsletterSection />
      
      <FooterSection />
    </div>
  );
};

export default Index;
