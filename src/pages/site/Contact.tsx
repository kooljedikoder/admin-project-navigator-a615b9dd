
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import { Mail, Phone, MapPin, MessageSquare, Calendar, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Reach Us</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              We're here to help with any questions you might have. Get in touch with our team.
            </p>
          </div>
        </div>
        
        {/* Contact Methods Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div id="contact-info" className="bg-white p-8 rounded-lg shadow-sm border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email or Phone</h3>
                <p className="text-gray-600 mb-4">
                  Reach out directly for any inquiries or questions
                </p>
                <div className="space-y-2 mb-4">
                  <a href="mailto:info@example.com" className="block text-blue-600 hover:underline">info@example.com</a>
                  <a href="tel:+12345678900" className="block text-blue-600 hover:underline">+1 (234) 567-8900</a>
                </div>
              </div>
              
              <div id="callback" className="bg-white p-8 rounded-lg shadow-sm border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Request a Callback</h3>
                <p className="text-gray-600 mb-4">
                  Leave your number and we'll call you back
                </p>
                <form className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <input 
                    type="tel" 
                    placeholder="Your Phone Number" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <Button className="w-full">Request Call</Button>
                </form>
              </div>
              
              <div id="appointment" className="bg-white p-8 rounded-lg shadow-sm border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                  <Calendar size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Book an Appointment</h3>
                <p className="text-gray-600 mb-4">
                  Schedule a meeting with our team
                </p>
                <Button className="w-full mb-3">Book Online</Button>
                <p className="text-sm text-gray-500">
                  Available Monday to Friday, 9am to 5pm
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div id="whatsapp" className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full">
                      <MessageSquare size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Chat with Us via WhatsApp</h3>
                    <p className="text-gray-600">
                      Get quick responses to your questions
                    </p>
                  </div>
                </div>
                <p className="mb-6">
                  Our customer support team is available via WhatsApp for quick inquiries and support.
                  We typically respond within minutes during business hours.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Start WhatsApp Chat
                </Button>
              </div>
              
              <div id="careers" className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 text-amber-600 rounded-full">
                      <Building size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Apply for a Career</h3>
                    <p className="text-gray-600">
                      Join our talented team
                    </p>
                  </div>
                </div>
                <p className="mb-6">
                  Interested in working with us? We're always looking for talented individuals
                  to join our team. Check out our current openings or send us your resume.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline">View Open Positions</Button>
                  <Button>Send Resume</Button>
                </div>
              </div>
            </div>
            
            <div id="visit" className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Visit Our Office</h3>
                    <p className="text-gray-600">
                      Come see us in person
                    </p>
                  </div>
                </div>
                <address className="not-italic mb-4">
                  <p className="mb-1">1234 Business Avenue</p>
                  <p className="mb-1">Suite 500</p>
                  <p className="mb-1">New York, NY 10001</p>
                  <p>United States</p>
                </address>
                <p className="text-gray-600 mb-4">
                  <strong>Business Hours:</strong><br />
                  Monday to Friday: 9am - 5pm<br />
                  Saturday & Sunday: Closed
                </p>
                <Button variant="outline">Get Directions</Button>
              </div>
              
              <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                {/* This would be a map in a real implementation */}
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-600">Interactive Map Would Be Here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Contact;
