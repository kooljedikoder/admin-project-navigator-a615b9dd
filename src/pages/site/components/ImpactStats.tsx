
import React from 'react';

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
    <div>
      <h3 className="text-2xl font-light mb-4">{title}</h3>
      <p className="text-lg max-w-2xl mx-auto mb-8 font-light">
        {description}
      </p>
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-3xl font-light text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600 font-light">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;
