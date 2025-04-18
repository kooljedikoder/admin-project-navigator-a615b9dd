
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';

const WhoWeServe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">When & For Whom</h1>
            <p className="text-xl max-w-3xl opacity-90">
              Discover the industries we serve and clients we partner with to create exceptional solutions
            </p>
          </div>
        </div>
        
        {/* Intro Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4">Our Industry Expertise</h2>
              <p className="text-lg text-gray-600">
                With decades of combined experience, we've developed deep expertise across a diverse range of industries.
                Our specialized knowledge allows us to create tailored solutions that address the unique challenges and
                opportunities in each sector.
              </p>
            </div>
            
            {/* Industries We Serve */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* Financial Institutions */}
              <div id="financial" className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-600 scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4">Financial Institutions</h3>
                <p className="text-gray-600 mb-4">
                  We help banks, credit unions, and financial service providers modernize their brand presence
                  and create seamless digital experiences for customers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Banks</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Insurance</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Fintech</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Credit Unions</span>
                </div>
              </div>
              
              {/* Telecommunication Companies */}
              <div id="telecom" className="bg-white p-8 rounded-lg shadow-md border-t-4 border-purple-600 scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4">Telecommunication Companies</h3>
                <p className="text-gray-600 mb-4">
                  We partner with telecom providers to enhance customer experience through retail design,
                  digital interfaces, and integrated brand campaigns.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Mobile Carriers</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Internet Providers</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Data Services</span>
                </div>
              </div>
              
              {/* Mobile & PC Manufacturers */}
              <div id="manufacturers" className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-600 scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4">Mobile & PC Manufacturers</h3>
                <p className="text-gray-600 mb-4">
                  We help technology manufacturers create compelling brand experiences and retail environments
                  that showcase product innovation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Smartphones</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Laptops</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tablets</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Accessories</span>
                </div>
              </div>
              
              {/* Government and NGOs */}
              <div id="government" className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600 scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4">Government and NGOs</h3>
                <p className="text-gray-600 mb-4">
                  We support public institutions and non-profit organizations with messaging, outreach campaigns,
                  and digital platforms that effectively engage communities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Public Agencies</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Non-Profits</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Educational Institutions</span>
                </div>
              </div>
              
              {/* Large & Small Business */}
              <div id="business" className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-600 scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4">Large & Small Business</h3>
                <p className="text-gray-600 mb-4">
                  From Fortune 500 companies to startups, we provide scalable solutions that help businesses
                  of all sizes strengthen their market presence and grow.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Enterprises</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">SMBs</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Startups</span>
                </div>
              </div>
              
              {/* Retail & Hospitality */}
              <div id="retail" className="bg-white p-8 rounded-lg shadow-md border-t-4 border-teal-600 scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4">Retail & Hospitality</h3>
                <p className="text-gray-600 mb-4">
                  We help retail brands and hospitality businesses create memorable physical and digital
                  experiences that drive customer loyalty and sales.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Retail Chains</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Hotels</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Restaurants</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">E-commerce</span>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-blue-50 p-8 md:p-12 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
              <p className="text-lg max-w-2xl mx-auto mb-6">
                Whether you're in one of these industries or not, we'd love to discuss how our expertise
                can help your business succeed.
              </p>
              <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Let's Start a Conversation
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default WhoWeServe;
