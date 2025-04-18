
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubLink {
  id: string;
  label: string;
  url: string;
  icon: React.ReactNode;
  description: string;
}

interface NavModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  subLinks: SubLink[];
  sideImage?: string;
}

const NavModal = ({ isOpen, onClose, title, description, subLinks, sideImage }: NavModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Side Image */}
          <div className="relative hidden md:block">
            <img
              src={sideImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f"}
              alt="Section Background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm" />
          </div>

          {/* Content Section */}
          <div className="p-8 bg-white">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">{title}</h2>
            <p className="text-gray-600 mb-8 text-lg">{description}</p>
            
            <div className="grid gap-4 mb-8">
              {subLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  className="group flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  onClick={onClose}
                >
                  <div className="flex-shrink-0 mr-4 text-blue-600">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={onClose}
                className="bg-blue-500 hover:bg-blue-600 text-white animate-pulse hover:animate-none"
                size="lg"
              >
                Go to Section
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NavModal;
