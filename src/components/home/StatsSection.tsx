
import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Impact</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            We're proud of the results we've achieved for our clients across different industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">25<span className="text-blue-300">%</span></div>
            <div className="text-xl font-semibold mb-1">Average Growth</div>
            <p className="text-blue-100">Increase in revenue for our clients</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">500<span className="text-blue-300">+</span></div>
            <div className="text-xl font-semibold mb-1">Clients Served</div>
            <p className="text-blue-100">Across various industries</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">15<span className="text-blue-300">+</span></div>
            <div className="text-xl font-semibold mb-1">Years Experience</div>
            <p className="text-blue-100">Of industry expertise</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">98<span className="text-blue-300">%</span></div>
            <div className="text-xl font-semibold mb-1">Client Retention</div>
            <p className="text-blue-100">Long-term partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
