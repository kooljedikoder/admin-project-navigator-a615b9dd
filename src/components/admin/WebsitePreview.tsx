
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WebsitePreviewProps {
  title: string;
  description: string;
  previewLink: string;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ title, description, previewLink }) => {
  return (
    <div className="admin-section">
      <h2 className="admin-subheading">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="flex-1 mx-2 bg-white rounded px-3 py-1 text-sm text-gray-600 truncate">
            {window.location.origin}
          </div>
        </div>
        
        <div className="relative h-96 bg-gray-50">
          <iframe 
            src={previewLink} 
            title="Website Preview" 
            className="w-full h-full border-0"
          ></iframe>
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 gap-2"
              size="lg"
              asChild
            >
              <a href={previewLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Open in New Tab
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-blue-600 hover:bg-blue-700 gap-2">
          <a href={previewLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            View Frontend
          </a>
        </Button>
        
        <Button variant="outline" className="gap-2" asChild>
          <a href="/admin/hero">
            Edit Hero Section
          </a>
        </Button>
        
        <Button variant="outline" className="gap-2" asChild>
          <a href="/admin/menus">
            Edit Navigation
          </a>
        </Button>
      </div>
    </div>
  );
};

export default WebsitePreview;
