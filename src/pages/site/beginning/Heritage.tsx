
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const Heritage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      {/* Hero Banner with Image */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
            alt="Our Heritage" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Our Heritage</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 font-light">
              The rich history that shaped who we are today
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
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
              alt="Our Heritage" 
              className="rounded-lg shadow-md w-full h-64 object-cover mb-6" 
            />
            <img 
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521" 
              alt="Our Legacy" 
              className="rounded-lg shadow-md w-full h-64 object-cover" 
            />
          </div>
          <div>
            <p className="text-lg mb-4 font-light">
              Our heritage is built on decades of collective experience in technology and business transformation. 
              We've inherited the best practices from various industries and refined them into our unique approach.
            </p>
            <p className="text-lg mb-4 font-light">
              This rich history of innovation and excellence continues to guide our path forward, 
              influencing how we develop solutions and serve our clients.
            </p>
            <p className="text-lg mb-4 font-light">
              The foundations of our approach were laid by industry pioneers who recognized the need for more integrated 
              digital solutions that addressed genuine business challenges rather than just technical specifications.
            </p>
            <p className="text-lg font-light">
              We've carefully preserved this knowledge through mentorship programs and comprehensive documentation, 
              ensuring that each new team member benefits from the wisdom accumulated over years of successful projects.
            </p>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Heritage;
