
import React from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from 'lucide-react';
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
  const firstColumn = subLinks.slice(0, 3);
  const secondColumn = subLinks.slice(3, 6);

  const scrollToSection = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-8 p-8 bg-white">
            <h2 className="text-3xl font-semibold mb-4 text-[#7f86dc]">{title}</h2>
            <p className="text-gray-600 mb-8">{description}</p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                {firstColumn.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <div className="flex-shrink-0 mr-3 text-[#7f86dc]">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 group-hover:text-[#7f86dc] transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{link.description}</p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <Button 
                        size="sm"
                        className="animate-pulse bg-[#7f86dc] hover:bg-[#7f86dc]/90 text-white"
                      >
                        <ChevronRight size={16} />
                        <span className="ml-1 text-xs">Go to section</span>
                      </Button>
                    </div>
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {secondColumn.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <div className="flex-shrink-0 mr-3 text-[#7f86dc]">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 group-hover:text-[#7f86dc] transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{link.description}</p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <Button 
                        size="sm"
                        className="animate-pulse bg-[#7f86dc] hover:bg-[#7f86dc]/90 text-white"
                      >
                        <ChevronRight size={16} />
                        <span className="ml-1 text-xs">Go to section</span>
                      </Button>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={onClose}
                className="bg-[#7f86dc] hover:bg-[#7f86dc]/90 text-white"
                size="lg"
              >
                Close
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative col-span-4 h-full">
            <img
              src={sideImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f"}
              alt="Section Background"
              className="h-full w-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-[#7f86dc]/10 backdrop-blur-[1px]" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NavModal;
