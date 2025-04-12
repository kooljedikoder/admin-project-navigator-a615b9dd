
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileWarning } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Mock page data - in a real app this would come from an API
const mockPages = {
  'home': {
    title: 'Home',
    content: '<h1>Welcome to our website</h1><p>This is the home page content with rich text formatting.</p>',
    metaDescription: 'Welcome to our website homepage',
    featuredImage: '/placeholder.svg',
    template: 'default'
  },
  'about-us': {
    title: 'About Us',
    content: '<h1>About Our Company</h1><p>Learn more about our mission, vision, and values.</p>',
    metaDescription: 'Learn more about our company',
    featuredImage: '/placeholder.svg',
    template: 'full-width'
  },
  'contact': {
    title: 'Contact Us',
    content: '<h1>Get in Touch</h1><p>We would love to hear from you. Contact us using the form below.</p>',
    metaDescription: 'Contact our team',
    featuredImage: '/placeholder.svg',
    template: 'contact'
  },
  'about-us/team': {
    title: 'Our Team',
    content: '<h1>Meet Our Team</h1><p>Our team is composed of industry experts dedicated to excellence.</p>',
    metaDescription: 'Meet our team of professionals',
    featuredImage: '/placeholder.svg',
    template: 'team'
  },
};

// Component to display the page content from HTML
const RichTextContent = ({ html }: { html: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const SitePages: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pageData, setPageData] = useState<typeof mockPages[keyof typeof mockPages] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate fetching page data
    setLoading(true);
    setTimeout(() => {
      if (slug && mockPages[slug as keyof typeof mockPages]) {
        setPageData(mockPages[slug as keyof typeof mockPages]);
        setError(false);
      } else {
        setPageData(null);
        setError(true);
      }
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="mt-2">Loading page...</p>
        </div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="container mx-auto max-w-4xl py-12">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>
        
        <Card className="flex flex-col items-center justify-center p-12 text-center">
          <FileWarning size={64} className="mb-4 text-amber-500" />
          <h1 className="mb-2 text-2xl font-bold">Page Not Found</h1>
          <p className="mb-6 text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/">Return to Homepage</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="text-xl font-bold">
            Your Website
          </Link>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link to="/pages/home" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pages/about-us" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pages/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="container mx-auto my-8 max-w-4xl px-4">
        {pageData.featuredImage && (
          <div className="mb-8">
            <img 
              src={pageData.featuredImage} 
              alt={pageData.title} 
              className="h-64 w-full rounded-lg object-cover"
            />
          </div>
        )}
        
        <article className="prose prose-stone mx-auto max-w-none lg:prose-lg">
          <RichTextContent html={pageData.content} />
        </article>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SitePages;
