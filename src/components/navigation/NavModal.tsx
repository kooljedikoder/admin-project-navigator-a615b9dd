
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
  backgroundVideo?: string;
}

const NavModal = ({ isOpen, onClose, title, description, subLinks, backgroundVideo }: NavModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="relative">
          {backgroundVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          )}
          
          <div className="relative z-10 p-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-8">{description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {subLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  className="group flex items-start p-4 rounded-lg hover:bg-blue-50 transition-colors"
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
                className="animate-pulse hover:animate-none"
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
