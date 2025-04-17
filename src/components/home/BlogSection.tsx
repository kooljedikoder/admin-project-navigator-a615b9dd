
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Strategies for Business Growth in 2025",
    excerpt: "Learn the top strategies that successful businesses are implementing to achieve sustainable growth in the coming year.",
    date: "April 10, 2025",
    author: "Michael Roberts",
    category: "Business Strategy",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
    slug: "strategies-for-business-growth"
  },
  {
    id: 2,
    title: "The Impact of AI on Modern Workplaces",
    excerpt: "Discover how artificial intelligence is transforming workplace productivity and creating new opportunities for innovation.",
    date: "April 8, 2025",
    author: "Sarah Chen",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
    slug: "ai-impact-on-workplaces"
  },
  {
    id: 3,
    title: "Building a Resilient Supply Chain",
    excerpt: "Explore practical approaches to developing supply chain resilience in an increasingly unpredictable global market.",
    date: "April 5, 2025",
    author: "David Wilson",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&h=300&fit=crop",
    slug: "resilient-supply-chain"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Latest Insights</h2>
            <p className="text-gray-600 max-w-2xl">
              Expert perspectives and industry analysis to help guide your business decisions.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 border-blue-600 text-blue-600 hover:bg-blue-50"
            asChild
          >
            <a href="/blog">
              View All Articles <ArrowRight size={16} className="ml-1" />
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow transition-all hover:shadow-md">
              <a href={`/blog/${post.slug}`} className="block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
