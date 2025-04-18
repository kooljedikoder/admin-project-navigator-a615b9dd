
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Book, Users, Grid, Handshake, Compass, Star, Phone, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { initialMenuItems } from '@/data/menuData';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  getMenuIcon: (label: string) => JSX.Element | null;
}

const MobileNav = ({ isOpen, onClose, getMenuIcon }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col gap-4">
          {initialMenuItems.map((item) => (
            <div key={item.id}>
              {item.children.length > 0 ? (
                <details className="group">
                  <summary className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200 flex justify-between items-center cursor-pointer">
                    <div className="flex items-center gap-2">
                      {getMenuIcon(item.label)}
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link 
                        key={child.id}
                        to={child.url} 
                        className="block text-gray-600 hover:text-blue-600 py-1"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link 
                  to={item.url} 
                  className="font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-200 flex items-center gap-2"
                  onClick={onClose}
                >
                  {getMenuIcon(item.label)}
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          ))}
          
          <div className="mt-4 flex flex-col gap-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Get a Consultation
            </Button>
            <Link 
              to="/admin"
              className="w-full py-2 flex justify-center items-center gap-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              onClick={onClose}
            >
              <UserRound size={18} />
              <span>Admin Dashboard</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
