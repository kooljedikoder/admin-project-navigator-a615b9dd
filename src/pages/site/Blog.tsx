
import React from 'react';
import MainNavigation from '@/components/home/MainNavigation';
import FooterSection from '@/components/home/FooterSection';
import { Clock, User, Tag, Search } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
          
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Featured Post */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/placeholder.svg" 
                  alt="Featured Post" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Featured</span>
                  <span className="mx-2">•</span>
                  <span>April 15, 2025</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-blue-600">
                  <a href="#">The Future of Brand Design in the Digital Era</a>
                </h2>
                <p className="text-gray-600 mb-4">
                  Explore how emerging technologies and changing consumer behaviors are reshaping brand design 
                  strategies and what this means for businesses in the coming years.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User size={16} className="mr-1" />
                  <span className="mr-4">John Smith</span>
                  <Clock size={16} className="mr-1" />
                  <span>8 min read</span>
                </div>
                <a 
                  href="#" 
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Blog Card */}
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <div key={post} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt={`Blog Post ${post}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="flex items-center">
                      <Tag size={14} className="mr-1" />
                      <span>Category</span>
                    </span>
                    <span className="mx-2">•</span>
                    <span>April 12, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-600">
                    <a href="#">Blog Post Title {post}</a>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the blog post that gives readers a preview of what
                    the article is about without revealing too much.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <User size={14} className="mr-1" />
                      <span>Jane Doe</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock size={14} className="mr-1" />
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-1">
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-blue-500 bg-blue-500 text-white rounded-md"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
              >
                3
              </a>
              <span className="px-4 py-2">...</span>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Blog;
