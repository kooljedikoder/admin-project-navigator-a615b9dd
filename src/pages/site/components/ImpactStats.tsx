
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
}

interface ImpactStatsProps {
  title: string;
  description: string;
  stats: StatItem[];
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ title, description, stats }) => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-3xl font-bold mb-4 text-center">{title}</h3>
          <p className="text-lg max-w-2xl mx-auto mb-12 text-blue-100 text-center">
            {description}
          </p>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
