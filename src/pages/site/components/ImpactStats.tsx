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
  titleColor?: string;
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ title, description, stats, titleColor = '#7f86dc' }) => {
  return (
    <section className="bg-[#7f86dc]/10">
      <div className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" 
              alt="Impact"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-[#7f86dc]">{title}</h3>
            <p className="text-lg max-w-2xl mb-8 text-gray-600">
              {description}
            </p>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2 text-[#7f86dc]">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-start">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="text-white bg-[#7f86dc] hover:bg-[#7f86dc]/90"
                >
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
