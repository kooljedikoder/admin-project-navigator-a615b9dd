
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';

// This is a template that can be copied and adapted for other pages
const PageTemplate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Title</h1>
            <p className="text-xl max-w-2xl opacity-90">
              Brief description of the page and its purpose.
            </p>
          </div>
        </div>
        
        {/* Main Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-semibold mb-6">Section Heading</h2>
                <p className="text-lg mb-4">
                  Content paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
                </p>
                <p className="text-lg mb-4">
                  Content paragraph 2. Ut in nulla enim. Phasellus molestie magna non est bibendum
                  non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
                </p>
              </div>
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Section Image" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Additional Section - Can be duplicated as needed */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center">Another Section</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
                  <p className="text-gray-600">
                    Description of feature or point 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
                  <p className="text-gray-600">
                    Description of feature or point 2. Nullam in dui mauris vivamus hendrerit.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
                  <p className="text-gray-600">
                    Description of feature or point 3. Ut in nulla enim phasellus molestie magna.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Section with ID for anchor linking */}
            <section id="specific-section" className="mb-16">
              <h2 className="text-3xl font-semibold mb-6">Section with ID</h2>
              <p className="text-lg mb-4">
                This section has an ID that can be linked to directly from the menu (#specific-section).
                This is useful for creating anchor links to specific parts of a page.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Content specific to this section. This could be FAQ items, specific service details,
                  or any other content that needs to be directly accessible via the menu.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default PageTemplate;
