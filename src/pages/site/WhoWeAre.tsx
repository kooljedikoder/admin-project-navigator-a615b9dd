
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Users, Image, ThumbsUp } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-xl max-w-2xl opacity-90">
              A dedicated team of professionals committed to excellence and innovation in every project we undertake.
            </p>
          </div>
        </div>
        
        {/* Our Culture Section */}
        <section id="our-culture" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Culture</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-4">
                  Our culture is built on collaboration, creativity, and a genuine passion for what we do.
                  We believe in fostering an environment where ideas can flourish and innovation is encouraged.
                </p>
                <p className="text-lg mb-6">
                  At the heart of our culture is a deep commitment to our clients' success and to delivering
                  work that exceeds expectations. We value transparency, integrity, and continuous learning.
                </p>
                <Link to="/who-we-are/core-values">
                  <Button size="lg">Explore Our Core Values</Button>
                </Link>
              </div>
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Our Culture" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section id="our-team" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Users className="text-blue-600 mr-3 h-8 w-8" />
              <h2 className="text-3xl font-semibold">Our Team</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((person) => (
                <div key={person} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Team Member ${person}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">John Doe</h3>
                    <p className="text-blue-600 mb-3">Position Title</p>
                    <p className="text-gray-600 mb-4">
                      Short bio about this team member and their expertise in the company.
                    </p>
                    <div className="flex gap-3">
                      <a href="#" className="text-gray-400 hover:text-blue-600">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-600">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-600">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Image className="text-blue-600 mr-3 h-8 w-8" />
              <h2 className="text-3xl font-semibold">Gallery</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((image) => (
                <div key={image} className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Gallery Image ${image}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      View Larger
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">View Full Gallery</Button>
            </div>
          </div>
        </section>
        
        {/* Rate Us Section */}
        <section id="rate-us" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <ThumbsUp className="text-blue-600 mr-3 h-8 w-8" />
              <h2 className="text-3xl font-semibold">Rate Us</h2>
            </div>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              We value your feedback! Let us know how we're doing and help us improve our services.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-6">Share Your Experience</h3>
              
              <div className="flex justify-center gap-2 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-10 w-10 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                ))}
              </div>
              
              <div className="mb-4">
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  rows={4}
                  placeholder="Tell us about your experience..."
                ></textarea>
              </div>
              
              <Button className="w-full" size="lg">Submit Rating</Button>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default WhoWeAre;
