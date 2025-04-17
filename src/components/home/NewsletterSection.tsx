
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NewsletterSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    toast.success('Thank you for subscribing to our newsletter!');
  };
  
  return (
    <section className="py-12 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-blue-200">
              Stay updated with our latest insights, industry news, and exclusive offers.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                required
                className="flex-grow bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus-visible:ring-blue-400"
              />
              <Button type="submit" className="bg-white text-blue-900 hover:bg-blue-100">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
