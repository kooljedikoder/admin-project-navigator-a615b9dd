
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

const ImpactStats: React.FC<ImpactStatsProps> = ({ title, description, stats, titleColor = '#1A1DB0' }) => {
  return (
    <section className="bg-[#1A1DB0]/05">
      <div className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 md:w-full">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" 
              alt="Impact"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:col-span-2 text-center">
            <h3 className={`text-3xl font-bold mb-4 text-[${titleColor}]`}>{title}</h3>
            <p className="text-lg max-w-2xl mb-8 text-gray-600 mx-auto">
              {description}
            </p>
            <div className="grid md:grid-cols-4 gap-8 mb-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className={`text-4xl font-bold mb-2 text-[${titleColor}]`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className={`text-white bg-[${titleColor}] hover:bg-[${titleColor}]/90`}
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
