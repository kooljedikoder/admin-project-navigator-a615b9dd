
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const FoundingStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      {/* Hero Banner with Image */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
            alt="Our Founding Story" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Our Founding Story</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 font-light">
              The journey of how we started and grew
            </p>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link to="/beginning">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronLeft className="h-4 w-4" />
              Back to Beginning
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4 font-light">
              Founded in 2010, our journey began with a vision to transform how businesses approach digital solutions. 
              Starting with just three passionate individuals, we set out to create meaningful change in the industry.
            </p>
            <p className="text-lg mb-4 font-light">
              What started as a small consulting firm has grown into a global technology partner, 
              serving clients across continents while maintaining our core values and commitment to excellence.
            </p>
            <p className="text-lg mb-4 font-light">
              In the early days, our team worked from a small office space, bootstrapping operations and focusing on building relationships.
              Our first client came through a personal connection, and their satisfaction led to referrals that helped us gain momentum.
            </p>
            <p className="text-lg font-light">
              By 2015, we had expanded to a team of 25 professionals and opened our first international office.
              The founding principles established during those formative years continue to guide our approach today.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
              alt="Our Story" 
              className="rounded-lg shadow-md w-full h-64 object-cover mb-6" 
            />
            <img 
              src="https://images.unsplash.com/photo-1509098674219-c73e42910f82" 
              alt="Our Team" 
              className="rounded-lg shadow-md w-full h-64 object-cover" 
            />
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default FoundingStory;
