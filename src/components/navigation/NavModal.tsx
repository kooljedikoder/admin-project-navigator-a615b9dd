
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
        <div className="relative min-h-[400px]">
          {backgroundVideo && (
            <>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={backgroundVideo} type="video/mp4" />
              </video>
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </>
          )}
          
          <div className="relative z-10 p-8">
            <h2 className="text-3xl font-semibold mb-4 text-white">{title}</h2>
            <p className="text-gray-200 mb-8 text-lg">{description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {subLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  className="group flex items-start p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                  onClick={onClose}
                >
                  <div className="flex-shrink-0 mr-4 text-blue-300">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white group-hover:text-blue-200 transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-sm text-gray-300">{link.description}</p>
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
